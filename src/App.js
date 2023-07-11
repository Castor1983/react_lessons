import {useEffect, useState} from "react";

import {UsersComponent} from "./components/UsersComponent/UsersComponent";
const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    })

    return (
        <>

            <UsersComponent users={users}/>
        </>
    );
};

export {App};