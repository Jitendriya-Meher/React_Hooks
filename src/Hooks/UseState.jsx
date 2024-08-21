import React, { useState } from 'react'

const UseState = () => {

    const [ color, setColor ] = useState("Red");

    const changeColor = () => {
        setColor("Blue");
    }


    const [ car, setCar] = useState({
        brand:"Ferrari",
        model:"Roma",
        year:"2023",
        color:"Red",
    });

    const changeCar = () => {
        setCar( (prev) => {
            return { ...prev, color:"Blue" , year:"2024"};
        } );
    }


    const [ count , setCount] = useState(0);

    const inc1 = () => {
        setCount( count+1);
    }

    const inc4 = () => {
        // setCount( count+1);
        // setCount( count+1);
        // setCount( count+1);
        // setCount( count+1);
        // it will only increase by 1

        setCount( (prev) => (prev+1));
        setCount( (prev) => (prev+1));
        setCount( (prev) => (prev+1));
        setCount( (prev) => (prev+1));
    }

    const dec1 = () => {
        setCount( count-1);
    }

    const reset = () => {
        setCount( 0);
    }

  return (
    <div className=' bg-gray-400 p-2 flex flex-col gap-4'>

        <div className=" flex gap-3 items-center">
            <h1>
                My favourite color is {color} !
            </h1>
            <button onClick={changeColor}
            className=' p-1 text-white bg-blue-500'
            >
                Blue
            </button>
        </div>

        <hr />

        <div className=" flex flex-col gap-2">

            <h1>
                My {car.brand}
            </h1>
            <h2>
                It is a {car.color} {car.model} from {car.year}
            </h2>

            <button onClick={changeCar}
            className=' p-1 text-white bg-blue-500'>
                Change car color to Blue
            </button>
        </div>

        <hr />

        <div className=" flex flex-col gap-2">

            <h1>
                Count : {count}
            </h1>

            <div className=" flex gap-2">

                <button onClick={inc1}
                className=' p-1 text-white bg-blue-500'>
                    Increase by 1
                </button>

                <button onClick={inc4}
                className=' p-1 text-white bg-blue-500'>
                    Increase by 4
                </button>

                <button onClick={dec1}
                className=' p-1 text-white bg-red-500'>
                    Decrease by 1
                </button>

                <button onClick={reset}
                className=' p-1 text-white bg-green-500'>
                    Reset to 0
                </button>

            </div>

        </div>
        
    </div>
  )
}

export default UseState