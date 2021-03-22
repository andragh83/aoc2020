const twoSum = (array, target) => {
    const twoSumResult = [];
    const indexOfValue = {};
    array.forEach((item, index) => {
        indexOfValue[item] = index;   
    })        
    array.forEach((item, index) => {
        let diff = target-item;            
        if (indexOfValue.hasOwnProperty(diff) && indexOfValue[diff] !== index && indexOfValue[diff]>=0 && indexOfValue[item]>=0) {
            twoSumResult.push([item, diff].sort(function(a,b) {return a-b}));
            indexOfValue[diff]=-1;
            indexOfValue[item]=-1;
        }
    })
    return twoSumResult;
}

console.log(twoSum([2,7,11,15, 7, -2], 9))