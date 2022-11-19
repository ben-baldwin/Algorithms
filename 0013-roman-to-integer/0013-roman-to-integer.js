/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(string) {
    
    const numeral = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
//     creating variable to represent integer converted from a roman numeral
    let result = 0;
    
    for (i=0; i < string.length; i++){
        const cur = numeral[string[i]];
        const next = numeral[string[i+1]];
        
        if (cur < next){
            result += next - cur
            i++
        } else {
            result+= cur
        }
    }
    
    return result;
};

console.log(romanToInt('LI'))