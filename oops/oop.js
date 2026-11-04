// object literal 
const user = {
  name : 'jyoti',
  age : 21,
  // this : refers to current context
  greeting : function(){
    console.log(`Hello ${this.name}`)
  }
}

console.log(user)
console.log(user.name)
console.log(user['age'])

// constructor function : allows to create multiple instances of an object
// A regular JavaScript function used with the new keyword to create and initialize multiple objects (instances) with similar properties and behaviours.

function users(name,loginCount){
  this.name = name
  this.loginCount = loginCount
}

// if we create 2 users in below way then it will override values hence to avoid overriding problem you need to use new keyword and hence it becomes constructor function
const user1 = users('jyoti',2)
console.log(user1)

const user2 = new users('x',3)
console.log(user2)