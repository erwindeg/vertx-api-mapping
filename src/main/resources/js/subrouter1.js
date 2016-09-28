var Router = require("vertx-web-js/router");
var Future = require("vertx-js/future");
var CompositeFuture = require("vertx-js/composite_future");

var restAPI = Router.router(vertx);

restAPI.get("/hello").handler(function (rc) {

 //http://jsonplaceholder.typicode.com/posts/1

 var call1Future = Future.future();
 var call2Future = Future.future();
 var client = vertx.createHttpClient();
 client.getNow(80, "jsonplaceholder.typicode.com", "/posts/1", function (response) {
    response.bodyHandler(function(body) {
       call1Future.complete(body.toString());
     })
 });

 client.getNow(80, "jsonplaceholder.typicode.com", "/posts/2", function (response) {
    response.bodyHandler(function(body) {
          call2Future.complete(body.toString());
        })
  });

  CompositeFuture.all(call1Future,call2Future).setHandler(function(futures){
        var posts = [];
        posts.push(JSON.parse(futures.result(0)));
        posts.push(JSON.parse(futures.result(1)));
        rc.response().putHeader("content-type", "application/json");
        rc.response().setChunked(true);
        rc.response().write(JSON.stringify(posts)).end();
  });



});

restAPI.put("/hello").handler(function (rc) {

  // TODO handle put
  rc.response().end();

});

restAPI.delete("/hello").handler(function (rc) {

  // TODO handle delete
  rc.response().end();

});


module.exports = restAPI;