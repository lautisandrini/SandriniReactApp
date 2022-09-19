import { useLoginContext } from '../context/LoginContext';
import {BrowserRouter} from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRouts from './PublicRoutes';





const AppRouter = () => {

    const {user} = useLoginContext()

    return(
        <div>
            <BrowserRouter>

            {
            user.logged ? <PrivateRoutes/> : <PublicRouts/>
            }

            </BrowserRouter>
        </div>
    )
}

export default AppRouter