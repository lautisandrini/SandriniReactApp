
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/main/ItemListContainer";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from './componentes/main/ItemDetailContainer';
import {CartContext} from './context/CartContext';
import Cart from './componentes/main/Cart';
import { useState } from 'react';



const App = () => {

  const [cart, setCart] = useState([])

  const addToCart = (item) => {

    setCart([...cart,item])

  }

  const isInCart = (id) => {
    return cart.some((item) => item.id == id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  return (

    <div>

      <CartContext.Provider value={ {cart, addToCart, isInCart, cartQuantity} } >

        <BrowserRouter>
        
          <Header/>
        
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
        
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>
        
        </BrowserRouter>

      </CartContext.Provider>

    </div>

  );

}

export default App;
