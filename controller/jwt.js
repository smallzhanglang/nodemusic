var koa = require('koa');
var jwt = require('koa-jwt');

var app = koa();

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function *(next){
    try {
        yield next;
    } catch (err) {
        if (401 == err.status) {
            this.status = 401;
            this.body = 'Protected resource, use Authorization header to get access\n'+err;
        } else {
            throw err;
        }
    }
});

// Unprotected middleware
app.use(function *(next){
    if (this.url.match(/^\/public/)) {
        this.body = 'unprotected\n';
    } else {
        yield next;
    }
});

// Middleware below this line is only reached if JWT token is valid
app.use(jwt({ secret: 'shared-secret' }));

// Protected middleware
app.use(function *(){
    if (this.url.match(/^\/api/)) {
        this.body = 'protected\n';
    }
});

app.listen(3000);