

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
            <button onClick={handleSumar} className="btn btn-danger" disabled={counter === max}>+</button>
            <hr/>
            <button onClick={handleAgregar} className="btn btn-danger" disabled={counter <1}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount
