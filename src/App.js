import {Child1} from "./components/Child1/Child1";
import {createContext, useState} from "react";
import {Child2} from "./components/Child2/Child2";


export const TransferContext = createContext(null)
const App = () => {
  const [info, setInfo] = useState(null)

    return (
<TransferContext.Provider value={{info, setInfo}}>
    <div>
        <Child1/>
        <Child2/>
    </div>
</TransferContext.Provider>


    );
};

export {App};