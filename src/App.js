import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Articles from './pages/articles'
import DetailPage from './pages/detailPage'

function App () {
  return (
    <div className="App ">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
              <Route end path="/" element={<Articles />} />
              <Route path="/article/:articleId" element={<DetailPage />} />
              <Route path="" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
