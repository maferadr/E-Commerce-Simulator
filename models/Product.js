//import important parts of sequelize Library
const { Model, DataTypes } = require('sequelize');
//import our database connection from config.js
const sequelize = require('../config/connection');

//Initializee Product model table by extending off Sequelize's Model Class
class Product extends Model {}

Product.init(
    {
        //columns defined
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            //Validation for decimal value missing
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            }
        }
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