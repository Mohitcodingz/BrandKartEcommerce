import React from 'react'
import Navbar from './component/Navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </div>
  )
}
