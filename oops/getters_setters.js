class User{
  #pass
  constructor(email,pass){
    this.email = email 
    this.#pass = pass
  }

  get password(){
    return this.#pass.toUpperCase()
  }
 
  set password(val){
    this.#pass = val
  }
}

const jyoti = new User('jsray2711@gmail.com','jyoti')
console.log(jyoti.password)

// getters and setters are used for encapsulation and to access and manipulate private fields