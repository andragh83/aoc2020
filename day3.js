const givenString = document.getElementsByTagName("pre")[0].textContent;
// const sampleString = '..##.......#...#...#...#....#..#...#.#...#.#.#...##..#...#.##......#.#.#....#.#........##.##...#...#...##....#.#..#...#.#'
function findTrees(string, initialLenght, slope, jump) {
    const inputArray = [];
    const doubleArray = [];
    let trees = 0;
    let i=0;
    let x=0;
    let y=initialLenght;
    while (i<string.length) {
                inputArray[i] = string.slice(x, y);
                i++;
                x=x+initialLenght+1;
                y=y+initialLenght+1;
    }    
    inputArray.map(item => {if (item != []) {
        for (let i=0; i<string.length/inputArray.length; i++)
            doubleArray.push(item.split(''))
        }
    })

    let step = 0;

    //console.log(doubleArray)

    const result = doubleArray.map((x, indexX) => {
            if (indexX%jump===0) {
                const newX = x.map((y, indexY) => {
                    if (indexY===step) {
                        //console.log('randul', indexX, '--------------')
                        //console.log('step: ', step)
                        //console.log('index: ', indexY)
                        if (y==='#') {
                            //console.log('randul', indexX, ' pozitia', indexY, 'pasul', step, 'Casuta este un ', y, 'This is a TREE')                 
                            trees++;
                            //console.log('trees acum', trees)
                            y='X';                        
                        } else {
                            y='0';
                            //console.log('----->', y, 'This is square')
                        }
                    } 
                return y;
            })

            if (indexX === 0) {step = slope}
                else if (step>=initialLenght-slope) { 
                    step=step-(initialLenght-slope);
                } else {
                    step = step+slope;
                    }
            return newX
       
            }
    });
    return trees;
}

console.log('Slope (1,1)', findTrees(givenString, 31, 1, 1));
console.log('Slope (3,1)', findTrees(givenString, 31, 3, 1));
console.log('Slope (5,1)', findTrees(givenString, 31, 5, 1));
console.log('Slope (7,1)', findTrees(givenString, 31, 7, 1));
console.log('Slope (1,2)', findTrees(givenString, 31, 1, 2));

const slope11 =  findTrees(givenString, 31, 1, 1);
const slope31 =  findTrees(givenString, 31, 3, 1);
const slope51 =  findTrees(givenString, 31, 5, 1);
const slope71 =  findTrees(givenString, 31, 7, 1);
const slope12 =  findTrees(givenString, 31, 1, 2);

const resultPart2 = slope11*slope31*slope51*slope71*slope12;

console.log('Result Part2:', resultPart2);
