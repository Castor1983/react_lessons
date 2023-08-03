import {users} from "../../usersArray/usersArray";

const useArray = (defaultValue) => {

   if (typeof defaultValue === 'object') {
       users.push(defaultValue)
   } else if (typeof defaultValue === 'number') {
      users.filter((user)=>user.id !== defaultValue)
   }
   return users

}
export {useArray}