const db = require('./db')

// register models
require('./models');

// Associations
const User = db.models.user;

// Sequelize requires you to define associations in pairs
// as one model does not know that the other model has the association defined
// so we must define the association in both directions

module.exports = {
    db,
    User,
}
