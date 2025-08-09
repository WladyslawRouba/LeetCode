/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = {};
    for(let i = 0; i < nums.length; i++){
        const current = nums[i];
        const difference = target - current;
        if(difference in numMap) {
        return [numMap[difference], i]
    }
    numMap[current] = i;
}
};