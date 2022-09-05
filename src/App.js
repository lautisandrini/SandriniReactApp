
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./componentes/header/Header";
import ItemListContainer from "./componentes/main/ItemListContainer";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemDetailContainer from './componentes/main/ItemDetailContainer';






const App = () => {

  return (

    <div>

      <BrowserRouter>
      
        <Header/>

        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

          <Route path='*' element={ <Navigate to="/"/>} />
        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;
