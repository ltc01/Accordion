// //--------1122. Relative Sort Array-------------

// var relativeSortArray = function(arr1, arr2) {
//     const orderMap = new Map(arr2.map((item, index) => [item, index]));
//     return arr1.sort((a, b) => 
//       orderMap.has(a) && orderMap.has(b) ? orderMap.get(a) - orderMap.get(b) : 
//       orderMap.has(a) ? -1 : 
//       orderMap.has(b) ? 1 : 
//       a - b
//     );
// };

// var relativeSortArray = function(arr1, arr2){
//   const orderMap = new Map(arr2.map((item, index)=>[item, index]));
//   console.log(orderMap)
//   return arr1.sort((a,b)=> 
//   orderMap.has(a) && orderMap.has(b) ? orderMap.get(a) - orderMap.get(b) :
//   orderMap.has(a) ? -1:
//   orderMap.has(b) ? 1 :
//   a - b
//   )
// }
// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))

// // -------125. Valid Palindrome---------------------

// var isPalindrome = function(s) {
//   // Convert string to lowercase
// let cleanedString = s.toLowerCase();

// // Remove all non-alphanumeric characters
// cleanedString = cleanedString.replace(/[^a-z0-9]/g, '');

// // Check if the cleaned string is a palindrome
// let reversedString = cleanedString.split('').reverse().join('');
// return cleanedString === reversedString;
// };

// //-------58. Length of Last Word---------

// function lengthOfLastWord(s) {
//   // Trim any trailing spaces from the string
//   s = s.trim();

//   // Split the string by spaces
//   const words = s.split(' ');

//   // Get the last word from the array
//   const lastWord = words[words.length - 1];

//   // Return the length of the last word
//   return lastWord.length;
// }

// // Example usage
// console.log(lengthOfLastWord("Hello World")); // 


// // ------------------21. Merge Two Sorted Lists------------

// // Definition for singly-linked list node.
// function ListNode(val, next = null) {
//   this.val = val;
//   this.next = next;
// }

// /**
//  * Merges two sorted linked lists into a single sorted linked list.
//  * @param {ListNode} list1 - The head of the first sorted linked list.
//  * @param {ListNode} list2 - The head of the second sorted linked list.
//  * @return {ListNode} - The head of the merged sorted linked list.
//  */
// function mergeTwoLists(list1, list2) {
//   // Create a dummy node to start the merged list.
//   const dummy = new ListNode(-1);
//   let current = dummy;

//   // While both lists have nodes, compare the values and add the smaller one.
//   while (list1 !== null && list2 !== null) {
//     if (list1.val < list2.val) {
//       current.next = list1;
//       list1 = list1.next;
//     } else {
//       current.next = list2;
//       list2 = list2.next;
//     }
//     current = current.next;
//   }

//   // If we've reached the end of one list, append the other list.
//   if (list1 !== null) {
//     current.next = list1;
//   } else if (list2 !== null) {
//     current.next = list2;
//   }

//   // Return the merged list, which starts after the dummy node.
//   return dummy.next;
// }

// // Example usage:
// // Let's create two sorted lists to test the function.

// const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
// const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// // Merge the two lists.
// const mergedList = mergeTwoLists(list1, list2);

// // Function to print the merged list.
// function printList(head) {
//   let current = head;
//   while (current !== null) {
//     process.stdout.write(current.val + " -> ");
//     current = current.next;
//   }
//   console.log("null");
// }

// // Print the merged list.
// printList(mergedList);  // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null




// var minIncrementForUnique = function(nums) {
//     var min = 0
//     nums.sort()

//     for(let i=1; i<nums.length; i++){
//       if(nums[i] <= nums[i-1]){
//         var increment = nums[i-1]+1 -nums[i]
//         min += increment
//       }
//       nums[i] = nums[i-1]+1
//     }
//     console.log(min)
// };

// minIncrementForUnique([3,2,1,2,1,7])

