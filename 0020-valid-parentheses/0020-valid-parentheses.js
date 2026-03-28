/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        ']': '[',
        '}' : '{',
        ')' : '('
    }
    for (let char of s){
        if(char === '[' || char === '{' || char === '('){
            stack.push(char)
        }
        if(char === ']' || char === '}' || char === ')'){
            const last = stack.pop()
            if(last !== map[char]){
                return false
            }


        }
    }

return stack.length === 0
};