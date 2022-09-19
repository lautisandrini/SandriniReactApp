
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { CartProvider} from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import { useLoginContext } from './context/LoginContext';
import AppRouter from './router/AppRouter';


const App = () => {

  return (

    <LoginProvider>

      <CartProvider>

        <AppRouter/>

      </CartProvider>

    </LoginProvider>

  );

}

export default App;
