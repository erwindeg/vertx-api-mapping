var Router = require("vertx-web-js/router");
var mapping1 = require("js/mapping1.js");
var mapping2 = require("js/mapping2.js");
var subrouter1 = require("js/subrouter1.js");

var server = vertx.createHttpServer();
var router = Router.router(vertx);



//http://localhost:8080/mapping1
router.route("/mapping1").handler(function(routingContext){
    mapping1(routingContext);
});

//http://localhost:8080/mapping2
router.route("/mapping2").handler(function(routingContext){
    mapping2(routingContext);
});


//http://localhost:8080/subrouter1/hello
router.mountSubRouter("/subrouter1",subrouter1);


server.requestHandler(router.accept).listen(8080);