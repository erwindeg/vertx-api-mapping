package nl.edegier;

import io.vertx.core.Future;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpClient;
import io.vertx.core.http.HttpClientRequest;

/**
 * Created by Erwin on 28/09/2016.
 */
public class MainVerticle {

    public static void main(String[] args) {
        Vertx vertx = Vertx.vertx();
       vertx.deployVerticle("js/server.js");


//        HttpClient client = vertx.createHttpClient();
//        Future f1 = get(80, "jsonplaceholder.typicode.com", "/posts/1", client);
//        Future f2 = get(80, "jsonplaceholder.typicode.com", "/posts/2", client);
//
//        CompositeFuture.all(f1, f2).setHandler(ar -> {
//            if (ar.succeeded()) {
//                ar.result().list().forEach(System.out::println);
//            } else {
//                // At least one server failed
//                System.out.println("failed");
//            }
//        });
    }

    private static Future get(int port, String host, String path, HttpClient client){
        Future future = Future.future();
        HttpClientRequest request = client.get(port, host, path, result ->{
            System.out.println(result.statusCode());
            result.bodyHandler(body -> future.complete(body));
            result.exceptionHandler(error -> future.fail(error));
        });
        request.exceptionHandler(error -> future.fail(error));
        request.end();
        return future;
    }
}
