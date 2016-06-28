/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('virtual_goods', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    price: {
      type: 'MONEY',
      allowNull: true
    },
    vprice: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'virtual_goods'
  });
};
