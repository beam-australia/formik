import onFormSubmit from '../onFormSubmit'

it('calls action with form values', () => {
  const action = values => new Promise((resolve, reject) => {
    expect(values).toEqual({ foo: 'bar' })
    resolve(values)
  })
  const actions = {
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn()
  }
  onFormSubmit(action)({ foo: 'bar' }, actions)
})

it('resolves with values on success', () => {
  const action = values => new Promise((resolve, reject) => {
    resolve(values)
  })
  const actions = {
    setStatus: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn()
  }
  return onFormSubmit(action)({ foo: 'bar' }, actions).then(response => {
    expect(response).toEqual({ foo: 'bar' })
  })
})
