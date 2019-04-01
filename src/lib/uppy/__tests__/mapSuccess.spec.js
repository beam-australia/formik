import mapSuccess from '../mapSuccess'

const uppyResponse = [
  {
    "data": {
      "name": "pdf.pdf",
      "lastModified": 1553669345990,
      "lastModifiedDate": "Wed Mar 27 2019 17:49:05 GMT+1100 (Australian Eastern Daylight Time)",
      "webkitRelativePath": "",
      "size": 433994
    },
    "extension": "pdf",
    "id": "uppy-pdfpdf-application/pdf-433994-1553669345990",
    "isPaused": false,
    "isRemote": false,
    "meta": {
      "name": "pdf.pdf",
      "type": "application/pdf"
    },
    "name": "pdf.pdf",
    "progress": {
      "uploadStarted": 1554073580312,
      "uploadComplete": true,
      "percentage": 100,
      "bytesUploaded": 433994,
      "bytesTotal": 433994
    },
    "remote": "",
    "response": {
      "uploadURL": "https://uploads.beamaustralia.local/793787020a08fb7badc5d7be65a55b02"
    },
    "size": 433994,
    "source": "react:Dashboard",
    "tus": {
      "uploadUrl": "https://uploads.beamaustralia.local/793787020a08fb7badc5d7be65a55b02"
    },
    "type": "application/pdf",
    "uploadURL": "https://uploads.beamaustralia.local/793787020a08fb7badc5d7be65a55b02"
  },
  {
    /// 2nd entry is empty
  }
];

it('maps the first success object only', () => {
  expect(mapSuccess(uppyResponse)).toEqual({
    extension: 'pdf',
    type: 'application/pdf',
    name: 'pdf.pdf',
    size: 433994,
    url: 'https://uploads.beamaustralia.local/793787020a08fb7badc5d7be65a55b02',
  })
})
