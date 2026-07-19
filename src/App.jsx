import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/home'
import User from './component/User/user'
import Navbar from './component/Navbar/navbar'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/Home' element={<Home />}/>
          <Route path='/user' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
