module.exports = function (routingContext){
         // This handler will be called for every request
          var response = routingContext.response();
          response.putHeader("content-type", "text/plain");

          // Write to the response and end it
          response.end("Hello World from mapping 1");
    }

