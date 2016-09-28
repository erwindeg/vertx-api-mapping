package nl.edegier;

import io.vertx.core.Vertx;

/**
 * Created by Erwin on 28/09/2016.
 */
public class MainVerticle {

    public static void main(String[] args) {
        Vertx vertx = Vertx.vertx();
        vertx.deployVerticle("js/server.js");
    }

}
