import logo from './logo.svg';
import './App.css'
import JewelryContainer from "./components/JewelryContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Jewelry from './components/Jewelry';
import JewelryList from "./components/JewelryList"
import CustomPieceForm from "./components/CustomPieceForm"
import React, { useState, useEffect } from "react"
import fire from "./fire"
import Login from "./components/Login"
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions
import ShoppingCart from './components/ShoppingCart';
import MainContainer from './components/MainContainer';


const PAGE_JEWLERY = 'jewlContainer'
const PAGE_CART = 'cart'

function App() {
  const [page, setPage] = useState('products')
  const [cart, setCart] = useState([])
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState('')

  const navigateTo = (nextPage) => {
    setPage(nextPage)

  }

const removeItem = (removedJewelry) => {
  setCart(
    cart.filter((jewelry) => jewelry != removedJewelry)
  )
}

  const addToCart = (jewelry) => {
    console.log("we hea")
    setCart([...cart, jewelry])
  }

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message)
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleSignup = () => {
    clearErrors()
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message)
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
  }

  const handleLogout = () => {
    fire.auth().signOut()
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs()
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  }, []);


  return (

    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}> View Cart ({cart.length})</button>
        <button onClick={() => navigateTo(PAGE_JEWLERY)}>View Ice</button>
      </header>
      {/* {page === PAGE_JEWLERY && <JewelryContainer addToCart={addToCart}/>}
      {page === PAGE_CART && <ShoppingCart />} */}


      {user ? (
        <MainContainer handleLogout={handleLogout} addToCart={addToCart} page={page} cart={cart} removeItem={removeItem} />
      ) : (
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />

        )}
      <h1>Coolio ?</h1>
      {/* <JewelryContainer/>
       */}
      {/* <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError}/> */}
      {/* <Route exact path="/jewelries" render={(routeProps)=><JewelryList {...routeProps} jewelries={this.state.allJewelry} addToCart={this.addToCart} callClick={this.calledClick} /> } /> */}

      {/* <CustomPieceForm/> */}
    </div>
  );
}

export default App;
