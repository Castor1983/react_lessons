import Launch from './LaunchComponent/Launch.js';
import { useEffect, useState } from 'react';


export const Launches = () => {
    const [ launches, setLaunches ] = useState(null);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then((res) => res.json())
            .then((launches) => {
                setLaunches(launches);

            })
    },[]);




    return (
        <>
            {launches?.map((launch, id) => {
                if (launch.launch_year !=='2020') {
                    return (
                        <Launch
                            key={id}
                            launch={launch}
                        />);
                }
            })}
        </>);
};
