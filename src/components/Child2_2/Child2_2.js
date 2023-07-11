import {useContext, useEffect} from "react";
import {TransferContext} from "../../App";

const Child2_2 = () => {
    const {setInfo} = useContext(TransferContext)
    const  text = 'Transfer from the Child2_2 to the Child1_1'
    useEffect(()=> setInfo(text))
    return (

            <div>

            </div>



    );
};

export {Child2_2};