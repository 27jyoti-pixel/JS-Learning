// global scope
let a = 10
const b = 20
var c = 30


//  {} -> scope
console.log(a);
console.log(b);
console.log(c);


// blcok scope
{
  console.log("outer value of a : "+a)
  let a = 90
  var c = 9
  console.log("inner value of a : " + a);
  
}

console.log(c);
