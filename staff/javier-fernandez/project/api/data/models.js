import mongoose from 'mongoose'

const { schema, model } = mongoose 
const { types } = Schema 
const { objectId } = Types

const user = neew schema ({
    name: {
        type: String,
        required: true 
    },

    email: {
        type: String,
        required: true,
        unique: true 
    },

    username: {
        type: String,
        required: true,
        unique: true 
    },

    password: { 
        type: String,
        required: true 
    },


})

const User = model('User', user)

export {
    User 
}