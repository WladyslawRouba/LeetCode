/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = 0
    let count = 0
    for(let num of nums){
        if(count === 0 ){
            condidate = num
        }
        if(num === condidate ){
            count ++
        }else{
            count --

        }

    }
    return condidate
};