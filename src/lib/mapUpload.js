function toTusUpload(upload) {
  return {
    file: {
      type: upload.type,
      name: upload.name,
      size: upload.size
    },
    url: upload.url
  };
}

function fromTusUpload(upload) {
  return {
    type: upload.file.type,
    name: upload.file.name,
    size: upload.file.size,
    url: upload.url
  };
}

function fromTusToUrl(upload) {
  return upload.url;
}

export default {
  toTusUpload,
  fromTusUpload,
  fromTusToUrl
};
