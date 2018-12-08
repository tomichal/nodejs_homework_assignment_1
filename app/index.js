var http = require('http');
var urlParser = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var fs = require('fs');
var httpServer = http.createServer(function(req, res) { serverHandler(req, res) });
const httpPort = 3000;

httpServer.listen(httpPort, function () {
  console.log(`Server started on port ${httpPort}.`);
});

var serverHandler = function (req, res) {
  var parsedUrl = urlParser.parse(req.url, true);
  var method = req.method.toLowerCase();
  var headers = req.headers;
  var path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
  var query = parsedUrl.query;
  var decoder = new StringDecoder('utf-8');
  var requestData = '';

  req.on('data', function (data) {
    requestData += decoder.write(data);
  });

  req.on('end', function () {
    requestData += decoder.end();

    var handler = handlers[path] || handlers.notFound;
    var request = {
      method: method,
      headers: headers,
      path: path,
      query: query,
      payload: requestData
    }

    handler(request, function(statusCode, payload){
      statusCode = typeof(statusCode) == 'number' ? statusCode : 200;
      payload = typeof(payload) == 'object' ? payload : {};
      var payloadString = JSON.stringify(payload);

      res.setHeader('Content-Type', 'application/json')

      res.writeHead(statusCode);
      res.end(payloadString);
      console.log('Response: ', statusCode, payloadString);
    })
  })
}

// Handlers.
var handlers = {
  hello: function (data, callback) {
    callback(200, { message: 'Hello There' })
  },

  notFound: function (data, callback) {
    callback(404)
  }
}

// Router.
var router = {
  ping: handlers.ping
}