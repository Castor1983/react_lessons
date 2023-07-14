import {CreateCarForm} from "./components/CreateCarForm/CreateCarForm";

import styles from './components/Component.module.css'

import {CarsConteiner} from "./components/CarsConteiner/CarsConteiner";

const App = () => {

    return (
        <div className={styles.wrapper}>
            <CarsConteiner/>

        </div>
    );
};

export {App};