"use strict";

let koa = require("koa"),
    serve = require('koa-static');

let app = koa();

app.use(serve('.'));

app.listen(3000);
console.log('listening on port ' + 3000);