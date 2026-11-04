// async await concept is later below in same file

let stop = document.querySelector('#stop')
let start = document.querySelector('#start')
setTimeout(()=>{
  console.log("hello")
},2000)

setInterval(()=>{
  console.log("jyoti")
},2000)

const reference = setTimeout(()=>{
  console.log("Hello jyoti")
},2000)

button.addEventListener('click',()=>{
  clearTimeout(reference)
  console.log('Timeout was cleared')
})

let st = ''
start.addEventListener('click',()=>{
  st = setInterval(()=>{
    console.log("hi jyoti " + Date.now())
  },2000)
})

stop.addEventListener('click',()=>{
  clearInterval(st)
})

const p5 = new Promise((res,rej)=>{
  setTimeout(()=>{
    let err = false;
    if(!err){
      res({user : 'jyoti' , pass : '123'})
    }else{
      rej('ERROR : JS went wrong')
    }
  },1000)
})

async function promise(){
  const res = await p5
  console.log(res)
}