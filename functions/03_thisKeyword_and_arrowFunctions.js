// this keyword refers to the current context

const user = {
  name : "jyoti",
  price : 90,

  welcomeMessage : function(){
    console.log(`${this.name} welocme to the website`);
    // here this refers to the current context
    console.log(this)

  }

}

// user.welcomeMessage()
// user.name = "xyz"
// user.welcomeMessage()


// browser global object : window
// this will give empty object
console.log(this)

// function one(){
//   console.log(this)
// }
// one()

const text = function(){
  const name = "jyoti"
  // now here this will give undefined
  console.log(this.name)
}

text()


const text2 = ()=>{
  const name = "jyoti"
  // this will give undefined
  console.log(this.name);

  // thsi will give empty object
  console.log(this);
  
}

text2()

// arrow function
const x = (n,m)=>{
  console.log(n+m);
}

x(2,3)
console.log(x(2,3));

// implicit return of arrow function : if there is single line to return then no need of curly brackets and return statement

const y = (n,m)=>n+m 

const z = (n,m)=>(n+m) 

console.log(y(0,0)); 


// to return an object from arrow function :
const t = ()=> ({name : "jyoti"})
console.log(t());
console.log(t().name);

