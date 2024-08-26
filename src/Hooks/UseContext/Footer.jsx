import React, { useContext } from 'react'
import { Context } from './Context'

const Footer = () => {

    const {phone} = useContext(Context)

  return (
    <div>
        <h2>
            Footer
        </h2>
        <p>
            phone : {phone}
        </p>
    </div>
  )
}

export default Footer