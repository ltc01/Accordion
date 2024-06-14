// // --------1122. Relative Sort Array-------------

// // var relativeSortArray = function(arr1, arr2) {
// //     const orderMap = new Map(arr2.map((item, index) => [item, index]));
// //     return arr1.sort((a, b) => 
// //       orderMap.has(a) && orderMap.has(b) ? orderMap.get(a) - orderMap.get(b) : 
// //       orderMap.has(a) ? -1 : 
// //       orderMap.has(b) ? 1 : 
// //       a - b
// //     );
// // };

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


// ------------------21. Merge Two Sorted Lists------------

// Definition for singly-linked list node.
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * Merges two sorted linked lists into a single sorted linked list.
 * @param {ListNode} list1 - The head of the first sorted linked list.
 * @param {ListNode} list2 - The head of the second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
function mergeTwoLists(list1, list2) {
  // Create a dummy node to start the merged list.
  const dummy = new ListNode(-1);
  let current = dummy;

  // While both lists have nodes, compare the values and add the smaller one.
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If we've reached the end of one list, append the other list.
  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  // Return the merged list, which starts after the dummy node.
  return dummy.next;
}

// Example usage:
// Let's create two sorted lists to test the function.

const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge the two lists.
const mergedList = mergeTwoLists(list1, list2);

// Function to print the merged list.
function printList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.val + " -> ");
    current = current.next;
  }
  console.log("null");
}

// Print the merged list.
printList(mergedList);  // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
