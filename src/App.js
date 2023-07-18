import {AddNewUserForm} from "./components/AddNewUserForm/AddNewUserForm";
import {AddNewCommentForm} from "./components/AddNewCommentForm/AddNewCommentForm";
import styles from './components/AddNewUserForm/AddNewUserForm.module.css'


const App = () => {

    return (
        <div className={styles.wrapper}>

          <AddNewUserForm/>
            <AddNewCommentForm/>
        </div>
    );
};

export {App};