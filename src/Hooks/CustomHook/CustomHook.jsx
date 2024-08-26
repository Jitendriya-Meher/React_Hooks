import React, { useEffect, useState } from 'react'
import useLocalStorage from './Hooks/useLocalStorage';

const CustomHook = () => {

    const [name,setName] = useLocalStorage("username","");
    const [id,setId] = useLocalStorage("id","");

    return (
    <div className=' bg-gray-600 text-xl p-6 flex flex-col gap-4'>

        <div className="">
            <input type="text" placeholder='Enter your name'
            onChange={(e) => {
                setName(e.target.value);
            }}
            value={name} />

            <h1>
                hii , {name}
            </h1>
        </div>

        <div className="">
            <input type="text" placeholder='Enter your id'
            onChange={(e) => {
                setId(e.target.value);
            }}
            value={id} />

            <h1>
                hii , {id}
            </h1>
        </div>

    </div>
  )
}

export default CustomHook