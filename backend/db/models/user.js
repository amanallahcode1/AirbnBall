'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [3, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
  const { id, fullName, email } = this; // context will be the User instance
  return { id, fullName, email };
};

User.prototype.validatePassword = function (password) {
 return bcrypt.compareSync(password, this.hPassword.toString());
};

User.getCurrentUserById = async function (id) {
 return await User.scope('currentUser').findByPk(id);
};

User.login = async function ({ credential, password }) {
  const { Op } = require('sequelize');
  const user = await User.scope('loginUser').findOne({
    where: {
      email: credential,
    },
  });
  if (user && user.validatePassword(password)) {
    return await User.scope('currentUser').findByPk(user.id);
  }
};

User.signup = async function ({ fullName, email, password }) {
  const hPassword = bcrypt.hashSync(password);
  const user = await User.create({
    fullName,
    email,
    hPassword
  });
  // const hashed = await bcrypt.hash(password, 8);
  //   user.hPassword = hashed;
  return await User.scope('currentUser').findByPk(user.id);
};


  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};