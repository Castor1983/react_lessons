import {useState} from "react";
function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);
const toggle = () => {
    setValue(!value)
}
return [value, toggle]
}
export {useToggle}