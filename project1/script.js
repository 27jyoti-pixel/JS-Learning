// let blue = document.querySelector('.blue')
// let white = document.querySelector('.white')
// let grey = document.querySelector('.grey')
// let yellow = document.querySelector('.yellow')
// let main = document.querySelector('.main')
// let h1 = document.querySelector('h1')
// let h3 = document.querySelector('h3')

// blue.addEventListener('click',()=>{
//   main.style.backgroundColor = 'blue'
//   h1.style.color = 'white'
//   h3.style.color = 'white'
// })

// white.addEventListener('click',()=>{
//   main.style.backgroundColor = 'white'
//   h1.style.color = 'black'
//   h3.style.color = 'black'
// })

// grey.addEventListener('click',()=>{
//   main.style.backgroundColor = 'grey'
//   h1.style.color = 'black'
//   h3.style.color = 'black'
// })

// yellow.addEventListener('click',()=>{
//   main.style.backgroundColor = 'yellow'
//   h1.style.color = 'black'
//   h3.style.color = 'black'
// })

// another efficient method : 
let buttons = document.querySelectorAll('.button')
let main = document.querySelector('.main')

buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    if(button.id==='white') main.style.backgroundColor = 'white'
    else if (button.id==='grey') main.style.backgroundColor = 'grey'
    else if(button.id==='yellow') main.style.backgroundColor = 'yellow'
    else if(button.id==='blue') main.style.backgroundColor = 'blue'
  })
})