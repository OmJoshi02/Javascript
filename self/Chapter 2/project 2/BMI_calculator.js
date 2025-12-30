let inch = 12;
let pound = 50;

const convert = function(){
    let cm = 2.54*inch;
    let kg = 2.2046*pound;

    return [cm, kg];
}

console.log(convert())