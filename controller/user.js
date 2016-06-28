"use strict";
const configs = require("../config/config");
const User = require("../model/user");
const parse = require("co-body");
const MD5 = require("md5");
const sequelize = configs.sequelize;

// path
const viewsPath = configs.path.views;


module.exports.index = function* index (next) {

    let users = yield User.findAll({
        order: ["id"]
    });

    if (users.length === 0) {
        this.status = 404;
        this.body = "没有更多的作者了";
        return ;
    }

    let count = yield User.count();

    this.body =JSON.stringify(users)+'::::'+count;

    console.log(count+'::::'+JSON.stringify(users));
};

module.exports.one = function* one (next) {
    // get user from checkUser
    let user = this.user;

    switch (this.accepts("json", "html")) {
        case "html": {
            // get the pen_name
            let penName = user.pen_name;

            // get the newest 4 articles of this author
            let articles = yield ArticleView.findAll({
                order: [
                    ["id", "DESC"]
                ],
                where: {
                    author: penName
                },
                limit: 4
            });

            this.body ='';
            return ;
        }break;
        case "json": {
            this.body = user;
            return ;
        }break;
        default: {
            // 只允许json和html。
            this.throw(406, "json and html only");
            return ;
        }
    }
};
