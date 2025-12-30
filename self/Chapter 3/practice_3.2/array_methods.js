let shopping = [];

//Add milk, bread, apples
shopping.push("Milk", "Bread", "Apples")
console.log(shopping);

//Update Bread with Bananas and Eggs
shopping.splice(1, 1, "Bananas", "Eggs")
console.log(shopping);

//Remove last item
shopping.pop()
console.log(shopping);

//sort alphabetically
shopping.sort()
console.log(shopping);

//find index of milk
console.log(shopping.indexOf("Milk"));

//After Bananas add carrot and lettuce
shopping.splice(1,0, "Carrot", "Letteuce")
console.log(shopping);

//concat 2 lists and add new list twice to the end of first list
let newList = ["Juice", "Pop"]

let result = shopping.concat(newList, newList)
console.log(result);

//get last index of popped element and show on console
console.log(result.indexOf("Pop"));

//print the list
console.log(result);


