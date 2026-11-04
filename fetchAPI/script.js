fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
  return res.json()
})
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err)
})

fetch('https://jsonplaceholder.typicode.com/users',{
  method : 'POST',
  headers : {'Content-type' : 'application/json'},
  body : JSON.stringify({user : 'jyoti' , age : 21})
})
.then((res)=>{
  return res.json();
})
.then((res)=>console.log(res))
.catch((err)=>console.log(err))