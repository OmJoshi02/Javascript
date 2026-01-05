// Stack(primitive) Heap(Non-premitive)


//Stack memory 
let name1 = "stackcore"

let name2 = name1
name2 = "Om"

console.log(name1);
console.log(name2);


//Heap memory
let userOne = {
    email : "omcjoshi@gmail.com",
    upi : "om@boi"
}

console.log(userOne);

let userTwo = userOne
console.log(userTwo);

userTwo.email = "xyz@gmail.com"
console.log(userOne)
