const string = document.getElementsByTagName("pre")[0].textContent;
//const string = "light red bags contain 1 bright white bag, 2 muted yellow bags.\ndark orange bags contain 3 bright white bags, 4 muted yellow bags.\nbright white bags contain 1 shiny gold bag.\nmuted yellow bags contain 2 shiny gold bags, 9 faded blue bags.\nshiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.\ndark olive bags contain 3 faded blue bags, 4 dotted black bags.\nvibrant plum bags contain 5 faded blue bags, 6 dotted black bags.\nfaded blue bags contain no other bags.\ndotted black bags contain no other bags.\n"
const inputArray = string.split('.\n');
const arrayJson = inputArray.map(x=>"{ \"" + x.split(" contain ").join("\"contain\"").replace("contain", ":") + "\" }");
arrayJson.pop();
const arrayOfRules = arrayJson.map(x => JSON.parse(x));

// for (let i=0; i<arrayOfObjects.length; i++) {
//     arrayOfObjects[i][Object.keys(arrayOfObjects[i]).toString()] = Object.values(arrayOfObjects[i])[0].split(', ');
// }

const checkDepth = () => {
    let highestDepth = 0;
    arrayOfRules.map((object, index) => {
        if (Object.values(object).toString().length > Object.values(arrayOfRules[index-1]).toString().length) {
            highestDepth = Object.values(object).toString().length;
        }
    })
    return highestDepth;
}


let arrayOfDirectGolden = [];
arrayOfRules.map((object, index) => {
    
    if (Object.values(object).toString().includes("shiny gold")) {
        console.log(index, '-----direct', object)
        arrayOfDirectGolden.push(object);
    }
})

let allGolden = [].concat(arrayOfDirectGolden);
let indirect = [];


arrayOfRules.map((object, index) => {
    // console.log(Object.keys(object), Object.values(object))
    for (let i = 0; i<arrayOfDirectGolden.length; i++) {
        console.log(object);
        console.log(arrayOfDirectGolden[i]);
        console.log('-------------------------------')
        if (Object.values(object).toString().includes(Object.keys(arrayOfDirectGolden[i]).toString())
            ) {
            console.log(i, '----additional', object)
            allGolden.push(object);
            indirect.push(object);
        }
    }
    
})

arrayOfRules.map((object, index) => {
    // console.log(Object.keys(object), Object.values(object))
    for (let i = 0; i<arrayOfDirectGolden.length; i++) {
        console.log(object);
        console.log(arrayOfDirectGolden[i]);
        console.log('-------------------------------')
        if (Object.values(object).toString().includes(Object.keys(indirect[i]).toString())
            ) {
            console.log(i, '----additional', object)
            allGolden.push(object);
        }
    }
    
})

const goldenCheck = allGolden.map((object, i) => {
    return Object.keys(object).toString()
});

const sortedGoldenCheck = goldenCheck.sort()
console.log('golden check', goldenCheck.sort());

result = sortedGoldenCheck.filter((key, i) => key != sortedGoldenCheck[i+1]);

console.log('all colors containing shiny golden bags are:', result.length);
console.log('Direct:', arrayOfDirectGolden);
console.log('------------------------')
console.log('Indirect:', indirect);
console.log('---------ALL---------------')
console.log('All:', allGolden);