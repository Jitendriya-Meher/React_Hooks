import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {

    useEffect(() => {
        console.log("message from useeffects");
    },[]);

    useLayoutEffect(() => {
        console.log('message from uselayouteffects');
    },[]);

  return (
    <div>

        <h2>
            Test message
        </h2>

        {
            Array(4000).fill("").map((item,index) => (
                <li key={index}>
                    {
                        Math.pow(Math.random(),10)
                    }
                </li>
            ))
        }
            
    </div>
  )
}

export default UseLayoutEffect