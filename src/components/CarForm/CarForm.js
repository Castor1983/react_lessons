import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit,reset} = useForm();
    return (
        <div>
           <form>
               <label> : <input type={text} placeholder={''}/> </label>
           </form>
        </div>
    );
};

export {CarForm};