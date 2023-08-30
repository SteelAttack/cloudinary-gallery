'use client'
import { CldImage, CldUploadButton } from 'next-cloudinary'
import { useState } from 'react'

export type UploadResult = {
  info: {
    public_id: string
  }
  event: 'success'
}

export default function Home() {
  const [imageId, setImageId] = useState('wpvzdhitdkse1p6nklkr')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
    </main>
  )
}
