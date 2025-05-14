import React from 'react'

const Panel = ({children}) => {

  return (
    <div className="panel h-screen w-screen -mr-0.5 bg-base-100">
        {children}
    </div>
  )
}

export default Panel