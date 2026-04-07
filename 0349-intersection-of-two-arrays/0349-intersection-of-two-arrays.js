/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const arr1 = new Set(nums1)
    const result = new Set()
    for(let item of nums2){
        if(arr1.has(item)){
            result.add(item)
        }
}
    return[...result]
};