// Input consists of a single integer n

// Constraints: 1 <= n <= 100

// Note: Factorials of n=30 can't be stored even in a 64-bit long long variable. 
// Big integers must be used for such calculations. 
// Languages like Java, Python, Ruby etc. can handle big integers, but we need to write additional code in C/C++ to handle huge values.

// Output Format: Factorial of n

// Testcase:

// Print the factorial of 25.

// Sample Input: 25

// Sample Output: 15511210043330985984000000

// Logic: normaly I would use recursion to solve this but since the output must
// look in a certain way, I used the iterative method with the BigInt method.
// Then I turned the result into a string in order to eliminate the letter ends from the BigInt

function extraLongFactorials(n) {
    let factorial = BigInt(1);
    for (let i=n; i>=2; i--) {
        factorial*=BigInt(i);
    }
    let stringResult = factorial.toString();
    let finalresult='';
    for (let j=0; j<stringResult.length; j++) {
        if (!isNaN(stringResult[j])) {
            finalresult+=stringResult[j];
        }
    }
    console.log(finalresult);
}

extraLongFactorials(25);