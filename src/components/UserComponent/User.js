import React from 'react';
import {UserDetails} from "../UserDetailsComponent/UserDetails";
import {UserAdress} from "../UserAdressComponent/UserAdress";
import {Company} from "../CompanyComponent/Company";

const User = ({user}) => {
    const {id, name, username, email, phone, website, address, company} = user

    return (
        <div>
            <UserDetails  id = {id}
                          name={name}
                          username={username}
                          email={email}
                          phone={phone}
                          website={website}/>
            <UserAdress address={address}/>
            <Company company={company}/>

        </div>
    );
};

export {User};