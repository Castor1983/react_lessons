import React, {useContext} from 'react';
import {TransferContext} from "../Child2_2/Child2_2";

const Child1_1 = () => {
    const resultTransfer = useContext(TransferContext)

    return (
        <div>
            {resultTransfer}
        </div>
    );
};

export {Child1_1};