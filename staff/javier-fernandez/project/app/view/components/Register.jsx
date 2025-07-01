import { logic } from '../logic'

export const Register = (props) => {
    const onLoginClicked = props.onLoginClicked
    const onUserRegistered = props.onUserRegistered

    const handleLoginClick = () => onLoginClicked()

    const handleRegisterSubmit = event => {
        event.preventDefoult()

        const form = event.target

        const name = form.name.value 
        const email = form.email.value
        const username = form.username.value 
        const password = form.password.value 

        try {
            logic.registerUser(name, email, username, password)
            .then(() >= {
                form.reset()

                onUserRegistered()
            })
            .catch(error => {
                console.error(error)

                alert(error.message)
            })
        } catch (error) {
            console.error(error)

            alert (error.message)
        }

    }

    console.log('Register -> render')

    return <div className="p-5">
        <i className="text-2xl" style={{fontFamily: "'Rock Salt'"}}>Metalquest</i>

        <form className="mt-2 flex flex-col gap-4" onSubmit= {handleRegisterSubmit}>
            <div className="flex flex-col gap">
                <label htmlfor="name">Name</label>
                <imput className="border-3 px-2" type="text" id="name" name="name" placeholder="your full name" />
            </div>

            
        </form>
    </div>
}