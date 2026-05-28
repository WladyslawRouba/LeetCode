/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
 return new Promise((resolve, reject)=>{
    let result = []
    let count = 0

    functions.forEach((fn, index)=>{
        fn()
        .then((value)=>{
            result[index] = value
            count++

            if(count === functions.length ){
                resolve(result)
            }

        })
        .catch(reject)

 })

    

 })
};