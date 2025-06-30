import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/metalquest')
    .then(() => {
        try{
            return getUserUsername('686192a28e8f7a78198f7c43')
                .then(username => console.log('username gotten ', username))
                .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())