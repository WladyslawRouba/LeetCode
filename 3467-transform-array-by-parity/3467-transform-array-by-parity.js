/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    const result = nums.map((num)=>{
        if(num % 2 === 0){
            return 0
        }else{
            return 1
        }
    }
    )
    return result.sort((a,b) => a-b)
    
};