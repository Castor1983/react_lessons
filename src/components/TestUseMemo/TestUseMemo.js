import React, {memo, useCallback, useMemo, useState,} from 'react';

const TestUseMemo = ({data, changeNum}) => {
    const [todos, setTodos] = useState([]);
    const addTodo = useCallback(() => setTodos([...todos, "Todo"]), [todos])

    const expensiveFunc = (num)=> {

        for (let i = 0; i < 1000000000; i++) {
             num +=1;

        }
        return num
    }
    const calculation = useMemo(()=>expensiveFunc(data),[data])
    //const calculation = expensiveFunc(data)

    console.log('TestUseMemo render')
    return (
        <div>
            <button onClick={()=>changeNum('increment')}>Plus</button>
            <button onClick={()=>changeNum('decrement')}>Minus</button>
            <p>Number: {data}</p>
            <p>Calculation: {calculation}</p>
            {todos.map((todo, idx) => <p key={idx}>{todo}</p>)}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

export default  memo(TestUseMemo);