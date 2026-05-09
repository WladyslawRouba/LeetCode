/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ')
    if(pattern.length !== words.length){
        return false
    }
      let mapPW = Object.create(null);
    let mapWP = Object.create(null);
    for(let i = 0 ; i < pattern.length; i++){
        const char = pattern[i]
        const word = words[i]
        if(mapPW[char] && mapPW[char] !== word){
            return false
        }
        if(mapWP[word] && mapWP[word] !== char){
            return false
        }
        mapPW[char] = word
        mapWP[word] = char
        

    }
    return true
};