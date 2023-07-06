import styles from "./LaunchComponent.module.scss";

const Launch = (props) => {
    const { launch,} = props
    return (
        <div className={styles.container}>
            <h6>Mission name: {launch.mission_name}</h6>
            <h6>Launch year: {launch.launch_year}</h6>
            <img src ={launch.links.mission_patch_small} alt={launch.mission_name} </>

        </div>
    )
}

export default Launch;