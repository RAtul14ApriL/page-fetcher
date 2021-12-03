const net = require('net');
const process = require('process');
const fs = require('fs');
const request = require('request');

let URL = process.argv[2]; //web address to be input in cli as argument
let filePath = process.argv[3]; //file path input in cli as argument where data will be written

request(URL, (error, response, body) => {
  console.log('error: ', error);
  console.log('status code: ', response && response.statusCode);

  fs.appendFile(filePath, body, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    let size = body.length;
    console.log(`downloaded and saved ${size} bytes to ${filePath}`);
  });
});