import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import './Navbar.css';
import Modal from './Modal/Modal';

import logoLeft from '../../images/logo_tienda.png';
import logoRight from '../../images/logo_tienda.png'; 

const Navbar = () => {
    const { cart, setters, showModal } = useContext(dataContext);
    const cartModal = showModal && <Modal data={cart} showModal={setters.setShowModal} />;

    return (
        <div className="nav-container">
            <nav className="navbar">
                <img src={logoLeft} alt="logo left" className="navbar-logo-side" />
                <h1 className="navbar-logo">joyeria targaryen</h1>
                <img src={logoRight} alt="logo right" className="navbar-logo-side" />
                <div className="cart-container">
                    <p className="cart-p">{cart.length}</p>
                    <div className="seeCarrito" onClick={() => setters.setShowModal(true)}>🛒</div>
                </div>
            </nav>
            { cartModal }
        </div>
    )
};

Navbar.displayName = 'Navbar';

export default Navbar;

