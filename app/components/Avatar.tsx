'use client'

import Image from "next/image"
import { memo } from "react"

const Avatar = memo(() => {
  return (
    <Image 
      className="rounded-full"
      height='30'
      width='30'
      alt="Avatar"
      src='/images/placeholder.jpg'
    />
  )
})

export default Avatar