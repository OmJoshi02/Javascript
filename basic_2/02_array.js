const marvel_heros = ["Thor", "IronMan", "Spiderman"]
const dc = ["Superman", "Flash", "Batman"]

console.log(marvel_heros.concat(dc)) //concats two arrays

//drop and merge method (mostly used)

const all_heros = [...marvel_heros, ...dc]
console.log(all_heros);

//If question gives multiple subarrays are into main array and wants to make plane array

const subarrays = [1,2,3,[4,5],6,[7,[8,9,10]]]
const plane_array = subarrays.flat(Infinity)
console.log(plane_array);

//convert string into multiple character array

console.log(Array.from("Helloworld"));
// [
//   'H', 'e', 'l', 'l',
//   'o', 'w', 'o', 'r',
//   'l', 'd'
// ]


console.log(Array.from({name: "Hello"})); //interesting case 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


