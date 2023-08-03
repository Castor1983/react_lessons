
import {User} from "./components/User/User";
import {useArray} from "./hooks/useArray/useArray";
import {useState} from "react";

const App = () => {
    const [defaultValue, setDefaultValue] = useState(null)
const newUsers = useArray(1)
    return (
        <>

            {newUsers.map(user=><User key={user.id} user={user}/>)}
        </>
    );
};

export {App};