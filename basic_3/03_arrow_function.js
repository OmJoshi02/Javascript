const user = {
    username : "Om",
    price : 200,

    wecomeMsg : function(){
        console.log(`${this.username} welcome to website`);
        
    }
}

// user.wecomeMsg()


// function chai(){ 
//     console.log(this);
// }

// chai()

const chai = () => {
    console.log("This is arrow function");
    let username = "Om";
    console.log(this.username); //undefined
    
}
chai()

// const addTwo = (a,b) => {
//     return a+b
// }

// console.log(addTwo(1,2));

const addTwo = (a,b) => (a+b);
console.log(addTwo(1,2));

