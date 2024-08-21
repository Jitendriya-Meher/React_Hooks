import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [ count , setCount] = useState(0);

    useEffect( () => {

        setTimeout(() => {
            setCount(count => count+1);
        }, 1000);
        
    } , [count]);

  return (
    <div className=' p-4 bg-gray-300 flex flex-col gap-3'>

        <div className="">

            <h1 className=' text-xl'>
                I,ve rendered {count} times! in every second.
            </h1>

        </div>

    </div>
  )
}

export default UseEffect