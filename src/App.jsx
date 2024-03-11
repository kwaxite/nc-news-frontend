import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'


function App() {
 

  return (
    <>
    <Header/>
    <Route path='/' element={ <Home/>}></Route>
    </>
  )
}

export default App
