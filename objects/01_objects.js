// object literals
// Object.create

// object stores values in form of key and value pair

let symb = Symbol("hi")

let user = {
  names : "jyoti",
  [symb] : "hibye",
  age : 20,
  location : "gujarat",
  email : "jsray2711@gmail.com",
  isLoggedIn : true,
  lastLoggedInDays : ['monday' , 'tuesday' , 'wednesday']
}

// console.log(user)

// methods to access object keys
// console.log(user.names)
// console.log(user["names"])
// // console.log(user.symb)
// console.log(typeof user[symb])

user.email = "ray2711@gmail.com"
// console.log(user.email)

// console.log(user)

user.greeting = function(){
  console.log("hello jyoti")
}

console.log(user.greeting)
console.log(user.greeting())
