/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('works_comment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    works_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    words: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    audio: {
      type: DataTypes.STRING,
      allowNull: true
    },
    play_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    extend: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'works_comment'
  });
};
