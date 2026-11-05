const user = {
  name : 'jyoti',
  age : 21
}

const users = {
  name : 'xyz',
  age : 30
}

const studyMethod = {
  study : function(){
    console.log('Studying ... ')
  },

  play : function(){
    console.log('Playing ...')
  }
}

// it will give error as now user doesn't has study method in it
// user.study()


// first argument : object whose prototytpe we want ot hnage
// second argument : object we want to set its prototype
// Object.setPrototypeOf(Object,prototype)

Object.setPrototypeOf(user,studyMethod)
user.study()

const emp1 = {
  name : 'Jyoti',
  salary : 30000
}

const emp2 = {
  name : 'Rahul',
  salary : 40000
}

const employeemethods = {
  work : function(){
    console.log('Working ...')
  },

  attendMeeting : function(){
    console.log('Attending meeting')
  }
}

Object.setPrototypeOf(emp1,employeemethods)
Object.setPrototypeOf(emp2,employeemethods)

emp1.work()
emp2.work()
console.log(Object.getPrototypeOf(emp1))
console.log(emp1.__proto__)

studyMethod.greet = function(){
  console.log('Hello moto ! ')
}

user.greet()

// use of .prototype using constructor
const Student = function (name,age){
  this.name = name;
  this.age = age;
}

const s1 = new Student('jyoti',21)
console.log(s1.name)
Student.prototype.greet = function(){
  console.log('Hello moto')
}

s1.greet()