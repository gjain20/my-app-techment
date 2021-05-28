import React, {useCallback, useState, createContext} from 'react'

const Step3Context = createContext()
function Step3ContextProvider(props) {
  const [mustHaveKeyword, setMustHaveKeyword] = useState([])
  const [niceToHaveKeyword, setNiceToHaveKeyword] = useState([])
  const [educationPref, setEducationPref] = useState()

  const value = {
 
    mustHaveKeyword,
    niceToHaveKeyword,
    educationPref,
  
    setMustHaveKeyword,
    setNiceToHaveKeyword,
    setEducationPref,
  }

  return (
    <Step3Context.Provider value={value}>{props.children}</Step3Context.Provider>
  )
}

const Step3ContextConsumer = Step3Context.Consumer

export {Step3Context, Step3ContextProvider, Step3ContextConsumer}
export default Step3ContextProvider;
