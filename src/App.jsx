import React from 'react'
import Navbar from './component/Navbar/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import img1 from './assets/img1.png'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <img src={img1} alt="banner" />
      
      </BrowserRouter>
    </div>
  )
}
