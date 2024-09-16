import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCount} from "../redux/slice/counterSlice.js";



const Counter = () => {

    const {count} = useSelector((store) => store.counterReducer);

    const dispatch = useDispatch()

    return (
        <div className='vh-100 d-grid place-items-center'>
            <div className='d-flex gap-3 justify-content-center align-items-center'>
                <button onClick={()=> {count>0 && dispatch(decrement())} } className='btn btn-danger'>Azalt</button>
                <span className="px-3  fs-1">{count}</span>
                <button onClick={()=> dispatch(increment())} className='btn btn-info'>Artir</button>
                <button onClick={()=> dispatch(setCount(0))} className='btn btn-warning'>Sifirla</button>
            </div>
        </div>
    );
};

export default Counter;
