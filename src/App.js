import {useToggle} from "./hooks/useToggle/useToggle";

const App = () => {
    const [isvisible, setIsVisible] = useToggle(false);

    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <button onClick={setIsVisible} style={{background: 'red', width: '200px', height: '100px'}}>Не натискай!</button>
            <div style={{width: '100vw', height: '100vh'}}>
                {isvisible && <h1> Спрацювали Хаймерси. Все, рашкі більше нема!</h1>}
            </div>


        </div>
    );
};

export {App};