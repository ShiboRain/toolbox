const rp = require('request-promise');
const $ = require('cheerio');
array = [];
const parseFct = function (url, count) {
  return rp(url)
    .then(function (html) {

      names = $('.text-module-begin', html).map(function () {
        return {
          name: $(this).text()
        }
      }).get();
      prices = $('div > strong', html).map(function () {
        return {
            price: $(this).text()
        }
    }).get();

      results = names.map(function callback(currentValue, i, array) {
        var o = Object.assign({}, currentValue);
        o.price = prices[i].price;
    
        return o;
      });
      array.push(results);
      //console.log('results', results)
      //console.log('array', array);
      return results;
    })


    .catch(function (err) {
      //handle error
    });
};
module.exports = parseFct;