/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tutor', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    audio_introdution: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    comment_vprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    score: {
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
    tableName: 'tutor'
  });
};
