import React, { useCallback, useState } from 'react'
import Header from './Header';

const UseCallback = () => {

    const [ count, setCount] = useState(0);

    const newFn = useCallback((count)=>{
        console.log("newFn",count);
    },[count]);

  return (
    <div className=' p-4 bg-gray-600 flex flex-col gap-3'>
 
        <div className="">

            <Header newFn={newFn}></Header>

            <h1>
                Count : {count}
            </h1>

            <button onClick={()=>{
                setCount((prev) => (prev+1))
            }}>
                Click Here
            </button>

        </div>

    </div>
  )
}

export default UseCallback