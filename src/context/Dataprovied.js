import React, { createContext, useEffect, useState } from "react";
import Data from './Data.js';

export const Datacontext = createContext();

export const Dataprovied = (props) => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        const product = Data.items
        if (product) {
            
            setProducts(product)
        }else{
            setProducts([])
        }
    }, [])
    

    const value = {
        Products: [Products]
    }

    return(
        <Datacontext.Provider value={value}>
            {props.children}
        </Datacontext.Provider>
    )

}
