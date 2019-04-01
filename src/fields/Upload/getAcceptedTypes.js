import get from 'lodash/get'

const types = {
  docs: {
    info: 'PDFs, Word docs and text files',
    mime: [
      '.txt',
      '.doc',
      '.docx',
      '.dot',
      '.dotx',
      '.docm',
      '.dotm',
      '.pdf'
    ],
  },
  images: {
    info: 'Most image types accepted',
    mime: [
      'images/*',
    ]
  }
}

export default function getAcceptedTypes(type = '') {
  return get(types, type, types.docs)
}
