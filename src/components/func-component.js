import React, { useState } from 'react';

const FuncComponent = (props) => {
    const [count, setCount] = useState(0);

    console.log('render FuncComponent');
    console.log('this.props', props.title);
    console.log('this.testList', props.testList);

    return (
        <div>
            <p>FuncComponent</p>   
            <p>count: {count}</p>   
            <p>{props.title}</p>
            <button onClick={() => setCount(count + 1)}>CLick</button>  
        </div>
    );
};

export default FuncComponent;