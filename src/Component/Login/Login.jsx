import './Login.css'; // Import the CSS file
import logo from '../../images/Logo-google-icon-PNG.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthContex } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showError, setShowError] = useState('');
    const [showSuccess, setShowSuccess] = useState('');

    //usecontext for signIn
    const { signIn, user, logOut } = useContext(AuthContex)

    //to neviagte
    const nevigate = useNavigate()

    //to get location of redirecting page /from page
    const location = useLocation()
    const from = location.state?.from?.pathname || "/react-ecommerce-website/";


    const handleLogin = (event) => {
        //prevent reload
        event.preventDefault()

        //get email and password
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //signIn 
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setShowSuccess('Login Successful!')
                toast.success('Login Successful!')
                setTimeout(() => setShowSuccess(''), 3000)
                form.reset()
                
                //afterLogin nevigate to home page or from page(where we intend to go)
                nevigate(from, { replace: true })

            })
            .catch((error) => {
                const errorMessage = error.message;
                setShowError(errorMessage)
                console.log(errorMessage)
                setTimeout(() => setShowError(''), 3000)
            }
            )

    }
    return (
        <div style={{ marginTop: '50px' }}>
            {user ?
                //if there is logged user
                <div>
                    <p><h2>Already Login in </h2><span style={{ color: '#F90' }}>{user.email}</span></p>

                    <p>for log in another account, please SignOut from this account first</p>
                    <button onClick={logOut}>SignOut</button>
                </div>

                :
                //if there is no logged user
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin} className="login-form">
                        <label>
                            Email
                            <input type="email" name="email" required />
                        </label>
                        <label className="password-container">
                            Password
                            <div className="input-icon-container">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    required
                                />
                                <FontAwesomeIcon
                                    icon={showPassword ? faEye : faEyeSlash}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-icon"
                                />
                            </div>
                        </label>
                        <button type="submit" className="login-button">Login</button>
                        <p>
                            New to Ema-john?  <Link to="/react-ecommerce-website/signup"><span style={{
                                color: '#F90'
                            }}> Create New Account</span></Link>
                        </p>
                        <div className="or-separator">
                            <span>or</span>
                        </div>
                        <button type="button" className="google-button">
                            <img src={logo} alt="Google logo" /> Continue with Google
                        </button>
                    </form>

                    {/* show error or success */}
                    <span style={{ color: 'red', opacity: '0.7', textAlign: "start" }}>
                        {showError}
                    </span>
                    <span style={{ color: 'green', opacity: '0.7', textAlign: "start" }}>
                        {showSuccess}
                    </span>
                </div>
            }

        </div>
    );
};

export default Login;
