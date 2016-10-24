var Router = require("vertx-web-js/router");
var Future = require("vertx-js/future");
var CompositeFuture = require("vertx-js/composite_future");
var Restclient = require("js/restclient.js");

var restAPI = Router.router(vertx);

restAPI.get("/hello").handler(function (rc) {


 var client = vertx.createHttpClient();

 var  call1Future = Restclient.get(80, "jsonplaceholder.typicode.com", "/posts/1",client);
 var call2Future = Restclient.get(80, "jsonplaceholder.typicode.com", "/posts/2",client);

  CompositeFuture.all(call1Future,call2Future).setHandler(function(result, error){
        if (error == null) {
            console.log(result);
            var posts = [];
            posts.push(JSON.parse(result.result(0)));
            posts.push(JSON.parse(result.result(1)));
            rc.response().putHeader("content-type", "application/json");
            rc.response().setChunked(true);
            rc.response().write(JSON.stringify(posts)).end();
        } else {
            console.log(error);
            rc.response().setStatusCode(404).end();
        }
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