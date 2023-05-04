const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('users', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: true
})

sequelize.authenticate()
.then(()=>{
    console.log("database is connected=======================")
})
.catch(err=>{
    console.log("error conecting to database,", err)
})

const models = {

}

models.sequelize = sequelize;
models.Sequelize = Sequelize;




////Add entries for table



models.sequelize.sync()
.then(()=> console.log("database synced"))
.catch(err => console.log("error synscing to db", err))





models.seats  = require('./seats')(sequelize, DataTypes);


module.exports = models;



