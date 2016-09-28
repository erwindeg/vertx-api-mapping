package nl.edegier;

import io.vertx.core.Vertx;

/**
 * Created by Erwin on 28/09/2016.
 */
public class MainVerticle {

    public static void main(String[] args) {
        Vertx vertx = Vertx.vertx();
       vertx.deployVerticle("js/server.js");


//        HttpClient client = vertx.createHttpClient();
//        Future f1 = Future.future();
//        Future f2 = Future.future();
//        client.getNow(80, "jsonplaceholder.typicode.com", "/posts/1", result ->{
//            System.out.println(result.statusCode());
//            result.bodyHandler(body -> f1.complete(body));
//        });
//
//        client.getNow(80, "jsonplaceholder.typicode.com", "/posts/2", result ->{
//            System.out.println(result.statusCode());
//            result.bodyHandler(body -> f2.complete(body));
//        });
//        CompositeFuture.all(f1, f2).setHandler(ar -> {
//            if (ar.succeeded()) {
//                ar.result().list().forEach(System.out::println);
//            } else {
//                // At least one server failed
//            }
//        });
    }

}
