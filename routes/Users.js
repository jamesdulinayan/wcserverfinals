const express = require('express')
const fs = require('fs')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const password = require('password')
const key = require('../config/keys.js')

const app = express()

const User = require('../models/User.js')

app.post('/signup', (req,res) => {
    const userData = {
        fname : req.body.fname,
        mname : req.body.mname,
        lname : req.body.lname,
        no : req.body.no,
        bdate : req.body.bdate,
        address : req.body.address,
        email : req.body.email,
        pass : req.body.pass
    }
    User.findOne({
        email: req.body.email
    }).then(user => { 
        if(!user) {
            bcrypt.hash((req.body.pass), 10, (err, hash) => {
                userData.pass = hash
                User.create(userData)
            }).then( user => {
                res.send('User succesfully registered')
            })
        } else }
            return res.status(400).json({
                msg: 'Email already registered.'
            })
        }
    }).catch(err => {
        res.send('Error: ' + err)
    })
})