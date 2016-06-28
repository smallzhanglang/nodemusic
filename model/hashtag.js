/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hashtag', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    value: {
      type: DataTypes.STRING,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'hashtag'
  });
};
