import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Navbar/Nav'
import Cart from './Components/cart/Cart'
import Home from './Components/Home'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
  <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cart" element={<Cart/>} />
    </Routes>
  </BrowserRouter>
   
  )
}

export default App