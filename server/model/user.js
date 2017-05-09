const { STRING, VIRTUAL, DATE } = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require('./_db');

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

const User = db.define('users', {
  username: {
    type: STRING,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  password_digest: STRING,
  password: VIRTUAL,
  last_logout: DATE,
}, {
  hooks: {
    beforeCreate: setUsernameAndPassword,
    beforeUpdate: setUsernameAndPassword,
  },
  instanceMethods: {
    /**
     * authenticate - Use bcrpt to check password
     * @param {string} password
     * @returns {bool} Returns a promisified boolean
     */
    authenticate(password) {
      return bcrypt.compare(password, this.password_digest);
    },

    /**
     * toJson - Prep data to be sent to client
     * @returns {object} Returns an object of user data excluding
     * password and password_digest
     */
    toJson() {
      return {
        username: this.username,
        created_at: this.created_at,
        id: this.id,
        updated_at: this.updated_at,
      };
    },
  },
  defaultScope: {
    attributes: { exclude: ['password_digest'] },
  },
});

module.exports = User;
