'use client'

import React, { memo } from 'react'
import { PuffLoader } from 'react-spinners'

const Loader = memo(() => {
  return (
    <div className='flex flex-col justify-center items-center h-[70vh]'>
      <PuffLoader size={100} color='red' />
    </div>
  )
})

export default Loader