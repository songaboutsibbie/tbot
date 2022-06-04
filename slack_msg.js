var request = require('request');

var options = {
  uri: 'https://hooks.slack.com/services/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',
  method: 'POST',
  json: {
    "text": "hello world"
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.id) // Print the shortened url.
  }
});