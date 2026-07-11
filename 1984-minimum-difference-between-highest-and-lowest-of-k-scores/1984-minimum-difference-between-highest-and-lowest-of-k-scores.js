/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b) => a - b)
    let differenceMin = Infinity
    for(let left  = 0; left <= nums.length - k; left++){
        let right = left + k - 1
        let difference = nums[right] - nums[left]
        differenceMin = Math.min(differenceMin, difference)
    }
    return differenceMin
};