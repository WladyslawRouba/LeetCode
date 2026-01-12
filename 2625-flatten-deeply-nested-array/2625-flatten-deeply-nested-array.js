/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = []
    const stack = []
    for(let i = arr.length - 1; i >= 0; i--){
        stack.push({ value: arr[i], depth: 0 })
    }
         while (stack.length > 0) {                         
    const { value, depth } = stack.pop()            

    if (Array.isArray(value) && depth < n) {        
      for (let i = value.length - 1; i >= 0; i--) {  
        stack.push({                              
          value: value[i],                          
          depth: depth + 1                         
        })
      }
    } else {
      result.push(value)                          
    }
  }

  return result    
    
};