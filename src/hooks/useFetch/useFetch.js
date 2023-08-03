import {useEffect, useState} from "react";

function useFetch (endpoint) {
    const [data, setData] = useState([])
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
            .then(resp => resp.json())
            .then(json => setData(json))
    }, [endpoint])
    return console.log(data)
}
export {useFetch}