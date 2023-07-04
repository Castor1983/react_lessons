import styles from "./SimpsonComponent.module.scss";

const SimpsonComponent = (props) => {
    const {name, surname, age, info, photo} = props
    return (
        <div className={styles.container}>
            <h2>Ім'я: {name}</h2>
            <h2>Прізвище: {surname}</h2>
            <h2>Вік: {age}</h2>
            <h2>Інформація: {info}</h2>
            <img alt={'Simpson img'} src={photo}/>

        </div>
    )
}

export default SimpsonComponent;