// // ------3. Longest Substring Without Repeating Characters---

// var lengthOfLongestSubstring = function(s) {
//   let charSet = new Set();
//   let start = 0;
//   let max = 0;

//   for(let i = 0; i<s.length; i++){
//       while(charSet.has(s[i])){
//           charSet.delete(s[start]);
//           start++;
//       }
//       charSet.add(s[i])
//       max = Math.max(max, i-start+1);
//   }
//   return max;
// };

// //-------------14. Longest Common Prefix--------------


// var longestCommonPrefix = function (strs) {
//     if (strs.length === 0) return "";
//     if (strs.length === 1) return strs[0];

//     var first = strs[0];

//     for (let j = 1; j < strs.length; j++) {
//         var i = 0;
//         while (i < first.length && i < strs[j].length && first[i] == strs[j][i]) {
//             i++;

//         }
//         first = first.slice(0, i)
//         if(first == '') {
//             console.log("")}
//     }
//     console.log(first)

// };

// longestCommonPrefix(["flower","flow","flight"]);
// longestCommonPrefix(["dog","racecar","car"])
// longestCommonPrefix(["aaa", "aa", "b"]);

// //-------20. Valid Parentheses---------------------

// var isValid = function(s) {

//     var stack = []
//     var pairs = {
//         '(' : ')',
//         '{' : '}',
//         '[' : ']',
//     }

//     for (let i of s){
//         if(pairs[i]){
//             stack.push(i);
//         }else{
//             if(stack.length === 0) console.log(false);

//             let item = stack.pop();

//             if(pairs[item] !== i) console.log(false);

//         }

//     }
//     console.log( stack.length === 0)
// };

// isValid("()");
// isValid("()[]{}");

// // -------------26. Remove Duplicates from Sorted Array-----------

// var removeDuplicates = function(nums) {
//     if (nums.length === 0 ) return 0;
//     let j = 1;

//     for (let i= 1; i<nums.length; i++){
//         if(nums[i] !== nums[i-1]){
//             console.log(nums[i], nums[i-1])
//             nums[j] = nums[i];
//             j++;
//         }
//     }
//     console.log(j, nums.slice(0,j))
// };

// removeDuplicates([10,0,1,1,1,2,2,3,3,4])

// // ------------27. Remove Element--------------

// var removeElement = function(nums, val) {
//     var j = 0;

//     for(let i=0; i<nums.length; i++){
//         if(nums[i] !== val){
//             nums[j] = nums[i]
//             j++;
//         }
//     }
//     console.log(j, nums.slice(0,j))
// };

// removeElement([3,2,2,3],3)
// removeElement([0,1,2,2,3,0,4,2], 2)



// // -----------28. Find the Index of the First Occurrence in a String-----

// var strStr = function(haystack, needle) {
//     if(needle== '') {
//      console.log(0)   
//     }

//     var n = haystack.length
//     var m = needle.length

//     for(let i=0; i<n-m; i++){
//         let j;
//         for(j=0;j<m;j++){
//             if(haystack[i+j] !== needle[j]){
//                 break;
//             }
//         }
//         if(j===m){
//             console.log(i);
//         }
//     }
//     console.log(-1);
// };

// strStr("sadbutsad","sad")


// //-----------------35. Search Insert Position------------

// var searchInsert = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//             console.log(i);
//             break;
//         }
//     }
//     console.log(nums.length)
// };

// searchInsert([1, 3, 5, 6], 2)

// //------------66. Plus One----------------

// var plusOne = function(digits) {
//     for(let i=digits.length-1; i>=0; i--){
//         digits[i]++;
//         if(digits[i] < 10){
//             console.log(digits)
//         }
//         digits[i]=0
//     }
//     digits.unshift(1)
//     console.log(digits)
// };

// plusOne([1,2,3])
// plusOne([4,3,2,1])
// plusOne([9])