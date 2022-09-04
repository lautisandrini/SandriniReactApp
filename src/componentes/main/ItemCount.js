import { useState } from "react"


const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="counter">
            <button onClick={handleRestar} className="btn btn-danger" disabled={counter < 1}>-</button>
            <span> {counter} </span>
            <button onClick={handleSumar} className="btn btn-danger" >+</button>
        </div>
    )

}

export default ItemCount
