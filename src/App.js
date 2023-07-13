import {CreateCarForm} from "./components/CreateCarForm/CreateCarForm";
import {UpdateCarForm} from "./components/UpdateCarForm/UpdateCarForm";
import {DeleteCarForm} from "./components/DeleteCarForm/DeleteCarForm";
import styles from './components/Component.module.css'
const App = () => {

    return (
        <div className={styles.wrapper}>

            <CreateCarForm/>
            <UpdateCarForm/>
            <DeleteCarForm/>
        </div>
    );
};

export {App};