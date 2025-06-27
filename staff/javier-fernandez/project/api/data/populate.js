import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose 

connect('mongodb://localhost:27017/metalquest')

    .then(() => {
        return User.create({
            name: 'Jhon Lenon',
            email: 'jhon@lenon.com',
            username: 'jhonlenon',
            password: '123123123' 
        })
            .catch(error => { throw new Error(error.message)})
            .then(() => console.log('user created'))
    })

    .catch(error => console.error(error))
    .finally(() => disconnect())
