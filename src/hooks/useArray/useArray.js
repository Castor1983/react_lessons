import {useState} from "react";


const useArray = (defaultValue) => {
   const [value, setValue] = useState(defaultValue);

   const add = item => {
      setValue(prevValue => [...prevValue, item]);
   };

   const remove = id => {
      setValue(prevValue => prevValue.filter((_, i) => i !== id));
   };

   const isEmpty = () => value.length === 0;

   return { value, setValue, add, remove, isEmpty };

}
export {useArray}