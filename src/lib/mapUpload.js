export default function mapUpload(upload) {
  return {
    type: upload.file.type,
    name: upload.file.name,
    size: upload.file.size,
    url: upload.url
  }
}
