const Sequelize = require("sequelize");
const sequelize = require('../server');

const Order = sequelize.define("Order", {
    id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
    }, 
    status: Sequelize.STRING,
    value: Sequelize.INTEGER
})

module.exports = Order;