export const success = values =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        message: "Form submit was successful."
      });
    }, 2000);
  });

export const exception = values =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = new Error();
      error.errors = {
        scientificName: ['Field "scientificName" should have value "bar"'],
        commonName: ['Field "commonName" should have value "foo"']
      };
      error.message = 'The given data was invalid.';
      error.statusCode = 422;
      reject(error);
    }, 2000);
  });
