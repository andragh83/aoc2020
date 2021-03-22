var threeSum = function(nums) {
    const twoSum = (array, target) => {
        const twoSumResult = [];
        const indexOfValue = {};
        array.forEach((item, index) => {
            indexOfValue[item] = index;   
        })        
        array.forEach((item, index) => {
            let diff = target-item;            
            if (indexOfValue.hasOwnProperty(diff) && indexOfValue[diff] !== index && indexOfValue[diff]>=0 && indexOfValue[item]>=0) {
                twoSumResult.push([item, diff]);
                indexOfValue[diff]=-1;
                indexOfValue[item]=-1;
            }
        })
        return twoSumResult;
    }
        
    const checkedItems = [];    
    const result = [];
    nums.map((item, i) => {            
            if (!checkedItems.includes(item)) {
                let restOfArray = [...nums];
                restOfArray.splice(i,1);                
                let twoItems = twoSum(restOfArray, -item);                                                                                               
                checkedItems.push(item);                                                    
                if(twoItems.length > 0) {
                    twoItems.map(el => {
                        let threeItems = [...el, item].sort(function (a,b) {return a-b})
                        let isDouble = false;
                        if (result.length > 0) {
                            result.forEach(
                                el => {if (el[0] === threeItems[0] && el[1] === threeItems[1]) {isDouble = true}
                            })
                        };
                        if (!isDouble) {
                            result.push(threeItems);
                        }
                    })                    
                }
            }
        })    

    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));