/* import './Modal.css';

const Modal = ({ data, showModal }) => {

    const cartProducts = data.map(cartData => 
        <div className="detail-product" key={cartData.id}>
            <p>{cartData.name}</p>
            <p>{cartData.character}</p>
            <p>{cartData.price}</p>
        </div>
    );

    const total = data.reduce((accumulator, producto) => accumulator + producto.price, 0);
    const isAnyProduct = data.length ? cartProducts : <div><p>Aun no hay productos en tu carro</p></div>

    return (
        <div className="modal-container">
            <div onClick={() => showModal(false)} className="close-button">X</div>
            { isAnyProduct }
            
            { data.length && <div><p>Total ${ total }</p></div> }
        </div>
    )
};

Modal.displayName = 'Modal';

export default Modal; */

import { useState, useEffect } from "react";
import './Modal.css';

const Modal = ({ data, showModal }) => {

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        confirmEmail: "",
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const cartProducts = data.map(cartData => 
        <div className="detail-product" key={cartData.id}>
            <p>{cartData.name}</p>
            <p>{cartData.character}</p>
            <p>{cartData.price}</p>
        </div>
    );

    const total = data.reduce((accumulator, producto) => accumulator + producto.price, 0);

    const handleSubmit = () => {
        if (isFormValid) {
            window.alert(`Gracias por tu compra. El monto total a pagar es: ${total}`);
        } else {
            alert("Por favor, llena todos los campos y asegurate de que los e-mails coinciden.");
        }
    };

    // Validar formulario cuando cambie el estado del formulario
    useEffect(() => {
        if (form.email === form.confirmEmail && form.nombre && form.apellido && form.telefono && form.email) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [form]);

    const isAnyProduct = data.length ? cartProducts : <div><p>Aun no hay productos en tu carro</p></div>

    return (
        <div className="modal-container">
            <div onClick={() => showModal(false)} className="close-button">X</div>
            { isAnyProduct }
            <div>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} />
                <input type="text" name="apellido" placeholder="Apellido" onChange={handleInputChange} />
                <input type="tel" name="telefono" placeholder="Telefono" onChange={handleInputChange} />
                <input type="email" name="email" placeholder="E-mail" onChange={handleInputChange} />
                <input type="email" name="confirmEmail" placeholder="Confirma tu e-mail" onChange={handleInputChange} />
                <button onClick={handleSubmit} disabled={!isFormValid}>Realizar Compra</button>
            </div>
            { data.length && <div><p>Total ${ total }</p></div> }
        </div>
    )
};

Modal.displayName = 'Modal';

export default Modal;

