import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState ([]);
    const [cart, setCart] = useState ([]);
    const [showModal, setShowModal] = useState(false);

    const setters = {
        setData,
        setCart,
        setShowModal
    };

    useEffect(()=>{
        axios("data.json").then((res)=> setData(res.data))
    }, [])
    return <dataContext.Provider value={{data, cart, showModal, setters}}>{children}</dataContext.Provider>;
};

export default DataProvider;
