function calculateCartPrice(n){
  return n
}

console.log(calculateCartPrice(2))
console.log(calculateCartPrice(100,200,300,400,500))

function restOperatorExample(...n){
  console.log(n)
}

restOperatorExample(1,2,3,4)

const user = {
  name : "jyoti",
  price : 200
}

function handleObject(anyObject){
  console.log(`user name is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user)