export const success = (values) => new Promise((resolve) => {
  setTimeout(() => {
    console.log('Values: ', values)
    resolve(values)
  }, 2000)
})

export const exception = (values) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Values: ', values)
    const error = new Error('There was a fatal error')
    error.errors = {
      message: 'There was a fatal error',
      errors: {
        'foo': [
          'Field "foo" should have value "bar"',
          'Field "foo" should be of type "boolean"',
          'Field "foo" is kind of weird'
        ],
        'bar': [
          'Field "bar" should have value "foo"',
          'Field "bar" should be of type "string"',
          'Field "bar" is kind of cool'
        ]
      }
    }
    reject(error)
  }, 2000)
})
