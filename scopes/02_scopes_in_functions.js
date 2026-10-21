//  inner function can access variables from outer function

function one(){
  const name = "jyoti"

  function two(){
    const website = "youtube"
    console.log(name);
    console.log("i am inside inner function");
    
    
  }
  // console.log(website);
  two()
  console.log("i am outside of inner function");
  
}

one()

// first one function will be executed in it, it encounters two fucntion whcih is defined and then later it is called hence first two will be executed and then i am outside of inner function will be executed

console.log(addone(2))

function addone(n){
  return n+1
}

addone(5)


// addtwo(4) -> this will give error because here addtwo has function and addtwo is accessed before declaring it this happens because function is saved in addtwo
const addtwo = function(n){
  return n+2
}

console.log(addtwo(2))