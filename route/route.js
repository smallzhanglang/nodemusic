"use strict";
const router = require("koa-router")();
const configs = require("../config/config");

// load controllers
const Authentication = require("../controller/authentication");
const User = require("../controller/user");
const Works = require("../controller/works");

// load middleware
const verifyToken = require("../middleware/verifyToken");
const getIdentity = require("../middleware/getIdentity");
const checkUser = require("../middleware/checkUser");

// /authentications
router.post("/1.0.0/user/authentications", Authentication.login);
router.post("/1.0.0/user/info", verifyToken, Authentication.check);
//router.get("/1.0.0/works/info",verifyToken,Works.info)
router.delete("/authentications", verifyToken, Authentication.logout);


// /users
router.get("/users", User.index);
router.get("/users/:id", checkUser, User.one);


module.exports = router.routes();