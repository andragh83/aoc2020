const string = document.getElementsByTagName("pre")[0].textContent;
const inputArray = string.split('\n\n').map(x=>x.trimEnd().split(/\n/ig));

//const sampleArray = [['abc'], ['a', 'b', 'c'],['ab', 'ac'], ['a','a','a','a'], ['b']]; 

const groupsDoubleArray = inputArray.map(x=>{
    let joinedEl = ''
    x.map(y=>joinedEl=joinedEl.concat(y))
    return joinedEl.split('');
});

const sortedQinEachGroup = groupsDoubleArray.map(group => group.sort());
const removedDuplicates = sortedQinEachGroup.map(group =>group.filter((q, i)=>q!==group[i+1]));
const yesQuestions = removedDuplicates.map(q => q.length);
const countAllYes = yesQuestions.reduce(((acc, value) => acc+value), 0);

console.log('Anyone YES:', countAllYes);

//Part II

let everyoneYes = 0
let countLettersInGropus=1;

sortedQinEachGroup.forEach((group, index)=> {
        group.forEach((q, i) => {
            if (q===group[i+1]) {
                countLettersInGropus++;
            } else {
                // console.log('grup:', array[index])
                // console.log('nr litera', q, 'este:', countLetter)
                // console.log('lungime persoana:', array[index].length)
                if (countLettersInGropus === inputArray[index].length) {
                    everyoneYes++
                    //console.log("Se adauga pentru ",q,":", everyoneYes)
                }
                countLettersInGropus=1;
            }
        })
        //console.log("Grupul", index, 'are ', everyoneYes, 'all yes q ------------------------')   
})

console.log('Everyone YES:', everyoneYes);
