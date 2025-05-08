import React from 'react'

const Panel = ({children}) => {

  return (
    <div className="panel h-screen w-screen bg-blue-500 border-0 border-blue-500 -mr-0.5">
        {children}
    </div>
  )
}

export default Panel