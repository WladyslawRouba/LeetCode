/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(arr) {
    const counter = new Map()
    for(let num of arr){
        if(counter.has(num)){
            const currentCount = counter.get(num)
            counter.set(num,currentCount + 1 )
        }else{
            counter.set(num, 1)
        }
    }
    let sum = 0
    for(let [num, count] of counter){
        if(count === 1){
            sum += num
        }

    }
    return sum
    
};