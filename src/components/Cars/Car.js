

import styles from './Cars.module.css'
import React, {Component} from 'react';

class Car extends Component {
    render() {
        const {id, brand, price, year} = this.props.car
        return (
            <div className={styles.Cars}>
                <h3> id: {id} </h3>
                <div> brand: {brand}</div>
                <div> price: {price}</div>
                <div> year: {year}</div>
            </div>
        );
    }
}

export {Car};