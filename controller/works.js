"use strict";

const configs = require("../config/config");
const Works = require("../model/works");
const sequelize = configs.sequelize;


// GET
module.exports.one = function* one(next) {
    let previous = yield Works.find({
        attributes: ["create_time", "mobile","nickname"],
        where: {
            id : 1
        }
    });

    this.body = {
        article: article,
        title: article.title,
    };
    return;
};