import {CarContainer} from "./components/CarContainer/CarContainer";
import styles from './components/Car.module.css'
const App = () => {
    return (
        <div className={styles.wrapper}>
            <CarContainer/>
        </div>
    );
};

export {App};