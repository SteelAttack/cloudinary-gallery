import UploadButton from '../../components/gallery/UploadButton'
import cloudinary from 'cloudinary'
import { ImageGrid } from '@/components/ImageGrid'

export type SearchResult = {
  public_id: string
}

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(100)
    .execute()
    ) as { resources: SearchResult[] }

    console.log(results);
  return (
    <section>
      <div className="flex flex-col gap-8">
        <ImageGrid images={results.resources}/>
      </div>
    </section>
  )
}
