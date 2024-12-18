import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="item">
            <img src={product.image} className="img-item" alt="" style={{ width: "100px" }}  />
            <h3 className="text-item">{product.name}</h3>
            <p className="text-item">${product.price}</p>
        
            <Link to={"/detail/" + product.id} className="detail">Ver detalle</Link>
        </div>
    );
};

export default Item;