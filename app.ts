// require section

var express = require('express'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    puppeteer = require('puppeteer'),
    puppeteerCore = require('puppeteer-core'),
    mongoClient = require('mongodb').MongoClient,
    https = require('https'),
    app = express();

// inefficient section variables

// let pricesArray = [];
// let titlesArray = [];


// middlewares bodyParser + cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


let pricesArray = [];
let validatePrice = [];
// database section --> mongoDB
let mongoURL = 'mongodb://shiboBlank:aZoiUzDibkFxLfIy@clusterfusioncraft-shard-00-00-jd8xk.mongodb.net:27017,clusterfusioncraft-shard-00-01-jd8xk.mongodb.net:27017,clusterfusioncraft-shard-00-02-jd8xk.mongodb.net:27017/test?ssl=true&replicaSet=ClusterFusionCraft-shard-0&authSource=admin&retryWrites=true';
let shortMongoURL = 'mongodb+srv://shiboBlank:aZoiUzDibkFxLfIy@clusterfusioncraft-jd8xk.mongodb.net/test?retryWrites=true';
// connect mongDB --- not working on server???

/*mongoClient.connect(this.mongoURL, { useNewUrlParser: true }, function (err, client) {


    let db = client.db('fusionCraftInvoice');



    // get results

    // db.collection('customer').find().toArray(function (err, result) {
    db.collection('customer').find().toArray(function (findErr, results) {
        //console.log(results);
        client.close();
    });
});*/

var connection = this.mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'blank_agency'
});

connection.connect();


// routing section


app.get("*", function (request, response) {
    //response.redirect("https://" + request.headers.host + request.url);
    response.sendFile(path.join(__dirname + '/public/website/index.html'));
});


app.get("/", function (req, res) {
    res.send('hello world');
});

app.get('/customers', function (req, res) {
    connection.query('SELECT * FROM customers', function (err, rows) {
        const results = JSON.stringify(rows);
        console.log(req.param("term"));
        res.send(results);
    })

})




// test section - can be skipped - post request

app.post('/puppet', function (req, res) {


    // test function - can be skipped


    console.log(req.body.term);
    console.log(req.body.price);


    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });




        let pages = await browser.pages();
        do {
            await this.pages[0].goto('https://www.ebay-kleinanzeigen.de/');

            await this.pages[0].click('#site-search-query');
            await this.pages[0].keyboard.type(req.body.term);
            await this.pages[0].click('#site-search-submit');
            await this.pages[0].waitForNavigation({ waitUntil: 'networkidle2' });


            this.pricesArray = await this.pages[0].evaluate(

                () => [...document.querySelectorAll('strong')].map(elem => elem.innerText)

            );

           this.validatePrice = await pages[0].evaluate(() => {
                for (let i = 0; i < this.pricesArray.length; i++) {
                    if (this.pricesArray[i] === req.body.price) {
                        console.log(this.validatePrice)

                    }

                }
            }
            )


            console.log(this.pricesArray);
        } while (this.pricesArray === [])
        await console.log(this.pricesArray);
        await res.send(this.pricesArray);
        await browser.close();
    })();
})




// app listen port

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

