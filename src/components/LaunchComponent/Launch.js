import styles from "./LaunchComponent.module.scss";

const Launch = ({launch}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = launch;
    return (
        <div className={styles.container}>
            <h6>Mission name: {mission_name}</h6>
            <h6>Launch year: {launch_year}</h6>
            <img src={mission_patch_small} alt={mission_name}/>

        </div>
    )
}

export default Launch;