import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { increment, decrement } from './actions/index';

const Home = () => {

    const counter = useSelector(state => state.counter );
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div>Counter {counter}</div>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </React.Fragment>
    )
}

export default Home;