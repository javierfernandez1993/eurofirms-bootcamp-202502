import mongoose from 'mongoose'
import { user } from './models.js'

const { connect, disconnect } =mongoose 

export {
    connect,
    disconnect,

    user
}