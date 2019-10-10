"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var fs = require("fs");
var https = require("http");
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = jsonServer.create();
var router = jsonServer.router("../../db.json");
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post("/login", auth_1.handleAuth);
server.use('/orders', authz_1.handleAuthorization);
// Use default router
server.use(router);
var options = {
    cert: fs.readFileSync("../keys/cert.pem"),
    key: fs.readFileSync("../keys/key.pem")
};
https.createServer(options, server).listen(3001, function () {
    console.log("JSON Server na porta https://localhost:3001");
});
