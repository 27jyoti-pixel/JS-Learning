console.log(2>1);
console.log((2>=1));
console.log(2==2);
console.log(2===2);
console.log(2!=1);
console.log(2!==1);


console.log("2">1);
console.log("02">1)

// for comparisons : datatype should be same

console.log(null>0);
console.log(null===0);
console.log(null==0);
console.log(null>=0);
console.log(undefined==null);
console.log(undefined===null);
console.log(undefined==0);
console.log(undefined===0);


// ==== : strict check : checks for datatype and value 

// --------------------------------------------
/*

  Stack memory : primitive types (you get copy of variable)
  Heap memory : non primitive types (you get reference or addreess of variable)

  heap : changes are made in original value
  stack : changes are made in copy variable and it will not be reflected in original value



*/

let s = "jyoti ray"
let s1 = s
console.log(s)
console.log(s1)

s1 = "jyoti"
console.log(s)
console.log(s1)


let user = {
  email : "jyotisray@gmail.com",
  api : "xyz"
}

user2 = user
user2.email = "deepak ray"
console.log(user2.email)
console.log(user.email)

