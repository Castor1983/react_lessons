import React, {createContext} from 'react';
import {Child1_1} from "../Child1_1/Child1_1";

export const TransferContext = createContext(null)
const Child2_2 = () => {
    const info = 'Transfer from the Child2_2'
    return (
<TransferContext.Provider value={info}>
    <div>
        <Child1_1/>
    </div>
</TransferContext.Provider>



    );
};

export {Child2_2};