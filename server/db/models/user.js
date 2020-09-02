const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require('../db');

/**
 * setUsernameAndPassword
 * @param {object} user - instance of user
 * @returns {promise} Returns a resolved promise of setting the hash password
 */
const setUsernameAndPassword = (user) => {
    user.username = user.username && user.username.toLowerCase();
    if (!user.password) { return Promise.resolve(user); }

    return bcrypt.hash(user.get('password'), 10)
        .then(hash => user.set('password_digest', hash));
};

const User = db.define('user', {
    username: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
        },
        unique: true,
    },
    password_digest: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    last_logout: DataTypes.DATE,
}, {
    hooks: {
        beforeCreate: setUsernameAndPassword,
        beforeUpdate: setUsernameAndPassword,
    },
    defaultScope: {
        attributes: { exclude: ['password_digest'] },
    },
});

/**
* authenticate - Use bcrpt to check password
* @param {string} password
* @returns {bool} Returns a promisified boolean
*/
User.prototype.authenticate = function (password) {
    return bcrypt.compare(password, this.password_digest);
};

/**
* toJson - Prep data to be sent to client
* @returns {object} Returns an object of user data excluding
* password and password_digest
*/
User.prototype.toJson = function () {
    return {
        username: this.username,
        created_at: this.createdAt,
        id: this.id,
        updated_at: this.updatedAt,
    };
};

module.exports = User;
