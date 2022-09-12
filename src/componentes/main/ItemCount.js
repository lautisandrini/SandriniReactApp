import { useState } from "react"
import { Link } from 'react-router-dom'


const ItemCount = ({max, counter, setCounter, handleAgregar}) => {

    const handleSumar = () => {
        if (counter < max ) {
            setCounter(counter + 1)
        }
    }

    const handleRestar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="counter">
            <button onClick={handleRestar} className="btn btn-danger" disabled={counter < 1}>-</button>
            <span className="btnDetail"> {counter} </span>
            <button onClick={handleSumar} className="btn btn-danger" disabled={counter == max}>+</button>
            <hr/>
            <Link to={'/cart'} onClick={handleAgregar} className="btn btn-danger">Terminar mi compra</Link>

        </div>
    )

}

export default ItemCount
