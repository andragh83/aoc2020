
// Problem: Return the factorial of a given number

//iterative approach
function iterativeFactorial (nb) {

  if (nb<0) {
    return 'No negative numbers';    
  } else if (nb === 0) {
    console.log('Iterative factorial:')
    return 0;
  } 
  
  let factorial = nb;
  for (let i=nb-1; i>0; i--) {
    factorial *= i;    
  }
  console.log('Iterative factorial:')
  return factorial;
  
}

console.log(iterativeFactorial(5));

//recursive approach
function recursiveFactorial(nb) {

  if (nb<0) {
    return 'No negative numbers'; 
  } else if (nb === 0) {
    console.log('Iterative factorial:')
    return 0;
  } 

  if (nb === 2) {
    console.log('Recursive factorial: ')
    return nb;
  }

  return nb*recursiveFactorial(nb-1);
  
}
  
  console.log(recursiveFactorial(8));
  