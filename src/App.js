import {users} from "./usersArray/usersArray";
import {User} from "./components/User/User";

const App = () => {

    return (
        <>

            {users.map(user=><User key={user.id} user={user}/>)}
        </>
    );
};

export {App};