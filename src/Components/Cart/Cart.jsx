import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import "./cart.css"
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(cartContext)
    
    if(cart.length === 0) {
        return (
            <div className="empty-cart-container">
                <h1 className="empty-cart">No hay productos en el carrito</h1>
                <Link to="/" className="btn-home-cart">Ir a comprar</Link>
            </div>
        )
    
    }
    
    
    
    return (
        <div className="cart">
            <h1 className="title-cart">Carrito de compras</h1>
            {
                cart.map((productCart) => (
                    <div key={productCart.id} className="item-cart"> 
                        <img src={productCart.image} alt="" className="img-cart" />
                        <div className="container-cart"> 
                            <h2 className="title-cart">{productCart.name}</h2>
                            <p className="text-cart">Precio: ${productCart.price}</p>
                            <p className="text-cart">Cantidad: {productCart.quantity}</p>
                            <p className="text-cart">Subtotal: ${productCart.price * productCart.quantity}</p>
                            <button className="btn-delete-cart" onClick={() => deleteProductById(productCart.id)}>
                                 <img className="img-trash" src="https://cdn-icons-png.flaticon.com/512/63/63481.png" alt="" /></button>
                        </div>
                    </div>
                ))
            }
            <div className="total-cart">
                <p className="text-total-cart">Total: ${totalPrice() }</p>
                <button className="btn-vaciar-cart" onClick={deleteCart}>Vaciar carrito</button>
                <Link className="btn-continuar-compra" to="/checkout" >Continuar con mi compra</Link>
            </div>
        </div>
    )
}

export default Cart