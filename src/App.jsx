import Navbar from './component/Navbar/navbar'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import img1 from './assets/img1.png'
import Product from './component/Product/Product'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <img src={img1} alt="banner" />
        <Product />
      </BrowserRouter>
    </div>
  )
}
