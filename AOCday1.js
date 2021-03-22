const string = document.getElementsByTagName("pre")[0].textContent;
const inputArray = string.split(/\W+/)
inputArray.forEach( item1 => {
    let sum = 0;
    inputArray.forEach( item2 => {
            sum = Number(item1) + Number(item2);
            if(sum===2020) {
                console.log('item1: ', item1, 'item2: ', item2)
                console.log('product: ', item1*item2)
                return sum;
            }
    })
})

//PART 2

const string = document.getElementsByTagName("pre")[0].textContent;
const inputArray = string.split(/\W+/)
let product = 0;
inputArray.forEach( item1 => {
    let sum = 0;
    inputArray.forEach( item2 => {
            inputArray.forEach( item3 => {
                sum = Number(item1) + Number(item2) + Number(item3);
                if(sum===2020 && item1 && item2 && item3) {
                    console.log('item1:', item1, 'item2:', item2, 'item3:', item3)
                    // console.log("sum:", sum)
                    // console.log('product: ', item1*item2*item3)
                    product = item1*item2*item3;
                    console.log(product);
                }
            })
            
    })
})
