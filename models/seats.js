const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



module.exports = (sequelize, DataTypes) =>{

    const Seats = sequelize.define('seats', {
  
      seat_status: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    }, {
        freezeTableName: true
      });

    return Seats;
} 





