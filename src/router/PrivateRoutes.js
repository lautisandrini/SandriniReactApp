
import ItemListContainer from '../componentes/main/ItemListContainer';
import ItemDetailContainer from '../componentes/main/ItemDetailContainer';
import Cart from '../componentes/main/Cart';
import Header from '../componentes/header/Header';
import {Navigate, Route, Routes} from 'react-router-dom'


const PrivateRoutes = () => {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path='/' element={ <ItemListContainer/> }/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='*' element={ <Navigate to="/"/>} />
                </Routes>
        </>
    )
}

export default PrivateRoutes