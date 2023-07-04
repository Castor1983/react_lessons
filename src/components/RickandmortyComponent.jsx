import styles from "./SimpsonComponent.module.scss";

const RickandmortyComponent = (props) => {
    const {id, name, status, species, gender, photo} = props
    return (
        <div className={styles.container}>
            <h2>Ідентифікатор: {id}</h2>
            <h2>Ім'я: {name}</h2>
            <h2>Статус: {status}</h2>
            <h2>Різновид: {species}</h2>
            <h2>Стать: {gender}</h2>
            <img alt={'Rickandmorty img'} src={photo}/>
        </div>
    )
}

export default RickandmortyComponent;