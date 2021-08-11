import { useState} from "react"
import isEmail from "validator/lib/isEmail"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()

    function loginValidation() {
        if(email === '' && password === ''){ 
            setEmailError('Email can not be empty')
            setPasswordError('Password can not be empty')
            return false
        }else if(email !== '' && !isEmail(email)){
            setEmailError('Email is not Valid')
            setPasswordError()
            return false
        }else if(password === ''){
            setEmailError()
            setPasswordError('Password can not be empty')
            return false
        }else{
            setEmailError()
            setPasswordError()
            return true
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if(loginValidation()){
            console.log(email)
            console.log(password)
        }
        
    }

    return (
        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form className="box" onSubmit={handleLogin}>
                                <div className="field">
                                    <label htmlFor="email-input" className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="text" placeholder="email@email.com" id="email-input" className={emailError ? "input is-rounded is-danger" : "input is-rounded "} onChange={e => setEmail(e.target.value)}/>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                    {emailError ? <p className="help is-danger">{emailError}</p> : null}
                                </div>

                                <div className="field">
                                    <label htmlFor="passwoprd-input" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="*******" id="passwoprd-input" className={passwordError ? "input is-rounded is-danger" : "input is-rounded "} onChange={e => setPassword(e.target.value)}/>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                    {passwordError ? <p className="help is-danger">{passwordError}</p> : null}
                                </div>

                                <div className="field">
                                    <button className="button is-success">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;