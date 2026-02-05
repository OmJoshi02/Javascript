//singleton object - const user = new Object()

const user = new Object();

user.name = "Om";
user.id = 10
user.isLogger = false


// console.log(user);

const regularUser = {
    email : "omcjoshi@gmail.com",

    fullname: {
        userFullName : "Om Chandrakant Joshi",
        age : 20
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userFullName);

const obj1 = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj4 = {
    5 : "e",
    6 : "f"
}

const obj5 = {
    7 : "g",
    8 : "h"
}
// const obj3 = {obj1 , obj2}

const obj3 = Object.assign(obj1, obj2, obj4, obj5)
// console.log(obj3);

const obj6 = {...obj1, ...obj2, ...obj4, ...obj5}
console.log(obj6);

//Objects in ARRAY

const users = [
    {
        id : 1,
        email : "omcjoshi@gmail.com"
    },

    {
        id : 2,
        email : "omcjoshi@gmail.com"
    },

    {
        id : 3,
        email : "omcjoshi@gmail.com"
    },

    {
        id : 4,
        email : "omcjoshi@gmail.com"
    },

    {
        id : 5,
        email : "omcjoshi@gmail.com"
    }
]

console.log(user[1].email);
