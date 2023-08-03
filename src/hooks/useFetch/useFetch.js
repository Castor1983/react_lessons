import {useEffect} from "react";

function useFetch (endpoint) {
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
            .then(resp => resp.json())
            .then(json => console.log(json))
    }, [endpoint])
    return null
}
export {useFetch}