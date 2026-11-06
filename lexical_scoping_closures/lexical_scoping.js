// lexical scoping : inner function can access variables of outer function but outer function can't access variables of inner function
function init(){
  let name = 'mozilla'
  function displayName(){
    console.log(name)
  }
  console.log('Before innner function call and present inisde outer function')
  displayName()
}

init()

function outer(){
  let name = 'jyoti'
  function inner(){
    console.log(name)
  }
  inner()
}

outer()

// closure : inner function remembers variables of outer function even when execution of outer function is completed

function makeFunc(){
  const name = 'jyoti'
  function displayName(){
    console.log(`Example of closure , value of name : ${name}`)
  }
  return displayName;
}

// here whole lexical scope of displayName will be stored in myFunc
const myFunc = makeFunc()
myFunc()