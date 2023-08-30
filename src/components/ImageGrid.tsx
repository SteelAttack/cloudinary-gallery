import { CloudinaryImage } from '@/app/gallery/CloudinaryImage'
import { SearchResult } from '@/app/gallery/page'

const MAX_COLUMNS = 5

export function ImageGrid({ images }: { images: SearchResult[] }) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex
    })
  }

  return (
    <div className="grid grid-cols-5 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3), getColumns(4)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map((result) => (
              <CloudinaryImage
                key={result.public_id}
                width="400"
                height="400"
                publicId={result.public_id}
                
              />
            ))}
          </div>
        )
      )}
    </div>
  )
}
