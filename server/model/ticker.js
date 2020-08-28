const { DataTypes } = require('sequelize');
const db = require('./_db');

// Ticker - A ticker is typically a 1-4 length character identifier of a stock - For example: TW, F, IBM, AAPL, CSCO, GOOG
const Ticker = db.define('ticker', {
    name: DataTypes.STRING
});

module.exports = Ticker;