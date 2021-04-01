// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Logic: sort the array, than add the first and the last 4 elements
function miniMaxSum(arr) {
    const sortedArr=arr.sort(function(a,b){return a-b});
    let minSum=0;
    let maxSum=0;
    for (let i=0; i<4; i++) {minSum+=sortedArr[i]};
    for (let i=sortedArr.length-1; i>sortedArr.length-5; i--) {maxSum+=sortedArr[i]};
    console.log(minSum, maxSum);
 }

 miniMaxSum([4,1,2,3,6,4,5,7]);