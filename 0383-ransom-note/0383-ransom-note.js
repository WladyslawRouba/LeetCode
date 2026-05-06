/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const letters = {}
    for(let char of magazine){
    if(!letters[char]){
    letters[char] = 1
    }else{
    letters[char]++
   }
    }
   for(let char of ransomNote ){
   if(!letters[char]){
   return false
   }
   letters[char]--

   }

    
    return true
};