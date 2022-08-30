
import { stock } from "../data/Data";

const DatosStock = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    } )
}

export default DatosStock