import mapUpload from '../mapUpload'

const upload = {
  file: {
    type: 'images/jpeg',
    name: 'example.jpg',
    size: 9871298793
  },
  url: 'https://uploads.example.com/a0a40156b047a118d9a0a4dde5f57025'
}

it('maps an upload structure', () => {
  expect(mapUpload(upload)).toEqual({
    type: 'images/jpeg',
    name: 'example.jpg',
    size: 9871298793,
    url: 'https://uploads.example.com/a0a40156b047a118d9a0a4dde5f57025'
  })
})
