import { useState } from `react`
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Register } from './view/Register'
import { Home } from './view/Home'
import { Alert } from './view/components/confirm'
import { Login } from './view/Login'
import { Confirm } from './view/components/confirm'
import { Context } from './context'

import { logic } from './context'

export const App = () => {
    const navigate = useNavigate()

    const [alertMessage, setAlertMessage] = useState('')
    const [confirmMessage, setConfirmMessage] = useState('')
    const [confirmAction, setConfirmAction] = useState(null)

    const handleRegisterClicked = () => navigate('/register')

    const hndleLoginClicked = () => navigate('/login')

    const handleUserRegistered = () => navigate('/login')

    const handleUserLoggedIn = () => navigate('/login')

    const handleUserLoggedOut = () => navigate('/login')

    let loggedIn 

        try {
            loggedIn = logic.isUserLoggedIn()
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
}