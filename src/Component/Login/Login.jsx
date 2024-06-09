import './Login.css'; // Import the CSS file
import logo from '../../images/Logo-google-icon-PNG.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ marginTop: '50px' }}>
            <div className="login-container">
                <h2>Login</h2>
                <form className="login-form">
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
            </div>
        </div>
    );
};

export default Login;
