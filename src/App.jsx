import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ArticlesList from './components/ArticlesList/ArticlesList';
import SingleArticle from './components/SingleArticle/SingleArticle';
import ArticleCommentsList from './components/ArticleCommentsList/ArticleCommentsList';
import UsersList from './components/UsersList/UsersList';


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/articles' element={<ArticlesList />}></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
        <Route path='/articles/:article_id/comments' element={<ArticleCommentsList/>}>Comments</Route>
        <Route path='/api/users' element={<UsersList />}></Route>
      </Routes>
    </>
  )
}

export default App
