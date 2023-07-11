import React from 'react';

import styles from './User.module.scss'
import {UserDetails} from "../UserDetailsComponent/UserDetails";
import {UserAddress} from "../UserAddressComponent/UserAddress";
import {Company} from "../CompanyComponent/Company";

const User = ({user}) => {
    const {id, name, username, email, phone, website, address, company} = user

    return (
        <div className={styles.container}>
            <UserDetails id={id}
                         name={name}
                         username={username}
                         email={email}
                         phone={phone}
                         website={website}/>
            <UserAddress address={address}/>
            <Company company={company}/>

        </div>
    );
};

export {User};