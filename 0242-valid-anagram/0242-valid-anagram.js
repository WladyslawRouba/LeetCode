/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//    return s.split('').sort().join('') === t.split('').sort().join('')
if(s.length !== t.length){
    return false
}
let letters = {}
for(let char of s){
    if(!letters[char]){
        letters[char] = 1
    }else{
       letters[char]++ 
    }
}
for(let char of t){
    if(!letters[char]){
        return false
    }

 letters[char]--

}
return true
};