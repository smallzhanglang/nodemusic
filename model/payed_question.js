/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payed_question', {
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
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'payed_question'
  });
};
