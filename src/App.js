import {AddNewUserPage} from "./components/AddNewUserPage/AddNewUserPage";
import {AddNewCommentPage} from "./components/AddNewCommentPage/AddNewCommentPage";
import styles from './components/AddNewUserPage/AddNewUserPage.module.css'


const App = () => {

    return (
        <div className={styles.wrapper}>

          <AddNewUserPage/>
            <AddNewCommentPage/>
        </div>
    );
};

export {App};