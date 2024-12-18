import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
