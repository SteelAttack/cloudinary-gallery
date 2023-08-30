'use client'

import { CldImage } from 'next-cloudinary'

export function CloudinaryImage({ publicId, ...props }: { publicId: string }) {
  return <CldImage loading="lazy" src={publicId} alt="Gallery Images" {...props}  className='border-4 border-amber-100 rounded-lg hover:opacity-80 transition-opacity z-0 duration-300'/>
}
