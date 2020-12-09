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
import {Navbar, Nav, Form, Button, FormControl} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


const PAGE_JEWLERY = ''
const PAGE_CART = 'cart'
const PAGE_FORM = 'custom'

function App() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")
  const [page, setPage] = useState('products')
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState('')

  const filterJewelry = () => {

  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const navigateTo = (nextPage) => {
    setPage(nextPage)

  }
  const getTotalSum = () => {
    return cart.reduce((sum, { price }) => sum + price, 0)
}


const removeItem = (removedJewelry) => {
  setCart(
    cart.filter((jewelry) => jewelry != removedJewelry)
  )
}

const clearCart = () => {
  console.log("wow")
  setCart([])
}

  const addToCart = (jewelry) => {
    // let newCart = [...cart]
    // let itemInCart = newCart.find(
    //   (jewelry) => jewelry.name === jewelry.name
    // )
    // if(itemInCart) {
    //   itemInCart.quantity++
    // } else {
    //   itemInCart = {
    //     ...jewelry,
    //     quantity: 1,
    //   }
    //   newCart.push(itemInCart)
    // }
    // setCart(newCart)
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
      
      
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Jay Jewelerz</Navbar.Brand>
    <Nav className="mr-auto">
    <Button onClick={() => navigateTo(PAGE_JEWLERY)} variant="outline-info">Ice</Button>
    <Button onClick={() => navigateTo(PAGE_FORM)} variant="outline-info">Customz</Button>
    </Nav>
    <Button style={{ marginLeft: "auto", marginRight: "1vw"}} onClick={() => navigateTo(PAGE_CART)} variant="outline-info">Cart ({cart.length})</Button>
   
    {user ? (
    <Button onClick={handleLogout}>Logout</Button>
    ) : (
      null
    )}
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  
        {/* <button onClick={() => navigateTo(PAGE_CART)}> View Cart ({cart.length})</button> */}
        {/* <button onClick={() => navigateTo(PAGE_JEWLERY)}>View Ice</button> */}
        {/* <button onClick={() => navigateTo(PAGE_FORM)}>Custom</button> */}
       
       
      </Navbar>
      
      {/* {page === PAGE_JEWLERY && <JewelryContainer addToCart={addToCart}/>}
      {page === PAGE_CART && <ShoppingCart />} */}


      {user ? (
        <MainContainer addToCart={addToCart} page={page} cart={cart} removeItem={removeItem} clearCart={clearCart} getTotalSum={getTotalSum} navigateTo={navigateTo}/>

      ) : (
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />

        )}
      {/* <h1>Coolio ?</h1> */}
      {/* <JewelryContainer/>
       */}
      {/* <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError}/> */}
      {/* <Route exact path="/jewelries" render={(routeProps)=><JewelryList {...routeProps} jewelries={this.state.allJewelry} addToCart={this.addToCart} callClick={this.calledClick} /> } /> */}

       {/* <CustomPieceForm addToCart={addToCart} getTotalSum={getTotalSum}/> */}
    </div>
  );
}

export default App;
