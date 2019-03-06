import handleException from 'lib/handleException'
import transformErrors from 'lib/transformErrors'

jest.mock('lib/transformErrors')

it('sets correct message on 502 exception', () => {
  const response = { statusCode: 502 }
  const actions = {
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn()
  }
  handleException(response, actions)
  expect(actions.setStatus.mock.calls[0][0]).toEqual({
    error: 'We are currently doing some maintenece, please come back later.'
  })
})

it('sets message from response by default', () => {
  const response = { statusCode: 409, message: 'foo bar' }
  const actions = {
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn()
  }
  handleException(response, actions)
  expect(actions.setStatus.mock.calls[0][0]).toEqual({
    error: 'foo bar'
  })
})

it('sets allows message to be overridden', () => {
  const response = { statusCode: 409, message: 'foo bar' }
  const actions = {
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn()
  }
  handleException(response, actions, 'overridden foo bar')
  expect(actions.setStatus.mock.calls[0][0]).toEqual({
    error: 'overridden foo bar'
  })
})

it('sets transforms and sets errors', () => {
  transformErrors.mockReturnValue({ field_1: 'Missing value' });
  const response = { message: 'foo bar' }
  const actions = {
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn()
  }
  handleException(response, actions)
  expect(actions.setErrors.mock.calls[0][0]).toEqual({ field_1: 'Missing value' })
})

it('sets submitting to false', () => {
  const response = { message: 'foo bar' }
  const actions = {
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn()
  }
  handleException(response, actions)
  expect(actions.setSubmitting.mock.calls[0][0]).toBe(false)
})

it('sets returns undefined', () => {
  const response = { message: 'foo bar' }
  const actions = {
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn()
  }
  expect(handleException(response, actions)).toBe(undefined)
})
