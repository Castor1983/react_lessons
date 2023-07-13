import {CreateCarForm} from "./components/CreateCarForm/CreateCarForm";

import styles from './components/CreateCarForm/Component.module.css'
import {CarsConteiner} from "./components/CarsConteiner/CarsConteiner";
const App = () => {

    return (
        <div className={styles.wrapper}>
            <CarsConteiner/>
            <CreateCarForm/>
        </div>
    );
};

export {App};