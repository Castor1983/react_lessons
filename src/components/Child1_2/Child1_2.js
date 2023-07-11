import React, {createContext} from 'react';
import {Child2_1} from "../Child2_1/Child2_1";

export const TransferContext2 = createContext(null)
const Child1_2 = () => {
    const text = 'Transfer from the Child1_2 to the Child2_1'
    return (
        <TransferContext2.Provider value={text}>
            <div>
                <Child2_1/>
            </div>
        </TransferContext2.Provider>


    );
};

export {Child1_2};