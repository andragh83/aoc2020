// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where 
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output
// 3

//logic: 
// sort array
// count how many of one color 
// than add to the result rounded color divided by 2

function sockMerchant(n, ar) {
    let nbOfPairs=0;
    let color=1;
    const filteredAr = ar.sort(function (a,b) {return a-b});
    filteredAr.forEach((element, i) => {        
        if (i<n-1 && element === filteredAr[i+1]) {
            color++;
        } else { nbOfPairs += Math.floor(color/2); color=1};
    });
    return nbOfPairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))