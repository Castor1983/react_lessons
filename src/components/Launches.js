import Launch from './LaunchComponent/Launch.js';
import {useEffect, useState} from 'react';

export const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((res) => res.json())
            .then((value) => {
                const filtered = value.filter(item =>  item.launch_year !== '2020');
                setLaunches(filtered);

            })
    }, []);

    return (
        <>
            {launches.map((launch, ) => {

                    return (
                        <Launch
                            key={launch.flight_number}
                            launch={launch}
                        />);

            })}
        </>);
};
