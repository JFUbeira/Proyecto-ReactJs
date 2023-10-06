import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
            <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i className="fas fa-bars"></i>
        </button>
        <div className="container d-flex justify-content-center">
            <div className="row">
            <div className="col-12 d-flex justify-content-center mb-3">
                <a className="navbar-brand" href="#"
                >ODESSA</a>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav align-items-center mx-auto">
                    <li className="nav-item">
                        <NavLink to='/category/invierno'>
                            <div className="nav-link mx-2"><i className="fas fa-plus-circle pe-2"></i>INVIERNO</div>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/category/verano'>
                            <div className="nav-link mx-2"><i className="fas fa-plus-circle pe-2"></i>VERANO</div>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link mx-2" href="#!"><i className="fas fa-heart pe-2"></i>LOCALES</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/cart'>
                            <div className="nav-link mx-2"><CartWidget /></div>
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </nav>
)}

export default Navbar
