'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.group, {
      foreignKey: 'groupId',
      as: 'groups'
    })
  };
  return User;
};