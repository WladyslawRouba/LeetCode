/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    functions.forEach((fn, index) => {
      fn()
        .then((value) => {
          results[index] = value;
          count++;

          if (count === functions.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};