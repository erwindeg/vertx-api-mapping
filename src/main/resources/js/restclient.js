var Future = require("vertx-js/future");

var exports = module.exports = {};

exports.get = function(port, host, path,client){
    var future = Future.future();
    var request = client.get(80, host, path, function (response) {
        response.bodyHandler(function(body) {
           future.complete(body.toString());
         })
         response.exceptionHandler(future.fail);
     });
    request.exceptionHandler(future.fail);
    request.end();
    return future;
}