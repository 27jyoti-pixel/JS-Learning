let title = document.getElementById('title')
console.log(title)
title.textContent = "hi"
title.innerHTML = "bye"
title.className = "heading"
console.log(title.getAttribute('id'))
title.style.backgroundColor = "yellow"
title.style.fontSize = "100px"
console.log(title.innerHTML)
console.log(title.textContent)
console.log(title.innerText)

let t = document.querySelector('.heading')
let t2 = document.querySelector('#title')
console.log(t.textContent)

let x = document.querySelector('h2')
console.log(x)
let x2 = document.querySelectorAll('h2')
console.log(x2)

let x3 = document.querySelector('input[type="password"]')
console.log(x3)
