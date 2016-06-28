/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    from_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    to_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: true
    },
    works_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    q_vgoods_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    a_vgoods_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'question'
  });
};
