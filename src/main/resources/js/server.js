var Router = require("vertx-web-js/router");
var mapping1 = require("js/mapping1.js");
var mapping2 = require("js/mapping2.js");

var server = vertx.createHttpServer();
var router = Router.router(vertx);

router.route("/mapping1").handler(function(routingContext){
    mapping1(routingContext);
});

router.route("/mapping2").handler(function(routingContext){
    mapping2(routingContext);
});

server.requestHandler(router.accept).listen(8080);