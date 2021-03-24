//Problem: Return the number from the Fibonacci sequence of a given index

//iterative approach
function iterativeFibonacci (nb) {
  let answer = [0,1];
  for (let i=2; i<=nb; i++) {
    answer.push(answer[i-2]+answer[i-1]);
  }
  console.log('Fibonacci sequence to index ', nb, ':', answer);
  console.log('At index ', nb ,' of the Fibonacci sequence we find:')
  return answer[nb];
}


console.log(iterativeFibonacci(8));


//recursive approach
function recursiveFibonacci(nb) {
  if (nb<2) {
    return nb;
  }
  return recursiveFibonacci(nb-1) + recursiveFibonacci(nb-2);
}

console.log('Recursive Fibonacci -> At index 8 we find: ', recursiveFibonacci(8));
