import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import PageNF from './pages/PageNF';
import Success from './pages/Success';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/*' element={<PageNF></PageNF>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App