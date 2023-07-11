import {useContext} from "react";
import {TransferContext} from "../../App";

const Child1_1 = () => {
   const {info} = useContext(TransferContext)

    return (
        <div>
            {info}
        </div>
    );
};

export {Child1_1};