let div = document.createElement('div')
let body = document.querySelector('body')

div.className = 'main'
div.id = Math.round(Math.random()*10+1)
div.style.backgroundColor = 'black'
div.style.color = 'white'
div.setAttribute('title','generated title')
console.log(div)
div.innerText = 'Jyoti'
document.body.appendChild(div)