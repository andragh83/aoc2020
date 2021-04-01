// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. 
// Count how many candles are tallest.
// Example
// [1,2,4,2,3,4]
// The maximum height candles are 4 units high. There are 2 of them, so return 2.

function birthdayCakeCandles(candles) {
    //sort the array
    let sortedCandles = candles.sort(function(a,b){return a-b});
    //start with the highest candle
    let i = sortedCandles.length-1;
    //initialize a variable that will count how many tallest candles
    var tallest;
    //check if the array is not empty
    if (i>=0) {tallest = 1} else { return 'there are no candles' }
    //run a loop as long as the highest elements are equal
    while(sortedCandles[i]===sortedCandles[i-1]) {
        tallest++;
        i--;
    }
    return tallest;
}

console.log(birthdayCakeCandles([1,2,4,2,3,4]));