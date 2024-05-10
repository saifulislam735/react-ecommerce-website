
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ fontSize: '2em', color: '#333' }}>404 | Nothing here to see</h1>
            <Link to={'/react-ecommerce-website/'}>
                <button
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        fontSize: '1em',
                        color: '#fff',
                        backgroundColor: '#007BFF',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default Error;
