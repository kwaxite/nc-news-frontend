import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ArticlesList from './components/ArticlesList/ArticlesList';


function App() {
 

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/articles' element={<ArticlesList/>}></Route>
    </Routes>
    </>
  )
}

export default App
