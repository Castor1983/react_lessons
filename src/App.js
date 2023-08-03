import {useArray} from "./hooks/useArray/useArray";
import {useState} from "react";

const App = () => {
    const names = useArray([]);
    const [newName, setNewName] = useState("");

    // "Add" button clicked
    const handleSubmit = e => {
        e.preventDefault();
        names.add(newName);
        setNewName("");
    };

    const handleInputChange = e => setNewName(e.target.value);

    return (
        <>
            <h1>Names List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newName} onChange={handleInputChange}/>
                <button>Add</button>
            </form>
            {names.isEmpty() ? (
                <p>No names to display</p>
            ) : (
                <div>
                    {names.value.map((name, id) => (
                        <div key={id}>
                            <button onClick={() => names.remove(id)}>
                                delete
                            </button>
                            {name}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export {App};