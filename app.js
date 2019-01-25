// require section

var express = require('express'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    puppeteer = require('puppeteer'),
    puppeteerCore = require('puppeteer-core'),
    mongoClient = require('mongodb').MongoClient,
    cheerio = require('cheerio'),
    rp = require('request-promise'),
    app = express();
const parseFct = require('./parseFct');
url = 'https://www.ebay-kleinanzeigen.de/';

let jwt = require('jsonwebtoken');
let config = require('./config');
let middleware = require('./middleware');
// const $ = require('cheerio');
// const parse = require('./parse');

// inefficient section variables

// let namesArray = [];
// let titlesArray = [];


// middlewares bodyParser + cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var results;
namesArray = [];
pricesArray = [];
var result;
namesArray2 = [];
// database section --> mongoDB
let mongoURL = 'mongodb://shiboBlank:aZoiUzDibkFxLfIy@clusterfusioncraft-shard-00-00-jd8xk.mongodb.net:27017,clusterfusioncraft-shard-00-01-jd8xk.mongodb.net:27017,clusterfusioncraft-shard-00-02-jd8xk.mongodb.net:27017/test?ssl=true&replicaSet=ClusterFusionCraft-shard-0&authSource=admin&retryWrites=true'
let shortMongoURL = 'mongodb+srv://shiboBlank:aZoiUzDibkFxLfIy@clusterfusioncraft-jd8xk.mongodb.net/test?retryWrites=true';
presidents = [];
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
    database: 'fusioncraftinvoice'
});

connection.connect();


// routing section

class HandlerGenerator {
    login(req, res) {

        let username = req.body.username;
        let password = req.body.password;
        // For the given username fetch user from DB
        let mockedUsername = 'admin';
        let mockedPassword = 'password';

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign({ username: username },
                    config.secret,
                    {
                        expiresIn: '24h' // expires in 24 hours
                    }
                );
                // return the JWT token for the future API calls
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
                });
            } else {
                res.send(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.send(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
        }
    }
    index(req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
}


let handlers = new HandlerGenerator();


// Routes & Handlers
app.post('/login', handlers.login);
app.get('/', middleware.checkToken, handlers.index);


/*
app.get("/", function (req, res) {
    res.send('hello world');
});
*/
app.get('/customers', function (req, res) {
    //console.log(req.query.term)
    connection.query('SELECT * FROM customers', function (err, rows) {
        results = JSON.stringify(rows);

        results = JSON.parse(results);
        function filterByValue(array, value) {
            return array.filter((data) =>
                JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1);
        }
        //hallo = filterByValue(results, "bla");
        //console.log(hallo);
        //console.log('wtf',filterByValue(results, 'b'));
        //
        results = filterByValue(results, req.query.term)
        console.log(results);
        res.send(results);

    })

})



// test section - can be skipped - post request

app.post('/puppet', function (req, res) {

    uri = 'https://www.ebay-kleinanzeigen.de/s-preis:' + req.body.price + ':/' + req.body.term + '/k0';


    // test function - can be skipped
    pages = [];
    wikiUrls = [];
    //console.log(req.body.term);
    //console.log(req.body.price);
    //for(i=1; i<15; i++) {
    //    pages.push('https://www.ebay-kleinanzeigen.de/s-preis:' + req.body.price + ':/seite:' + i +  '/' + req.body.term + '/k0');
    //}
    //console.log(pages)
    var options = {
        uri: uri,
        headers: {
            "Authorization": "Bearer ",
            "User-Agent": "My little demo app"
        },
        transform: function (body) {
            return cheerio.load(body);
        }
    };


    // options = {...options, uri: pages}
    // console.log(options)
    // console.log('uri', options.uri)
    promise1 = rp(options)


        .then(function ($, html) {
            //console.log($.html())
            //nxtBtn = $('.pagination-next').click();
            //console.log('nxt')
            namesArray = $('.text-module-begin').map(function () {
                return {
                    name: $(this).text()
                }
            }).get();

            pricesArray = $('div > strong').map(function () {
                return {
                    price: $(this).text()
                }
            }).get();


            /*  
                     pagesCount = $('.pagination-page').map(function () {
                         return {
                             pages: $(this).text()
                         }
                     }).get();
                     console.log(pagesCount.length);
         */
            pagesLinks = $('a[class="pagination-page"]').map(function () {
                return {
                    hrefs: $(this).attr('href')
                }
            }).get();



            wikiUrls = pagesLinks.map(data => data.hrefs);
            //console.log('wikiUrls', wikiUrls)
            for (i = 0; i < pagesLinks.length; i++) {
                //console.log(options.uri);
                options.uri = 'https://www.ebay-kleinanzeigen.de' + wikiUrls[i];
                namesArray2 = $('.text-module-begin').map(function () {
                    return {
                        name: $(this).text()
                    }
                }).get();


            }
            //          console.log('namesArray2', namesArray2);
            result = namesArray.map(function callback(currentValue, i, array) {
                var o = Object.assign({}, currentValue);
                o.price = pricesArray[i].price;
                return o;
            })

            //            console.log('namesArray', namesArray);
            //console.log(result);

            res.send(result);
            count = result.length;
            //console.log('count', count)
            return Promise.all(
                wikiUrls.map(function (url) {

                    return parseFct('https://www.ebay-kleinanzeigen.de' + url, count);
                })
            );
        })
        .then(function (presidents) {
            console.log('pres', presidents)
            for (let i = 0; i < presidents.length; i++) {
                for (let j = 0; j < presidents[i].length; j++) {
                    console.log('presidents', presidents[i][j].name)
                }
            }
            const arr = [1,2,3]
console.log('foo', arr.foo.bar)
        })

        .catch(function (err) {
            // Crawling failed or Cheerio choked...
        });
    //  console.log(namesArray)
    // res.send(namesArray);
});

// app listen port

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});