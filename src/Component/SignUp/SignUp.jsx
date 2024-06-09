import './SignUp.css'; // Import the CSS file
import logo from '../../images/Logo-google-icon-PNG.png'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthContex } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showError, setShowError] = useState('');
    const [showSuccess, setShowSuccess] = useState('');

    const { createUser } = useContext(AuthContex)
    const handleSignUp = (event) => {
        //1.prevent reload the page
        event.preventDefault();

        //2.get the name email password
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        // const name = form.name.value;
        console.log(form, email, password, confirm_password)
        setShowError('');
        setShowSuccess('');
        //validation
        if (!/(?=.*[a-z])/.test(password)) {
            setShowError('at least one small letter [a-z]');
            setTimeout(() => setShowError(''), 3000);
            return;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setShowError('at least one capital letter [A-Z]');
            setTimeout(() => setShowError(''), 3000);
            return;
        } else if (!/(?=.*\d)/.test(password)) {
            setShowError('at least one digit [0-9]');
            setTimeout(() => setShowError(''), 3000);
            return;
        } else if (!/(?=.*[@$!%*?&])/.test(password)) {
            setShowError('at least one special character [@$!%*?&]');
            setTimeout(() => setShowError(''), 3000);
            return;
        } else if (!/^.{8,16}$/.test(password)) {
            setShowError('minimum 8 characters, maximum 16 characters');
            setTimeout(() => setShowError(''), 3000);
            return;
        } else if (password !== confirm_password) {
            setShowError("Password don't match");
            setTimeout(() => setShowError(''), 3000);
            return;
        } else {
            setShowError('');
        }

        //setting email and password
        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setShowSuccess('Account created successfully!')
                toast.success('Account created successfully!')
                setTimeout(() => setShowSuccess(''), 3000)
                form.reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                setShowError(errorMessage)
                console.log(errorMessage)
                setTimeout(() => setShowError(''), 3000)

            });

    }

    return (
        <div style={{ marginTop: '50px' }}>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp} className="signup-form">
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
                    <label className="password-container">
                        Confirm Password
                        <div className="input-icon-container">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirm_password"
                                required
                            />
                            <FontAwesomeIcon
                                icon={showConfirmPassword ? faEye : faEyeSlash}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="password-icon"
                            />
                        </div>
                    </label>

                    <button type="submit" className="signup-button">Sign Up</button>
                    <p>
                        Already have an account? <Link to="/react-ecommerce-website/login"><span style={{
                            color: '#F90'
                        }}>Login</span></Link>
                    </p>
                    <div className="or-separator">
                        <span>or</span>
                    </div>
                    <button type="button" className="google-button">
                        <img src={logo} alt="Google logo" /> Continue with Google
                    </button>
                </form>
                <span style={{ color: 'red', opacity: '0.7', textAlign: "start" }}>
                    {showError}
                </span>
                <span style={{ color: 'green', opacity: '0.7', textAlign: "start" }}>
                    {showSuccess}
                </span>
            </div>
        </div>
    );
};

export default SignUp;
