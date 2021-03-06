"use strict";
// app init
const app = require("koa")();

// loading config file and add to global
const configs = require("./config/config");

// gzip compress open by default
const compress = require("koa-compress");
app.use(compress());

// load all handler
app.use(require("./middleware/unauthorized"));

// static files
const serve = require("koa-static");
const staticFilePath = configs.path.static;
app.use(serve(staticFilePath));

// session
const session = require("koa-session");
app.keys = ["suiyue"];
app.use(session(app));

// routes
app.use(require("./route/route"));

// listen, just listen localhost, use ngx to reverse proxy
const port = configs.app.port;
app.listen(port);