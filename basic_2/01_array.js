// array
// Note - In Javascript array may contain different data with different datatype
//        here array is resizable, it has no constant size
//        Array copy operation creates shallow copy

/* what is shallow copy - Shallow copy shares the same reference of original objects in memory to duplicate one
    if someone changes in copy it will reflect to original also (heap memory)

    what is deep copy - Deep copy never shares same reference to duplicate one (stack memory)
*/

const myArr = [1,2,3,4,5,true,"Om"]
console.log(myArr);
console.log(myArr[1]);

const myArr2 = new Array(1,2,3,4)
console.log(myArr2);

//array methods

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(0) // adds element at 0th index
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(1));

console.log(myArr.indexOf(4)); //-1 if not found

const arr = myArr.join() //converts array into string
console.log(arr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log("B ",myn1);

//Splice removes the given indexed number including nth number in the array
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);



