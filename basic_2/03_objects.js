// singleton


//object literals

const mySym = Symbol("Key1")

const Jsuser = {
    name : "Om",
    age : 20,
    location : "Ishwarpur",
    email : "omcjoshi@gmail.com",
    isLogged : false,
    lastLogins : ["Monday", "Thursday"],
    "full name" : "Om Joshi",
    // mySym : "mykey1" //this is not way to use symbol this will return string
    [mySym] : "mykey1"
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);
console.log(typeof mySym); //Symbol

//Object freezing

Jsuser.email = "omj020705@gmail.com"
// console.log(Jsuser);

// Object.freeze(Jsuser)
Jsuser.email = "xyz@gmail.com"
// console.log(Jsuser); //This value won't work if we freeze the value

//function in objects

Jsuser.greeting = function(){
    console.log("Hello js user");
    
}


Jsuser.greeting2 = function(){
    console.log(`Hello js user : ${this.name}`);
    
}

// console.log(Jsuser.greeting); // [function (anonymous)]
Jsuser.greeting() // Hello js user

Jsuser.greeting2() //Hello js user : Om







