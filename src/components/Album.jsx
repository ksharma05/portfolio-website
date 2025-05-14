import React from 'react'
import { useParams } from 'react-router';

const Album = () => {
    const {id} = useParams();
  return (
    <div className='text-8xl pt-16'>{id}</div>
  )
}

export default Album