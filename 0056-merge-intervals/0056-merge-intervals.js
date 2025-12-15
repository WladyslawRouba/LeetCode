/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];
    intervals.sort((a,b) => a[0] - b[0]);

    const result = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        const currentStart = intervals[i][0];
        const currentEnd = intervals[i][1];
        if(currentStart <= end ){
            end = Math.max(end, currentEnd)
        } else{
            result.push([start, end])
            start = currentStart;
            end = currentEnd;
        }
    }
      result.push([start, end])
      return result


};