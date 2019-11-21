/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 0) return true;
  let stack = [];
  for (let char of s){
    if ("({[".includes(char)){
      stack.push(char);
    } else if (char === ")" && stack.pop() !== "("){
      return false;
    } else if (char === "}" && stack.pop() !== "{"){
      return false;
    } else if (char === "]" && stack.pop() !== "["){
      return false;
    }
  }
  return stack.length === 0;
};