const accountId = 14553
let accountEmail = "nishikantverma@gmai.com"
var accountPassword = "12345"
accountCity = "Ghaziabad"
let accountState;

// accountId = 2 // not allowed
accountEmail = "hchc@gmail.com"
accountCity = "Bengaluru"
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
/*
prefer not to use var beacuse of issue in block scope and functional scope
*/