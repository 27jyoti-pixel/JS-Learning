function myName(){
  console.log("hello")
}

// execute function
myName()

// function is executed but on 2nd line it will give undefined as it has returned nothing
console.log(myName())


// here only reference is written and prints the function itself and will not execute the function
console.log(myName);

// parameters
function add(a,b){
  console.log(a+b);
}

function add2(a,b){
  return a+b;
}

// arguments
add(2,3)
console.log(add(2,3));

console.log(add2(1,0))

add(2,null) // 2


//  we can store functions in variables as well
const res = add2(9,0)
console.log(res);
 
function logInUserMessage(username){
  return `${username} just logged in`
}

console.log(logInUserMessage("jyoti"))


// if nothing passed in parameter then we will get undefined

// default parameter
function sayHello(username = "jyoti"){
  console.log(`${username} said hello`)
}

sayHello()