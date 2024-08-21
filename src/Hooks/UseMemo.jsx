import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [ number, setNumber] = useState(0);
    const [ counter, setCounter ] = useState(0);

    function cubeNum( num ){
        console.log("calculation done!");
        return Math.pow(num,3);
    }

    const result = useMemo( ()=>{
        return cubeNum(number)
    },[number]);

  return (
    <div className=' p-4 bg-gray-300 flex flex-col gap-3'>
 
        <div className="">

            <input type="number" 
            className=' p-1'
            onChange={(e) =>{
                setNumber(e.target.value); 
            }}
            value={number} />

            <h1 className=' text-xl'>
                Cube of the number : {result}
            </h1>
           
        </div>

        <div className="">
            <button onClick={()=>{
                setCounter(counter+1);
            }}>
                counter++
            </button>
            <h1>
                Counter : {counter}
            </h1>
        </div>

    </div>
  )
}

export default UseMemo