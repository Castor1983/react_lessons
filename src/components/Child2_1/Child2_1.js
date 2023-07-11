import React, {useContext} from 'react';
import {TransferContext2} from "../Child1_2/Child1_2";

const Child2_1 = () => {
    const resultTransfer2 = useContext(TransferContext2)

    return (
        <div>
            {resultTransfer2}
        </div>
    );
};

export {Child2_1};