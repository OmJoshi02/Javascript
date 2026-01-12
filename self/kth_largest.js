let arr = [2,6,4,5,3,7,8] // 2,3,4,5,6,7,8
let k = 2
arr.sort((a,b) => a-b)
arr.reverse()
let result = 0;
// console.log(arr.length)
for(let i = 0; i < arr.length; i++){
    result = arr[k-1]
}
console.log(result);
