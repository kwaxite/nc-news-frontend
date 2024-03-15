import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ArticlesList from './components/ArticlesList/ArticlesList';
import SingleArticle from './components/SingleArticle/SingleArticle';
import ArticleCommentsList from './components/ArticleCommentsList/ArticleCommentsList';
import UsersList from './components/UsersList/UsersList';
import UserContext from './contexts/UserContext';

UserContext

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    {
      "username": "tickle122",
      "name": "Tom Tickle",
      "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
      }
  )


  return (
    <>
      <UserContext.Provider value={{loggedInUser: loggedInUser, setLoggedInUser:setLoggedInUser}} >
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/articles' element={<ArticlesList />}></Route>
          <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
          <Route path='/articles/:article_id/comments' element={<ArticleCommentsList />}>Comments</Route>
          <Route path='/api/users' element={<UsersList />}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
