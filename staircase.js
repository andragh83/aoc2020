// This is a staircase of size :
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.
// Function Description

// Input Format
// A single integer, , denoting the size of the staircase.

// Constraints

// Output Format
// Print a staircase of size  using # symbols and spaces.
// Note: The last line must have  spaces in it.
// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n.

function staircase(n) {
    //each row will contain a number of spaces and a number of #
    //initialize a string variable that stores each row to be printed
    let row='';
    //initialize a variable that stores the number of spaces in the row
    let spaces=n-1;
    //initialize a variable that stores the number of # in the row
    let bricks=0;
    //run a loop that prints each row of the stairs
    //with each row, the number of spaces decreases and the number of # increases
    //the loop will run until there are no more spaces
    while (spaces>=0) {
        for (let i=0; i<spaces; i++){
            row+=' ';
        }
        for (let j=0; j<=bricks; j++) {
            row+='#'
        }
        console.log(row);
        row='';
        spaces--;
        bricks++;
    }
}

staircase(6);