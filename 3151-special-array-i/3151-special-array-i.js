/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let current = nums[i] % 2
        let previos = nums[i - 1] % 2
        if(current === previos){
            return false
        }
    }
    return true
};