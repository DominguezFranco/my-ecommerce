import "./itemdetail.css"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "../../context/CartContext"


const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState(true)
    const { cart, addProductInCart } = useContext(cartContext)

    const addProduct = (counter) => {
        const productCart = {...product, quantity: counter}
        addProductInCart(productCart)
        setShowItemCount(false)
    }

    


    return (
        <div className="item-detail">
            <img src={product.image} alt="" />
            <div className="container"> 
                <h2 className="title-detail">{product.name}</h2>
                <p className="text-detail">Precio: ${product.price}</p>
                <p className="text-detail">{product.description}</p>

                {
                    showItemCount === true ?
                    (<ItemCount stock={product.stock} addProduct={addProduct} />)
                    :
                    (<Link to="/cart" className="btn-end-buy">terminar mi compra</Link>)
                }
            </div>
            
        </div>
    )
}

export default ItemDetail