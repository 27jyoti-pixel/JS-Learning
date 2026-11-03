// const promise = new Promise((resolve,reject)=>{
//   resolve('Promise fulfilled')
//   reject('Promise rejected')
// })


// const p = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     console.log("Async operation executed")
//   },1000)
// })

// new Promise((res,rej)=>{
//   setTimeout(()=>{
//     console.log('inside set time out');
//   },1000)
// }).then((res)=>{
//   console.log(res)
// })

// const p2 = new Promise((res,rej)=>{
//   rej("Async failed")
// }).then((res)=>{
//   console.log(res);
// }).catch((rej)=>{
//   console.log(rej)
// })

// const p3 = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res({user : "jyoti" ,  email : "jsray2711@gmail.com"})
//   },1000)
// }).then((res)=>{
//   const {user,email} = res;
//   console.log(user)
//   console.log(email)
// })

// const p4 = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     let err = false;
//     if(!err){
//       res({user : "jyoti" , pass : "123"})
//     }else{
//       rej('ERROR : Something went wrong')
//     }
//   },1000)
// })
// .then((res)=>{
//   return res.user;
// })
// .then((res)=>{
//   console.log(res)
// })
// .catch((err)=>{
//   console.log(err)
// })
// .finally(()=>{
//   console.log('Promise finally executed')
// })

