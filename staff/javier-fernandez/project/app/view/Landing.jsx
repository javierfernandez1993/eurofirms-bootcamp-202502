export const Landing = ({ onRegisterClicked, onLoginClicked }) => {
    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log("Landing -> render")

    return <div classname="p-5">
        <i classname="text-2xl">METALQUEST</i>

        <div className="mt-2">
            <a className="underline" href="#" onClick={handleRegisterClick}>Register</a>
            &nsbp;or&nbsp;
            <a className="underline" href="#" onClick={handleLoginClick}>Login</a>
        </div>
    </div>
}