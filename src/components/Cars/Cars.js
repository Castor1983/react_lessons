
import {Car} from "./Car";
import styles from './Cars.module.css'
import React, {Component} from 'react';
import {carsService} from "../../services/carsService";
class Cars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        }
    }
    componentDidMount() {
        carsService.getAll().then(({data}) => this.setState({cars: data}))
    }

    render() {

        return (

            <div className={styles.cars}>
                {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        );
    }
}




export {Cars};