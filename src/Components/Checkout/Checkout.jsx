import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext" 
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"
import "./checkout.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({

        fullname:"",
        email: "",
        phone: "",

    })
    const {cart, totalPrice, deleteCart} = useContext(cartContext)

    const [idOrder, setIdOrder] = useState(null)
    const handleChangeInput = (event) => {
        setDataForm({
            ...dataForm,[event.target.name]: event.target.value
        })
    }

const handleSubmitForm = async (event) => {
    event.preventDefault()
    
    const order = {
        buyer: {...dataForm},
        products: [...cart],
        date: Timestamp.fromDate(new Date()),
        total: totalPrice()
    }

   const response =await validateForm(dataForm)
   if(response.status === "success") {
    uploadOrder(order)
   }else{
    toast.error(response.message)
   }
    
}

const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
    .then((response) => {
        setIdOrder(response.id)
    })
    .finally(() => {
        deleteCart()
        toast.success("Orden generada con exito")
    })
}


    return (
        
        <div className="checkout">
        {
            idOrder === null ? (
                <form onSubmit={handleSubmitForm} className="form-checkout">
                    <h2>Checkout</h2>
                    <div className="cart-checkout">
                        <label className="label">Nombre completo: </label>
                        <input type="text" name = "fullname" placeholder="Fullname" value={dataForm.fullname} onChange={handleChangeInput} />
                    </div>

                    <div className="cart-checkout">
                        <label className="label">Email: </label>
                        <input type="email" name = "email" placeholder="Email" value={dataForm.email} onChange={handleChangeInput} />
                    </div>

                    <div className="cart-checkout">
                        <label className="label">Telefono: </label>
                        <input type="number" name = "phone" placeholder="Phone" value={dataForm.phone} onChange={handleChangeInput} />
                    </div>

                    <button className="btn-send-order" type="submit">Terminar mi compra</button>
                </form>
            ) : (
                <div>
                    <h2>Gracias por tu compra 😁 </h2>
                    <p>Tu número de orden es: {idOrder}</p>
                    <Link to="/" className="btn-home-check">Volver al inicio</Link>
                </div>
            )
        }
        </div>
    )
}





export default Checkout