import { useLoginContext } from '../context/LoginContext';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemListContainer from '../componentes/main/ItemListContainer';
import ItemDetailContainer from '../componentes/main/ItemDetailContainer';
import Cart from '../componentes/main/Cart';
import Header from '../componentes/header/Header';
import LoginScreen from '../componentes/main/LoginScreen';




const AppRouter = () => {

    const {user} = useLoginContext()

    return(
        <div>
            <BrowserRouter>

            {
            user.logged
                ? <>
                    <Header/>
                    <Routes>
                        <Route path='/' element={ <ItemListContainer/> }/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
                        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='*' element={ <Navigate to="/"/>} />

                    </Routes>

                </>
          
                : <>
                    <Routes>
                        <Route path='/login' element={<LoginScreen/>}/>
                        <Route path='*' element={<Navigate to="/login"/>}/>
                    </Routes>
                </>
            }

            </BrowserRouter>
        </div>
    )
}

export default AppRouter