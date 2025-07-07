import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Register } from './view/Register'
import { Home } from './view/Home'
import { Alert } from './view/components/alert'
import { Login } from './view/Login'
import { Confirm } from './view/components/confirm'
import { Context } from './context'
import { Landing } from './view/landing'

import { logic } from './logic'

export const App = () => {
    const navigate = useNavigate()

    const [alertMessage, setAlertMessage] = useState('')
    const [confirmMessage, setConfirmMessage] = useState('')
    const [confirmAction, setConfirmAction] = useState(null)

    const handleRegisterClicked = () => navigate('/register')

    const handleLoginClicked = () => navigate('/login')

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

    const handleAlertAccepted = () => setAlertMessage('')

    const handleCancelConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(true)
    }


    const handleShowConfirm = message => {
        setConfirmMessage(message)

        confirmAction.resolve(false)

     return new Promise((resolve, reject) =>
    {
            setConfirmAction({ resolve })
    })
    }

    console.log('App -> render')

    return <Context.Provider value = {{
        alert: setAlertMessage,
        confirm: handleShowConfirm 
    }}>
        {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted}/>}

        {confirmMessage && <Confirm message={confirmMessage} onCancelled={handleCancelConfirm} onAccepted={handleAcceptConfirm} />}

        <Routes>
            <Route path='/*' element={
                !loggedIn ?
                    <Landing
                    onRegisterClicked={handleRegisterClicked}
                    onLoginClicked={handleLoginClicked}
                    />
                    :
                    <Home onUserLoggedOut={handleUserLoggedOut} />
            } />

            <Route path='/register' element={
                !loggedIn ?
                    <Register
                        onLoginClicked={handleLoginClicked}
                        onUserRegisterred={handleUserRegistered}
                    />
                    :
                    <Navigate to='/' />
            } />

            <Route path='/login' element={
                !loggedIn ?
                    <Login 
                        onRegisterClicked={handleRegisterClicked}
                        onUserLoggedIn={handleUserLoggedIn}
                    />
                    :
                    <Navigate to='/' />
            } />
        </Routes>
        </Context.Provider>

}