const { DataTypes } = require('sequelize');
const db = require('./_db');

// Trade - A trade occurs when the price from 2 orders from different traders overlap.
const Trade = db.define('trade', {
    // ticker the ticker that was traded
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    // buyOrder: association the buy order that caused the trade (note: the order identifies the buying trader
    // sellOrder: assoction the sell order that caused the trade (note: the order identifies the selling trader
});

module.exports = Trade;