import CartWidget from "../CartWidget/CartWidget"
import pelicula from './assets/pelicula.png'
import { Link } from "react-router-dom";
import './navbar.css'


const NavBar = () => {

    return (
        
        <nav className="navbar">
            <img src={pelicula} alt="logo" style={{width: '48px', height: '48px', marginRight: '5px'}}/>
            <h1 className="titulo">TuPelicula</h1>
            <ul className="nav-links" >
                <li className="home"><Link to="/">Home</Link></li>
                <li><Link to="/category/terror">terror</Link></li>
                <li><Link to="/category/comedia">comedia</Link></li>
                <li><Link to="/category/romance">romance</Link></li>
                <li><Link to="/category/ciencia ficcion">ciencia ficcion</Link></li>
                <li><Link to="/category/accion">accion</Link></li>
                <li><Link to="/category/drama">drama</Link></li>
            </ul>
            <CartWidget />
        </nav>
    
    )
    
}

export default NavBar