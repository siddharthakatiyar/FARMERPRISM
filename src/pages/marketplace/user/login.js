import React from "react";
import handleLogin from './handleLogin';
import GoogleLogin from "react-google-login";

const Login = () => {
    return (
        <div>
            <center>Log In / Sign Up</center>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Continue with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
};

export default Login;