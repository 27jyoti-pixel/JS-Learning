const user = {
  name : 'jyoti',
  age : 21,
  greet : function(){
    console.log(`Hello ${this.name} students`)
  }
}

// const greeting = user.greet.call(user)
const g = user.greet.bind(user)
// g()

const user1 = {
  name : 'xyz',
  age : 21
}

const user2 = {
  name : 'xyzz',
  age : 22
}

function introduce(city,clg){
  console.log(`I am ${this.name}`)
  console.log(`I am ${this.age} years old`)
  console.log(`I live in  ${city}`)
  console.log(`I study at ${clg}`)
}

// introduce.call(user1,'kagal','lpu')
// introduce.call(user2,'satara','mit')

const greetStudent = introduce.bind(user1,'kagal','lpu')
const greetStudent2 = introduce.bind(user2,'meeraj','mit')
greetStudent()
greetStudent2()