const string = document.getElementsByTagName("pre")[0].textContent;
const inputArray = string.split('\n\n').map(x=>x.replace(/\n/ig, " ").trimEnd());
const arrayJson = inputArray.map(x=>"{ \"" + x.split(" ").join("\", \"").replace(/:/g, "\":\"") + "\" }");
const arrayOfObjects = arrayJson.map(x => JSON.parse(x));
let validPass = 0;

const countValidPass = () => {arrayOfObjects.map(object => {
    if (Object.keys(object).includes('byr') && 
        Object.keys(object).includes('iyr') &&
        Object.keys(object).includes('eyr') &&
        Object.keys(object).includes('hgt') &&
        Object.keys(object).includes('hcl') &&
        Object.keys(object).includes('ecl') &&
        Object.keys(object).includes('pid')) 
        {
            validPass++;
            //console.log(object)
    }
})
return validPass;
}

countValidPass();

//PART 2


const string = document.getElementsByTagName("pre")[0].textContent;
//const string = 'iyr:2019\nhcl:#602927 eyr:1967 hgt:170cm\necl:grn pid:012533040 byr:1946\n\nhcl:dab227 iyr:2012\necl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277\n\nhgt:59cm ecl:zzz\neyr:2038 hcl:74454a iyr:2023\npid:3556412378 byr:2007\n\npid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980\nhcl:#623a2f\n\neyr:2029 ecl:blu cid:129 byr:1989\niyr:2014 pid:896056539 hcl:#a97842 hgt:165cm\n\nhcl:#888785\nhgt:164cm byr:2001 iyr:2015 cid:88\npid:545766238 ecl:hzl\neyr:2022'
const inputArray = string.split('\n\n').map(x=>x.replace(/\n/ig, " ").trimEnd());
const arrayJson = inputArray.map(x=>"{ \"" + x.split(" ").join("\", \"").replace(/:/g, "\":\"") + "\" }");
const arrayOfObjects = arrayJson.map(x => JSON.parse(x));
let validPass = 0;
// console.log(arrayOfObject)

const stringYear = (stringYr, digits, low, high) => {
    if (stringYr.length === digits && Number(stringYr)>=low && Number(stringYr)<=high) {
        return true;
    } else {return false}
}

const height = (stringHgt, unit, low, high) => {
    if (stringHgt.indexOf(unit)!=-1 && Number(stringHgt.slice(0,stringHgt.length-2))>=low && Number(stringHgt.slice(0,stringHgt.length-2))<=high) {
        return true;
    } else {return false}
}

const hairColor = (color) => {
    if (color.length === 7 && 
        /^#[0-9A-F]{6}$/i.test(color)) 
        { return true } else { return false }
}

const eyeColor = (color, values) => {
    let check = false;
    values.map(value => {if (color.split().includes(value)) {
                            check=true; }
        }) 
    return check;
}

const passId = (stringPass, digits) => {
    if (stringPass.length === digits) {
        return true;
    } else {return false}
}

const countValidPass = () => {arrayOfObjects.map(object => {
    // console.log('----------------------------jos')
    // console.log(object);
    // console.log(Object.keys(object).includes('byr') && stringYear(object.byr, 4, 1920, 2002));
    // console.log(Object.keys(object).includes('iyr') && stringYear(object.iyr, 4, 2010, 2020));
    // console.log(Object.keys(object).includes('eyr') && stringYear(object.eyr, 4, 2020, 2030));
    // console.log(Object.keys(object).includes('hgt') && (height(object.hgt,'cm', 150, 193 ) || height(object.hgt, 'in', 59, 76)));
    // console.log(Object.keys(object).includes('hcl') && hairColor(object.hcl));
    // console.log(Object.keys(object).includes('ecl') && eyeColor(object.ecl, ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']));
    // console.log(Object.keys(object).includes('pid') && passId(object.pid, 9));
    if (Object.keys(object).includes('byr') && stringYear(object.byr, 4, 1920, 2002) &&
        Object.keys(object).includes('iyr') && stringYear(object.iyr, 4, 2010, 2020) &&
        Object.keys(object).includes('eyr') && stringYear(object.eyr, 4, 2020, 2030) &&
        Object.keys(object).includes('hgt') && (height(object.hgt,'cm', 150, 193 ) || height(object.hgt, 'in', 59, 76)) &&
        Object.keys(object).includes('hcl') && hairColor(object.hcl) &&
        Object.keys(object).includes('ecl') && eyeColor(object.ecl, ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']) &&
        Object.keys(object).includes('pid') && passId(object.pid, 9)) 
        {
            validPass++;
            //console.log(object)
    }
})
return validPass;
}

countValidPass();