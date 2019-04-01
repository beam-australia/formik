export default function mapSuccess(success) {
  const [upload] = success;
  return {
    extension: upload.extension,
    type: upload.type,
    name: upload.name,
    size: upload.size,
    url: upload.uploadURL,
  }
}
