export function getResponse(response) {
  const promise = new Promise((resolve, reject) => {
      if(response.status >= 200 && response.status < 400) {
        resolve(response.json());
      }
      else {
        reject(response)
      }
    });

  return promise;
}
