let start = document.querySelector('#start')
let stops = document.querySelector('#stop')
let body = document.querySelector('.bdy')

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
  }
  return color;
}

let st = ''

start.addEventListener('click',()=>{
  st = setInterval(()=>{
    let x = randomColor()
    console.log(x)
    body.style.backgroundColor = x
  },1000)
})


stops.addEventListener('click',()=>{
  clearInterval(st)
  st = null
})