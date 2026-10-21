//if

n = 2
if(n%2==0){
  console.log('even');
}else{
  console.log('odd'); 
}

const isUserLoggedIn = true
if(isUserLoggedIn){
  console.log('hello user');
}

// ternary operator
const x = 2%2===0? console.log("even") : console.log("odd");

const month = 2
switch(month){
  case 1 : console.log("jan");
           break;

  case 2 : console.log("feb");
           break;

  default : console.log("NAN");
}


// falsy values : 0,null,undefined,nan,false,"",-0,BigInt 0n
// truthy values : [],{},true,"0","false",function(){} 