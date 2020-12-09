import React from "react"
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props
    return (
        <section className="login">
            <div className="logContainer"></div>
            <label>Login</label>
            <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
    <p className="errorMsg">{passwordError}</p>
    <div className="btnContainer">
        {hasAccount ? (
<>
<button onClick={handleLogin}>Sign In</button>
<p>Dont have an accouunt ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
</>
        ): (
            <>
<button onClick= {handleSignup}>Sign Up </button>
<p>Have an Account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In </span></p>
</>
        )}
    </div>
        </section>
    )
}

export default Login;