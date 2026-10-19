// no redeclare no reassign
const account_id = 12
// account_id = 4 
console.log(account_id)

// reassignment allowed redeclaration not allowed 
let account_email = "jsray2711@gmail.com"
account_email = "xyz@gmail.com"
console.log(account_email);

// reassignment and redeclaration allowed
var password = "12345"
password = "11111"

// default variable declared are of var variable type
account_city = "jaipur"
account_city = "city"

let account_state;
//  if variable declared and not initialised and printed then it will be undefined

console.table([account_email,account_id,account_city,account_state])