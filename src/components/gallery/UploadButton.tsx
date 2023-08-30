'use client'
import { CldUploadButton } from 'next-cloudinary'
import { UploadResult } from '../../app/page'
import { Button } from '@/components/ui/button'

import { useRouter } from 'next/navigation'
import { UploadIcon } from '@/components/icons/Upload'

export default function UploadButton() {
  const router = useRouter()

  return (
    <Button asChild>
      <div className="flex gap-2">
        <CldUploadButton
          onUpload={() => {
            setTimeout(() => {
              router.refresh()
            }, 2000)
          }}
          uploadPreset="peii6ddf"
          className='flex items-center gap-2'
        >
          <UploadIcon /> Upload
        </CldUploadButton>
      </div>
    </Button>
  )
}
