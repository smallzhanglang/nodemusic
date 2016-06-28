"use strict";

const Sequelize = require("sequelize");
const configs = require("../config/config");
const sequelize = configs.sequelize;

let User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mobile: {
      type: Sequelize.STRING,
      allowNull: true
    },
    weixin_unionid: {
      type: Sequelize.STRING,
      allowNull: true
    },
    weibo_uid: {
      type: Sequelize.STRING,
      allowNull: true
    },
    passwd: {
      type: Sequelize.STRING,
      allowNull: true
    },
    nickname: {
      type: Sequelize.STRING,
      allowNull: true
    },
    gender: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    tutor_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true
    },
    timezone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    member_expiry_time: {
      type: Sequelize.DATE,
      allowNull: true
    },
    last_read_notice_time: {
      type: Sequelize.DATE,
      allowNull: true
    },
    last_read_message_time: {
      type: Sequelize.DATE,
      allowNull: true
    },
    score: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    hashtags: {
      type: Sequelize.JSON,
      allowNull: true
    },
    extend: {
      type: Sequelize.JSON,
      allowNull: true
    },
    create_time: {
      type: Sequelize.DATE,
      allowNull: true
    }
  });

module.exports = User;
