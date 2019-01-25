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
// database section --> mongoDB
let mongoURL = 'mongodb://shiboBlank:aZoiUzDibkFxLfIy@clusterfusioncraft-shard-00-00-jd8xk.mongodb.net:27017,clusterfusioncraft-shard-00-01-jd8xk.mongodb.net:27017,clusterfusioncraft-shard-00-02-jd8xk.mongodb.net:27017/test?ssl=true&replicaSet=ClusterFusionCraft-shard-0&authSource=admin&retryWrites=true';
let shortMongoURL = 'mongodb+srv://shiboBlank:aZoiUzDibkFxLfIy@clusterfusioncraft-jd8xk.mongodb.net/test?retryWrites=true';
// connect mongDB --- not working on server???

mongoClient.connect(mongoURL, { useNewUrlParser: true }, function (err, client) {
    if (err) throw err;

    var db = client.db('fusionCraftInvoice');



    // get results

    // db.collection('customer').find().toArray(function (err, result) {
    db.collection('customer').find().toArray(function (findErr, results) {
        if (findErr) throw findErr;
        //console.log(results);
        client.close();
    });
});

var connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'blank_agency'
});

connection.connect();


// routing section


app.get("*", function (request, response) {
    //response.redirect("https://" + request.headers.host + request.url);
    res.sendFile(path.join(__dirname + '/public/website/index.html'));
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

    /*  const test = (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://google.de');
            await page.screenshot({path: 'google.png'});
          
            await browser.close();
    
          })();
  
  
      // ________________test-function-end______________
  
  */


    // inefficient section --> API

 /*    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });


         let pages = await browser.pages();
  
          do {
              await pages[0].goto('https://www.ebay.de');
  
  
  
              await pages[0].click('#gh-ac');
              await pages[0].keyboard.type(req.body.term);
              await pages[0].click('#gh-btn');
              await pages[0].waitForNavigation({ waitUntil: 'networkidle2' });
              // const url = await pages[0].url();
              //console.log(url);
              // console.log(pages)
  
              pricesArray = await pages[0].evaluate(
  
                  () => [...document.querySelectorAll('.s-item__price')].map(elem => elem.innerText)
  
              );
  
              //console.log(validation);
              titlesArray = await pages[0].evaluate(
  
                  () => [...document.querySelectorAll('a.vip')].map(elem => elem.getAttribute('title'))
              );
  
  
  
              console.log(titlesArray);
          } while (pricesArray === [])
  
          //  var objects = Object.keys(pricesArray);
          //  console.log('objects', objects);
          const stockX = await browser.newPage();
          await stockX.goto('https://stockx.com/');
          await stockX.click('#home-search');
          await stockX.keyboard.type(req.body.term);
          await stockX.keyboard.press('Enter');
  
          pages[1] = stockX;
          console.log(await pages[1].url());
          const links = await pages[1].$('a[class=title-list]');
          //console.log(links);
  
  
  
          const blankAgency = await browser.newPage();
          await blankAgency.goto('https://blank-agency.org/apps/puppet');
          //await blankAgency.waitForNavigation({ waitUntil: 'networkidle2' });
          await blankAgency.emulateMedia('screen');
          await blankAgency.pdf({ path: 'blank.pdf' });
  
          await console.log(pricesArray);
          await res.send(pricesArray);
          await browser.close();
      })();
  
         // ____________________inefficient-section-end___________________
  */

 (async () => {
    const browser = await puppeteer.launch({
        headless: false
    });




    let pages = await browser.pages();
    do {


        const stockX = await browser.newPage();
        await stockX.goto('https://stockx.com/', {waitUntil: 'domcontentloaded'});

        await stockX.click('#home-search');
        await stockX.keyboard.type(req.body.term);
        await stockX.keyboard.press('Enter');
        
        pages[1] = stockX;
   

        await pages[1].waitForSelector('a');
        const linkHandlers = await pages[1].$x("a[class=tile-list]");
        await console.log(linkHandlers)
        if (linkHandlers.length > 0) {
            await linkHandlers[0].click();
        }
        
        console.log(await pages[1].url());
        const links = await pages[1].$x('a[class=tile-list]');
        console.log(links);

        






        await pages[0].goto('https://www.ebay-kleinanzeigen.de/');
        await pages[0].click('#site-search-query');
        await pages[0].keyboard.type(req.body.term);
        await pages[0].click('#site-search-submit');
        await pages[0].waitForNavigation({ waitUntil: 'networkidle2' });


        pricesArray = await pages[0].evaluate(

            () => [...document.querySelectorAll('strong')].map(elem => elem.innerText)

        );
    


    } while (pricesArray === [])
  //  await console.log(pricesArray);
    await res.send(pricesArray);
    await browser.close();
})();
})



// ________________________________________test-section-end_______________________________________________________






// dummy json data

var users = {
    "users": [
        {
            "id": 1,
            "age": 16,
            "name": "Andy"
        },
        {
            "id": 2,
            "age": 22,
            "name": "Lisa",
            "gender": "female"
        }
    ],
    "example2": [
        {
            "id": 1,
            "date": "03-18-2016",
            "message": "Nice!"
        },
        {
            "id": 2,
            "date": "06-21-2017",
            "message": "Great view!"
        }
    ]
};


// var httpsServer = https.createServer(credentials, app);

// app listen port

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

