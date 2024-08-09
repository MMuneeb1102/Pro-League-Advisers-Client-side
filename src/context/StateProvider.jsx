import React, { useState } from 'react'
import stateContext from './StateContext'

const StateProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  return (
    <stateContext.Provider value={{loading, setLoading}}>
      {children}
    </stateContext.Provider>
  )
}

export default StateProvider