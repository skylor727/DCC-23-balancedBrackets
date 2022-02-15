/*-----------------------------------------------------------------
Challenge: 23-balancedBrackets
Difficulty:  Intermediate
Prompt:
- Write a function called balancedBrackets that accepts a single string as argument.
- The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
- The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...
Examples:
balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:

const balancedBrackets = (str) => {
  const matches = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let firstBracket = str.charAt(0);
  let secondBracket = str.charAt(str.length - 1);
  for (let i in matches) {
    if (firstBracket === i && secondBracket === matches[i]) return true;
  }
  return false;
};
console.log(balancedBrackets("[({}[])]"));
console.log(balancedBrackets("[(])"));
