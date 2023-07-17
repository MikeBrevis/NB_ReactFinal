import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css";

const Products = () => {
    const { data, cart, setters } = useContext(dataContext);

    const buyProducts = (product) => {
        setters.setCart([...cart, product]);
    };

    return (
        <div className="product-grid">
            {data.map((product) => {
                return (
                    <div className="card" key={product.id}>
                        <img src={product.img} alt="img-product-card" />
                        <h3>{product.name}</h3>
                        <h4>{product.price}$</h4>
                        <button onClick={() => buyProducts(product)}>Buy</button>
                    </div>
                )
            })}
        </div>
    );
};

Products.displayName = 'Products';

export default Products;
