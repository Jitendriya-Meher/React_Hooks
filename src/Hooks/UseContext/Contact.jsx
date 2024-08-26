import React, { useContext } from 'react'
import { Context } from './Context'

const Contact = () => {

    const {phone,name} = useContext(Context);

  return (
    <div>

        <h2>
            Contact
        </h2>
        <p>
            phone : {phone}
        </p>
        <p>
            Name : {name}
        </p>

    </div>
  )
}

export default Contact