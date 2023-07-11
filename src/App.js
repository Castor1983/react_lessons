import {useEffect, useState} from "react";
import {Users} from "./components/UsrersComponent/Users";

const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    });

    return (
        <>
            <Users users={users}/>
        </>
    );
};

export {App};