const { DataTypes } = require('sequelize');
const db = require('./_db');

// Order - An order is an instruction to buy or sell a stock.
const Order = db.define('order', {
    // ticker: STRING, assiociation - the ticker being traded
    // trader: STRING, assiociation - the user who created the order
    side: DataTypes.ENUM('BUY', 'SELL'),
    limit: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    filledQuantity: DataTypes.INTEGER,
    status: DataTypes.ENUM('OPEN', 'CANCELED', 'COMPLETED')
});

module.export = Order;