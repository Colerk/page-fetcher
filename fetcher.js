const fs = require('fs');
const request = require('request');

const fetcher = () => {
  let clean = process.argv.slice(2);
  request(clean[0], (error, response, body) => {
  // console.log('error:', error); 
  // console.log('statusCode:', response && response.statusCode);
  fs.writeFile(clean[1], body, function (err) {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${clean[1]}!`);
  });
});
}

fetcher()