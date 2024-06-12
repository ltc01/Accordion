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