const express = require('express')
const events = express.Router()
const cors = require('cors')
const Event = require('../models/Events')
events.use(cors())

events.get('/',(req,res)=>{
    Event.findAll().then(data=>{
        console.log('this is from retrieval'+data)
        res.send(JSON.stringify(data))
    }).catch(err=>{
        res.send('error: ' + err)
    })  
})

module.exports = events