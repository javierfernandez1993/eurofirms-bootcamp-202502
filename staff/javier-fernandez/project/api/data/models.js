import mongoose from 'mongoose'

const { Schema, model } = mongoose 
const { Types } = Schema 
const { ObjectId } = Types

const user = new Schema ({
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

const survey = new Schema ({
    question: {
        type: String,
        required: true,
        unique: true,
        
    },
    
    options: {
        type: [String],
        required: true,
    },

    result: {
        type: [Number],
        required: true,
    },
})


const User = model('User', user)
const Survey = model('Survey', survey)

export {
    User,
    Survey
}

