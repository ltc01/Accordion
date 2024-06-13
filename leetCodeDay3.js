// --------1122. Relative Sort Array-------------

// var relativeSortArray = function(arr1, arr2) {
//     const orderMap = new Map(arr2.map((item, index) => [item, index]));
//     return arr1.sort((a, b) => 
//       orderMap.has(a) && orderMap.has(b) ? orderMap.get(a) - orderMap.get(b) : 
//       orderMap.has(a) ? -1 : 
//       orderMap.has(b) ? 1 : 
//       a - b
//     );
// };

var relativeSortArray = function(arr1, arr2){
  const orderMap = new Map(arr2.map((item, index)=>[item, index]));
  console.log(orderMap)
  return arr1.sort((a,b)=> 
  orderMap.has(a) && orderMap.has(b) ? orderMap.get(a) - orderMap.get(b) :
  orderMap.has(a) ? -1:
  orderMap.has(b) ? 1 :
  a - b
  )
}
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))

// -------125. Valid Palindrome---------------------

var isPalindrome = function(s) {
  // Convert string to lowercase
let cleanedString = s.toLowerCase();

// Remove all non-alphanumeric characters
cleanedString = cleanedString.replace(/[^a-z0-9]/g, '');

// Check if the cleaned string is a palindrome
let reversedString = cleanedString.split('').reverse().join('');
return cleanedString === reversedString;
};

//-------58. Length of Last Word---------

function lengthOfLastWord(s) {
  // Trim any trailing spaces from the string
  s = s.trim();
  
  // Split the string by spaces
  const words = s.split(' ');
  
  // Get the last word from the array
  const lastWord = words[words.length - 1];
  
  // Return the length of the last word
  return lastWord.length;
}

// Example usage
console.log(lengthOfLastWord("Hello World")); // 5