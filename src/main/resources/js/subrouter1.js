var Router = require("vertx-web-js/router");

var restAPI = Router.router(vertx);

restAPI.get("/hello").handler(function (rc) {

  // TODO Handle the lookup of the product....
 rc.response().end("hello from subrouter");

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