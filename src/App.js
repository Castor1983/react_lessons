import TestUseMemo from "./components/TestUseMemo/TestUseMemo";
import {useState} from "react";

const App = () => {
    const [data, setData] = useState(0);


    const changeCount = (type) => {
        setData(type === 'decrement' ? data - 1 : data + 1)
    };
    console.log('App Render')
    return (
        <>

            <TestUseMemo data={data} changeCount={changeCount}/>

        </>
    );
};

export {App};