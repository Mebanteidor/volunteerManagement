const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const multer = require('multer')
const User = require('../models/User') 
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){
        cb(null, req.body.email_id+'_'+file.originalname); 
    }
})

const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    }else{
        cb(null,false);
    }

}

const upload = multer({storage:storage, 
                        limits:{
                            fileSize:1024*1024*5
                        },
                        fileFilter:fileFilter});

users.use(cors())

process.env.SECRET_KEY = 'secret'

 users.post('/register',upload.single('passport'), (req, res) => {
    //console.log('file is: '+JSON.stringify(req.file))
    const userData = {
        name: req.body.name,
        address: req.body.address,
        age: req.body.age,
        contact: req.body.contact,
        email_id: req.body.email_id,
        password: req.body.password,
        eid: req.body.eid,
        role_id: req.body.role_id,
        idproof: req.file.path
    }

    
    User.findOne({
        where: {
            email_id: req.body.email_id
        }
    })
    .then(user => {
        if (!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email_id + ' Registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'User already exists' })
            }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email_id: req.body.email_id
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})
module.exports = users