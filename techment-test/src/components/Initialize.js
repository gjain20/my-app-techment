import React from 'react'
import CustomModalContextProvider from '../context/CustomModalContext'
import Step1ContextProvider from '../context/Step1Context'

function Initialize({children}) {
  return (
    <CustomModalContextProvider>
      <Step1ContextProvider>
        {children}
      </Step1ContextProvider>
    </CustomModalContextProvider>
  )
}

export default Initialize