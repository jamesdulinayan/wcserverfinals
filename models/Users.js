const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema ({
    firstname:{
        type: String
    },
    middle_initial:{
        type: String
    },
    last_name:{
        type: String
    },
    mobile_no:{
        type: Number
    },
    birth_date:{
        type: Date
    },
    address:{
        type: String
    },
    email:{
        type: String
    },
    user_name:{
        type: String
    },
    password:{
        type: String
    },
    created:{
        type: Date,
        default: Date.now
    }
},{
        collection: 'useraccounts'
})

module.exports = User = mongoose.model('users', UserSchema)