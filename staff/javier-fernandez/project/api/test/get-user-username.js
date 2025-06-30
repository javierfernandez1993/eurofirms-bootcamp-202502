fetch('http://localhost:8080/users/self/username', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODYyY2ViMTgxYzE0ZDI4Zjc3YzEyMmQiLCJpYXQiOjE3NTEzMDg0NjN9.Gyp_z2I7suiMEuQA789LdO2Cu0PklL8Vy3Fmn5nlDqA'
    }
})
    .catch(error => { throw new Error('connection error') })
    .then(response => {
        const { status } = response 

        if (status === 200)
            return response.json()
            .catch(error => {throw new Error('json error') })
            .then(username => username)
        return response.json()
            .catch(error => { throw new Error('json error') })
            .then(body => {
                const { error, message } = body 

                throw new Error(message)
            })
    })
    .then(username => console.log('user username gotten ', username))
    .catch(error => console.error(error))