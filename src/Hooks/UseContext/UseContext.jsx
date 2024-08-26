import React from 'react'
import ContextProvider from './Context'
import Profile from './Profile'
import Footer from './Footer'

const UseContext = () => {

  return (

    <ContextProvider>

      <Profile></Profile>
      <Footer></Footer>


    </ContextProvider>

    

  )
}

export default UseContext