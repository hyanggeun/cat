const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
    let cat = sequelize.define("Cat", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          lat: {
            type: Sequelize.FLOAT,
            allowNull: false
          },
          lng: {
            type: Sequelize.FLOAT,
            allowNull: false
          },
          title: {
              type: Sequelize.STRING,
              allowNull: false
          },
          food: {
              type: Sequelize.BOOLEAN,
          },
          water: {
              type: Sequelize.BOOLEAN
          },
          shelter: {
              type: Sequelize.BOOLEAN
          },
          special_note:{
              type: Sequelize.STRING
          }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "cat"
    });

    return cat;
}

