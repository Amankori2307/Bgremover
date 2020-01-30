// Requires "request" to be installed (see https://www.npmjs.com/package/request)
var request = require('request');
var fs = require('fs');

function callApi(file){
  // var image = `./public/upload/${file.name}`,
  //     image2 = `./public/bgremove/${file.name}`;
  //     console.log(`-----------------------------------------------------------------\n${image}${image2}\n--------------------------------`);
  request.post({
    url: 'https://api.remove.bg/v1.0/removebg',
    formData: {
      image_file: file.data,
      size: 'auto'
  },
    headers: {
      'X-Api-Key': 'wGyjRnNsES5dMmfo5tN4iW5Y'
    },
    encoding: null
  }, function(error, response, body) {
    if(error) return console.error('Request failed:', error);
    if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
    fs.writeFileSync("./public/bgremove/bgremove."+file.name, body);
  });
  
}
module.exports = callApi

// {
//     "image_file_b64": "",
//     "image_url": "https://www.remove.bg/example-hd.jpg",
//     "size": "preview",
//     "type": "auto",
//     "format": "auto",
//     "roi": "string",
//     "crop": true,
//     "crop_margin": "string",
//     "scale": "string",
//     "position": "string",
//     "channels": "rgba",
//     "add_shadow": true,
//     "bg_color": "",
//     "bg_image_url": ""
//   }