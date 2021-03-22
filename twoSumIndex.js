var twoSum = function(nums, target) {    
    const result = [];
    const indexOfValue = {};
    nums.forEach((item, index) => {
        indexOfValue[item] = index;   
    })        
    nums.forEach((item, index) => {
        let diff = target-item;            
        if (indexOfValue.hasOwnProperty(diff) && 
            indexOfValue[diff] !== index && 
            indexOfValue[diff]>=0 && 
            indexOfValue[item]>=0) {
                result.push(index, indexOfValue[diff]);
                indexOfValue[diff]=-1;
                indexOfValue[item]=-1;
        }
    })
    return result;
};

console.log(twoSum([2,7,11,15], 9))