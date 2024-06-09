// // -----------1672. Richest Customer Wealth --------------

// var maximumWealth = function(accounts) {
//     var richCustomer = 0;
//     for(let i=0;i<accounts.length;i++){
//         var cusWealth = 0;
//         for(let j=0;j<accounts[i].length;j++){
//             cusWealth += accounts[i][j]
//         }
//         richCustomer = Math.max(richCustomer, cusWealth)

//     }
//     console.log(richCustomer)
// };

// maximumWealth([[1, 2,3 ], [3, 2, 1]]);
// maximumWealth([[1,5],[7,3],[3,9],[1,3]])

// // ----------------412. Fizz Buzz------------------------

// var fizzBuzz = function(n) {
//     var answer = []
//     for(let i=1; i<=n; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             answer.push('FizzBuzz')
//         }else if (i % 3 == 0){
//             answer.push("Fizz")
//         }else if (i % 5 == 0){
//             answer.push("Buzz")
//         }else{
//             answer.push(i.toString())
//         }
//     }
//     console.log(answer)
// };

// fizzBuzz(3)
// fizzBuzz(5)
// fizzBuzz(15)

// // ------------1342. Number of Steps to Reduce a Number to Zero-----------

// var numberOfSteps = function(num) {
//     let steps = 0
//     while(num > 0){
//         if(num % 2 == 0){
//             num = num / 2
//         }else {
//             num = num - 1
//         }
//         steps++;
//     }
//     console.log(steps)
// };

// numberOfSteps(6);
// numberOfSteps(14);

// //-------------------876. Middle of The Linked List---------------

// var middleNode = function (head) {
//     let newHead = head;
//     let length = 0;
//     while (newHead) {
//         length++;
//         newHead = newHead.next;
//     }

//     let midpoint = Math.floor(length / 2) + 1;

//     while (midpoint > 1) {
//         head = head.next;
//         midpoint--;
//     }

//     console.log(head)

// };

// middleNode([1, 2, 3, 4, 5])
// middleNode([1, 2, 3, 4, 5, 6])