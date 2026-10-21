// this keyword refers to the current context

// const user = {
//   name : "jyoti",
//   price : 90,

//   welcomeMessage : function(){
//     console.log(`${this.name} welocme to the website`);
//     // here this refers to the current context
//     console.log(this)

//   }

// }

// // user.welcomeMessage()
// // user.name = "xyz"
// // user.welcomeMessage()


// // browser global object : window
// // this will give empty object
// console.log(this)

// // function one(){
// //   console.log(this)
// // }
// // one()

// const text = function(){
//   const name = "jyoti"
//   // now here this will give undefined
//   console.log(this.name)
// }

// text()


// const text2 = ()=>{
//   const name = "jyoti"
//   // this will give undefined
//   console.log(this.name);

//   // thsi will give empty object
//   console.log(this);
  
// }

// text2()