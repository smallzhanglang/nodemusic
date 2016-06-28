"use strict";

const Sequelize = require("sequelize");
const configs = require("../config/config");
const User = require("../model/user");
const sequelize = configs.sequelize;


let Works = sequelize.define('works', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tittle: {
      type: Sequelize.STRING,
      allowNull: true
    },
    words: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    photos: {
      type: 'ARRAY',
      allowNull: true
    },
    audio: {
      type: Sequelize.STRING,
      allowNull: true
    },
    vedio: {
      type: Sequelize.STRING,
      allowNull: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id"
      }
    },
    works_draft_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    vgoods_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    vprice: {
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

module.exports = Works;
