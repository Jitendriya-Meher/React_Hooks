import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialState = {
        count : 0
    }

    const reducer = ( state, action ) => {

        switch ( action.type ) {
            case "inc":
                return {
                    count : state.count + 1
                }
            case "dec":
                return{
                    count : state.count - 1
                }
            case "input":{
                return {
                    count : action.payload
                }
            }
            default:
                return state
        }

    }

    const [state , dispatch] = useReducer( reducer, initialState);

  return (
    <div className=' bg-gray-400 flex gap-6 p-6'>

    <button className=' bg-red-500 p-1 rounded-md'
    onClick={() => {
        dispatch({
            type : "dec"
        })
    }}>
        decrease
    </button>

    <h1 className=' text-2xl font-semibold'>
        {state.count}
    </h1>

    <button
    onClick={() => {
        dispatch({
            type : "inc"
        })
    }}
    className=' bg-blue-500 p-1 rounded-md'
    >
        increase
    </button>

    <br />

    <input type="number"
    value={state.count}
    onChange={(e) => {
        dispatch({
            type : "input",
            payload : Number(e.target.value)
        })
    }}
    className=' px-1' />

    </div>
  )
}

export default UseReducer