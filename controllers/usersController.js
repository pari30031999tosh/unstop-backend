const bcrypt = require('bcrypt')
const uuidv4 = require('uuid').v4;
const models = require('../models')

async function bookSeats(req, res, next){
    
    let seats = req.body.seats;

    try{
       var result = await models.seats.findOne({
        where:{
            seat_status: 1            
        },
        order: [
            ["id", "DESC"],
          ]
       })
       if(!result){
        for (let index = 1; index <= seats; index++) {
            let data = await models.seats.update({
                seat_status: 1 
                 }, {
                 where:{
                     id:  index
                  }
              }) 
            
        }

        
       }
       else{
          for (let index = 1; index <= seats; index++) {
                let data = await models.seats.update({
                seat_status: 1 
                }, {
                where:{
                    id: result.id + index
                    }
                })
          }
   
          
       }
       
       var response = await models.seats.findAll();
       return res.status(200).json({
        status: 200,
        message: 'successfully booked seats',
        result: response
       })

    }catch(err){
        return res.status(300).json({
            status: 300,
            error: err
        })
    }
}

async function getAllSeats(req, res, next){
    try{
        var result = await models.seats.findAll()    
        return res.status(200).json({
            status: 200,
            message: 'successfully fetched all seats',
            result: result
        })
    }catch(err){
        return res.status(300).json({
            status: 300,
            error: err
        })
    }
}

async function createAllSeats(req, res, next){
    try{
        for (let index = 0; index < 70; index++) {
            let result = await models.seats.create();
            
        }
        
        return res.status(200).json({
            status: 200,
            message: 'successfully created all seats'
        })

    }catch(err){
        return res.status(300).json({
            status: 300,
            error: err
        })
    }
}

module.exports = { bookSeats, getAllSeats, createAllSeats }
