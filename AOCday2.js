const string = document.getElementsByTagName("pre")[0].textContent;
const inputArray = string.split(/\W+/)
const min = inputArray.filter((x, i) => i%4===0).filter(x => x!=='');
const max = inputArray.filter((x, i) => i%4===1);
const letter = inputArray.filter((x, i) => i%4===2);
const password = inputArray.filter((x, i) => i%4===3);

const countCharacter = (string, ch) => {
    let occ = 0;
    let i = 0;
    
    while (i<=string.length && string.indexOf(ch, i)!=-1) {
            occ++;
            i=(string.indexOf(ch, i))+1;
    }
    
    return occ;
} 

let correctPass = 0;

for (let i=0; i<(password.length); i++) {
    console.log('------------------------');
    console.log('min:', Number(min[i]));
    console.log('max:', Number(max[i]));
    console.log('occurence:', countCharacter(password[i], letter[i]))
    if (countCharacter(password[i], letter[i]) >= Number(min[i]) &&  countCharacter(password[i], letter[i]) <= Number(max[i])) {
        correctPass++
        console.log(password[i], 'is CORRECT');
    } else {console.log(password[i], 'is wrong');}
    console.log('------------------------');
}

console.log('Corect passwords:', correctPass)

//Part 2

const string = document.getElementsByTagName("pre")[0].textContent;
const array = string.split(/\W+/)
const min = inputArray.filter((x, i) => i%4===0).filter(x => x!=='');
const max = inputArray.filter((x, i) => i%4===1);
const letter = inputArray.filter((x, i) => i%4===2);
const password = inputArray.filter((x, i) => i%4===3);

const countCharacter = (string, ch) => {
    let occ = 0;
    let i = 0;
    
    while (i<=string.length && string.indexOf(ch, i)!=-1) {
            occ++;
            i=(string.indexOf(ch, i))+1;
    }
    
    return occ;
} 

let correctPass = 0;

for (let i=0; i<(password.length); i++) {
    console.log('------------------------');
    console.log('password:', password[i]);
    console.log('letter:', letter[i]);
    console.log('min:', Number(min[i]));
    console.log('max:', Number(max[i]));
    console.log('min pozition:', password[i][Number(min[i])-1])
    console.log('max pozition:', password[i][Number(max[i])-1])
    if (
        (password[i][Number(min[i])-1] === letter[i] || password[i][Number(max[i])-1] === letter[i])
        &&
        !(password[i][Number(min[i])-1] === letter[i] && password[i][Number(max[i])-1] === letter[i])
    ) {
        correctPass++
        console.log(password[i], 'is CORRECT');
    } else {console.log(password[i], 'is wrong');}
    console.log('------------------------');
}

console.log('Corect passwords:', correctPass)