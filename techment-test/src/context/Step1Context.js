import React, {useCallback, useState, createContext} from 'react'

const Step1Context = createContext()
function Step1ContextProvider(props) {
  const [id, setId] = useState()
  const [name, setName] = useState()  
  const [title, setTitle] = useState()
  
  const value = {
    id,
    name,
    title,

    setId,
    setName,
    setTitle
  }

  return (
    <Step1Context.Provider value={value}>{props.children}</Step1Context.Provider>
  )
}

const Step1ContextConsumer = Step1Context.Consumer

export {Step1Context, Step1ContextProvider, Step1ContextConsumer}
export default Step1ContextProvider;
