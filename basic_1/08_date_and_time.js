let myDate = new Date()

console.log(typeof(myDate)); //object

console.log(myDate.toDateString()); //Fri Dec 12 2025
console.log(myDate.toISOString()); //2025-12-12T13:27:41.555Z
console.log(myDate.toJSON());
console.log(myDate.toLocaleString()); // 12/12/2025, 6:58:53 PM
console.log(myDate.toLocaleDateString()); // 12/12/2025

let myCreatedDate = new Date(2025, 0, 23) // 0 is month and 0 is first month January
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2025, 13, 33) // if month extends more than 11 then it again starts from january and same for days
console.log(myCreatedDate2.toDateString());

let myCreatedDate3 = new Date(2025, 11, 12, 8, 5, 12) //default format - YYYY/MM/DD, HH/MM/SS AM/PM
console.log(myCreatedDate3.toLocaleString());

//YYYY/MM/DD
let myCreatedDate4 = new Date("2025-1-12")
console.log(myCreatedDate4.toLocaleString());

//MM/DD/YYYY
let myCreatedDate5 = new Date("2-27-2025")
console.log(myCreatedDate5.toLocaleString());


//Timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp); //This will return current time in ms
console.log(myCreatedDate5.getTime()); //This will return date in ms

// convert ms to sec
console.log(Math.round(myCreatedDate5/1000));

//Hence we can compare two dates with the help of this

//get month

let newDate = new Date()
console.log(newDate.getMonth()+1); //+1 because month starts from 0 in programming
console.log(newDate.getDay()+1);
console.log(newDate.getDate());

//locale string formats

console.log(newDate.toLocaleDateString('en-US',{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
})
)





