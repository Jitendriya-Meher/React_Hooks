import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {

    const [ value, setValue] = useState(0);
    // const [ count, setCount] = useState(0);

    const count = useRef(0);
    console.log("useref",count);

    useEffect(() => {
        // setCount( (prev) => (prev+1));
        // it will render infinite times

        count.current = count.current +1;
        // it will render only when any state is change
    });


    const inputEle = useRef();
    const [text, setText] = useState("");

    const btn = () => {
        console.log(inputEle);
        console.log(inputEle.current);
        inputEle.current.style.background = "green";
        setText(inputEle.current.value);
    }

  return (
    <div className='p-4 bg-gray-200 flex flex-col gap-3'>

        <div className=" flex flex-col gap-2">

            <div className=" flex gap-5 items-center justify-center font-medium">

                <button onClick={()=>{
                    setValue((prev) => (prev-1))
                }}
                className=' bg-red-500 p-2 rounded-md'>
                    -1
                </button>
                <h1>
                    {value}
                </h1>
                <button onClick={()=>{
                    setValue((prev) => (prev+1))
                }}
                className=' bg-blue-500 p-2 rounded-md'>
                    +1
                </button>

            </div>

            <h1>
                Render Count : {count.current}
            </h1>

        </div>

        <div className="">

            <input type="text" ref={inputEle}
            className=' p-1 rounded-md' />

            <button onClick={btn}
            className=' bg-blue-500 p-1 rounded-md ml-4'>
                Click Here
            </button>

            <h1 className=' text-xl'>
                input : {text}
            </h1>

        </div>

    </div>
  )
}

export default UseRef