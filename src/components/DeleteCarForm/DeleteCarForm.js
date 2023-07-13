import React, {useRef} from 'react';
import styles from "../Component.module.css";

const DeleteCarForm = () => {
    const brendRef = useRef('');
    const priceRef = useRef('');
    const yearRef = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            body: JSON.stringify({
                "brand": brendRef.current.value,
                "price": priceRef.current.value,
                "year": yearRef.current.value,

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Create new car form</h1>
            <label>
                Car model:
                <br/>
                <input type="text" ref={brendRef}/>
            </label>
            <label>
                Price:
                <br/>
                <input type="text" ref={priceRef}/>
            </label>
            <label>
                Year:
                <br/>
                <input type="text" ref={yearRef}/>
            </label>


            <button type='submit'>Create New Car</button>
        </form>
    )
};

export {DeleteCarForm};