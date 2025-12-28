const accountId = 144553
let accountEmail = "omcjoshi@gmail.com"
var accountPassword = "12345"
accountCity = "Kolhapur"
let accountState;

//accountId = 2
accountEmail = "abc"
accountPassword = "112233"


// console.log(accountId)
// console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountCity)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because it is global declared variable
if any person changes value from other line, then it will change value for entire code
*/
