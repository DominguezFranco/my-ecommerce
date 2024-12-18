import { useState } from 'react'
import "./itemcount.css"


const ItemCount = ({stock, addProduct}) => {

    const [counter, setCounter] = useState(1)

    const handleClickDecrement = () => {
        if (counter > 1){
            setCounter(counter - 1)
        }
    } 
    
    const handleClickIncrement = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
    }

    return (
        <div className="item-count">
            <div className="controls-count">
                <button onClick={handleClickDecrement}>-</button>
                <p>{counter}</p>
                <button onClick={handleClickIncrement}>+</button>
            </div>
            <button className="btn-add" onClick={() => addProduct(counter)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount