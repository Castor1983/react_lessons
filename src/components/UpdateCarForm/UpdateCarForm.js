import React, {useRef} from 'react';
import styles from "../Component.module.css";

const UpdateCarForm = () => {
    const brendRef = useRef('');
    const priceRef = useRef('');
    const yearRef = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://owu.linkpc.net/carsAPI/v1/cars'
            )
            .then((response) => response.json())
            .then((json) => console.log(json));

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Get car list</h1>
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


            <button type='submit'>Get Car List</button>
        </form>
    )
};

export {UpdateCarForm};