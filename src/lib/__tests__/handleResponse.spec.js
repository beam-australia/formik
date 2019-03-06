import handleResponse from 'lib/handleResponse'

it('sets submitting to false', () => {
  const response = {}
  const actions = {
    setSubmitting: jest.fn()
  }
  handleResponse(response, actions)
  expect(actions.setSubmitting.mock.calls[0][0]).toBe(false)
})

it('sets returns the response object', () => {
  const response = { foo: 'bar' }
  const actions = {
    setSubmitting: jest.fn()
  }
  expect(handleResponse(response, actions)).toEqual({ foo: 'bar' })
})
