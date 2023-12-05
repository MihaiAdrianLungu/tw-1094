const Sequelize = require("sequelize");
const sequelize = require('../server');

const User = sequelize.define("User", { 
    id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
    }, 
    username: 
    Sequelize.STRING, 
    password: Sequelize.STRING, 
    email: Sequelize.STRING, 
    role: Sequelize.STRING 
});

module.exports = User;