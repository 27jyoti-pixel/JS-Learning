let stop = document.querySelector('#stop')
let start = document.querySelector('#start')
// setTimeout(()=>{
//   console.log("hello")
// },2000)

// setInterval(()=>{
//   console.log("jyoti")
// },2000)

// const reference = setTimeout(()=>{
//   console.log("Hello jyoti")
// },2000)

// button.addEventListener('click',()=>{
//   clearTimeout(reference)
//   console.log('Timeout was cleared')
// })

let st = ''
start.addEventListener('click',()=>{
  st = setInterval(()=>{
    console.log("hi jyoti " + Date.now())
  },2000)
})

stop.addEventListener('click',()=>{
  clearInterval(st)
})