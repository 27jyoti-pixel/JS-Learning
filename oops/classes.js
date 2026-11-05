class User{
  constructor(name,email,password){
    this.name = name ,
    this.email = email ,
    this.password = password
  }

  greet(){
    console.log(`Good evening ${this.name}`)
  }
}

const s1 = new User('jyoti','jsray2711@gmail.com','123')
console.log(s1.name)

// the above can also be done using prototypes

// inheritance
class Users{
  constructor(name){
    this.name = name
  }

  logMe(){
    console.log(`Username is ${this.name}`)
  }
}

class Teacher extends Users{
  constructor(name,email,pass){
    super(name)
    this.email = email
    this.pass = pass
  }

  addCourse(){
    console.log(`A new course was added by ${this.name}`)
  }
}

const t = new Teacher('jyoti','jsray27111@gmail.com','1234')
t.addCourse()
console.log(t instanceof Teacher)

class User2{
  constructor(name){
    this.anme = name
  }

  logMe(){
    console.log(`Username : ${this.name}`)
  }

  createId(){
    return `123`
  }
}

const jyoti = new User2('jyoti')
// the below is wwith static keyword with createId()
console.log(User2.createId())
// without static keyword
console.log(jyoti.createId())
