import React, {useRef} from 'react';

import styles from './AddNewUserPage.module.css'

const AddNewUserPage = () => {

    const nameRef = useRef('');
    const userNameRef = useRef('');
    const emailRef = useRef('');
    const streetRef = useRef('');
    const suiteRef = useRef('');
    const cityRef = useRef('');
    const zipcodeRef = useRef('');
    const latRef = useRef('');
    const lngRef = useRef('');
    const phoneRef = useRef('');
    const websiteRef = useRef('');
    const companyNameRef = useRef('');
    const catchPharseRef = useRef('');
    const bsRef = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: nameRef.current.value,
                userName: userNameRef.current.value,
                email: emailRef.current.value,
                address: {
                    street: streetRef.current.value,
                    suite: suiteRef.current.value,
                    city: cityRef.current.value,
                    zipcode: zipcodeRef.current.value,
                    geo: {lat: latRef.current.value, lng: lngRef.current.value}
                },
                phone: phoneRef.current.value,
                website: websiteRef.current.value,
                company: {
                    name: companyNameRef.current.value,
                    catchPharse: catchPharseRef.current.value,
                    bs: bsRef.current.value
                }

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return (
        <form className={styles.Userform} onSubmit={handleSubmit}>
            <h1>Registration form</h1>
            <label>
                Name:
                <br/>
                <input type="text" ref={nameRef}/>
            </label>
            <label>
                UserName:
                <br/>
                <input type="text" ref={userNameRef}/>
            </label>
            <label>
                Email:
                <br/>
                <input type="text" ref={emailRef}/>
            </label>
            <label>
                Address:
                <br/>
                street:
                <br/>
                <input type="text" ref={streetRef}/>
                <br/>
                suite:<br/>
                <input type="text" ref={suiteRef}/>
                <br/>
                city:<br/>
                <input type="text" ref={cityRef}/>
                <br/>
                zipcode:<br/>
                <input type="text" ref={zipcodeRef}/>

            </label>
            <label>
                Geo:
                <br/>
                lat:
                <input type="text" ref={latRef}/>
                lng:
                <input type="text" ref={lngRef}/>
            </label>
            <label>
                Phone:
                <br/>
                <input type="text" ref={phoneRef}/>
            </label><label>
            Website:
            <br/>
            <input type="text" ref={websiteRef}/>
        </label>
            <label>
                Company:
                <br/>
                name:
                <br/>
                <input type="text" ref={companyNameRef}/>
                <br/>
                CatchPharse:
                <br/>
                <input type="text" ref={catchPharseRef}/>
                <br/>
                bs:
                <br/>
                <input type="text" ref={bsRef}/>
            </label>

            <button type='submit'>Add New User</button>
        </form>
    )
}

export {AddNewUserPage};