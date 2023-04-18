'use client'

import Image from "next/image"
import { memo } from "react"

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = memo(({ src }) => {
  return (
    <Image 
      className="rounded-full"
      height='30'
      width='30'
      alt="Avatar"
      src={src || '/images/placeholder.jpg'}
    />
  )
})

export default Avatar