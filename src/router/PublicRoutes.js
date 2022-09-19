
import LoginScreen from "../componentes/main/LoginScreen";
import {Navigate, Route, Routes} from 'react-router-dom'

const PublicRouts = () => {

    return (
        <Routes>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
    )
}

export default PublicRouts