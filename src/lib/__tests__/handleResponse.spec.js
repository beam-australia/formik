import handleResponse from '../handleResponse'

it('sets submitting to false', () => {
  const response = {}
  const actions = {
    setStatus: jest.fn(),
    setSubmitting: jest.fn()
  }
  handleResponse(response, actions)
  expect(actions.setSubmitting.mock.calls[0][0]).toBe(false)
})

it('sets returns the response object', () => {
  const response = { foo: 'bar' }
  const actions = {
    setStatus: jest.fn(),
    setSubmitting: jest.fn()
  }
  expect(handleResponse(response, actions)).toEqual({ foo: 'bar' })
})

it('sets message from response by default', () => {
  const response = { message: 'foo bar' }
  const actions = {
    setStatus: jest.fn(),
    setSubmitting: jest.fn()
  }
  handleResponse(response, actions)
  expect(actions.setStatus.mock.calls[0][0]).toEqual({
    success: true,
    message: 'foo bar'
  })
})

it('sets allows message to be overridden', () => {
  const response = { message: 'foo bar' }
  const actions = {
    setStatus: jest.fn(),
    setSubmitting: jest.fn()
  }
  handleResponse(response, actions, 'overridden foo bar')
  expect(actions.setStatus.mock.calls[0][0]).toEqual({
    success: true,
    message: 'overridden foo bar'
  })
})
