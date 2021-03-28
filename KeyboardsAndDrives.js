function getMoneySpent(keyboards, drives, b) {

    let max_spend=-1;
    for (let i=0; i<keyboards.length; i++) {
        for (let j=0; j<drives.length; j++) {
            let current_spend = keyboards[i]+drives[j];
            if (current_spend <= b && current_spend > max_spend) {
                max_spend = current_spend
            }
        }
    }
    return max_spend;
}

console.log('Result: ', getMoneySpent([3, 1], [5, 2, 8], 10));