const string = document.getElementsByTagName("pre")[0].textContent;
//const string = 'FBFBBFFRLR\nBFFFBBFRRR\nFFFBBBFRRR\nBBFFBBFRLL'
const array = string.split('\n')
const arrayOfSeats = array.map(x=>x.split(""));

let row=[0, 127]; let column=[0, 7];
let id= 0;
let highestId = 0;

let seatIds = []
let mySeatId = [];

const binaryPartitionHalf = (binaryValue, ch, direction) => {
    binaryValue===ch? 
      direction[1]=Math.round(direction[1]/2+direction[0]/2)-1 
    : 
      direction[0] = Math.round(direction[0]+(direction[1]-direction[0])/2)
}

const idArray = arrayOfSeats.map((x, indexX)=>{
                //console.log('seat:',x)
                x.forEach(
                    (y, indexY)=>{
                        //console.log('indexY:', i);
                        indexY<=6?
                            //y==='F'? row[1]=Math.round(row[1]/2+row[0]/2)-1 : row[0] = Math.round(row[0]+(row[1]-row[0])/2)
                            binaryPartitionHalf(y,'F',row)
                        : 
                            //y==='L'? column[1]=Math.round(column[1]/2+column[0]/2)-1 : column[0] = Math.round(column[0]+(column[1]-column[0])/2)
                            binaryPartitionHalf(y,'L', column)
                    })
                id=row[0] * 8 + column[0];
                
                seatIds.push(id);
                //console.log('row:', row[0]);
                //console.log('column:', column[0]);
                row=[0, 128]; column=[0, 8];
                //console.log('ID', id)
                return id;
            })

highestId = Math.max(...idArray);
lowestId = Math.min(...idArray);

let sortedIds = seatIds.sort(function(a, b) {
    return a - b;
  });

//cleanSortedIds = sortedIds.shift();

console.log(sortedIds);

sortedIds.forEach((element, i) => { if (element !== sortedIds[i+1]-1 && i!==0 && i!==sortedIds.length-1) {mySeatId.push(element+1)} })


//console.log('IDs array:', idArray);
console.log('Highest ID is:', highestId);

console.log('My seat id is:', mySeatId);



