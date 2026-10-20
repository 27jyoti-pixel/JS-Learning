// singleton object
const tinderUser = new Object()
// console.log(tinderUser)

tinderUser.id = 123
tinderUser.name = "xyz"
tinderUser.gender = "male"

// console.log(tinderUser)

const regularUser = {
  email : "regular@gmail.com",
  fullname : {
    username : {
      firstname : "x",
      lastname : "t"
    }
  }
}

console.log("1 : ",regularUser)
console.log("2 : ",regularUser.fullname)
console.log("3 : ",regularUser.fullname.username)
console.log("4 : ",regularUser.fullname.username.firstname)

const newobj  = {...tinderUser,...regularUser}
console.log(newobj)

console.log(Object.keys(newobj))
console.log(Object.values(newobj))
console.log(Object.entries(newobj))