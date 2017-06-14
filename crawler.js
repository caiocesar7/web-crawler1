var request = require('request');
var cheerio = require('cheerio');

var url = "https://github.com/edvmorango?tab=repositories";

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body)

    var title = $('.d-inline-block a').text();
    
  

    console.log('URL: ' + url);
    console.log('Project: ' + title);
   
  }
  else {
    console.log("Wea’ve encountered an error: " + error);
  }
});
