
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/main/ItemListContainer";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from './componentes/main/ItemDetailContainer';
import { CartProvider} from './context/CartContext';
import Cart from './componentes/main/Cart';
import { LoginProvider } from './context/LoginContext';
import LoginScreen from './componentes/main/LoginScreen';




const App = () => {

  return (

    <LoginProvider>

      <CartProvider>

        <BrowserRouter>
        
          <Header/>
        
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
        
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>
        
        </BrowserRouter>

      </CartProvider>

    </LoginProvider>

  );

}

export default App;
