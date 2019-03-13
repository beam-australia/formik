import transformErrors from '../transformErrors'

it('handles empty errors', () => {
  const response = {}
  expect(transformErrors(response)).toEqual({})
})

it('handles transforms errors into formik', () => {
  const response = {
    errors: {
      email: [
        'Invalid email address',
        'Email is required',
        'Hotmail...?'
      ],
      name: [
        'Name is required',
        'Field is min 10 chars'
      ],
      address: [
        'Address is required'
      ]
    }
  }
  expect(transformErrors(response)).toEqual({
    email: 'Invalid email address, Email is required, Hotmail...?',
    name: 'Name is required, Field is min 10 chars',
    address: 'Address is required'
  })
})
