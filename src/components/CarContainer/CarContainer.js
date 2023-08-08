import React from 'react';
import {createContext, useState} from "react";
import {CarForm} from "../CarForm/CarForm"
import {Cars} from "../Cars/Cars";

const Context = createContext(null);
const CarContainer = () => {
    const [carForUpdate, setCarForUpdate] = useState(null);
    return (
        <Context.Provider value={{
            carForUpdate,
            setCarForUpdate
        }}>
            <div>
                <CarForm/>
                <Cars/>
            </div>
        </Context.Provider>
    );
};

export {CarContainer, Context};