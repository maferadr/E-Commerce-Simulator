//import important parts of sequelize Library
const { Model, DataTypes } = require('sequelize');
//import our database connection from config.js
const sequelize = require('../config/connection');

//Initializee Product model table by extending off Sequelize's Model Class
class Product extends Model {}

Product.init(
    {
        //define columns
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;