let parent = document.querySelector('.parent')
console.log(parent)
console.log(parent.children)
console.log(parent.children[3])
console.log(parent.children[1].innerHTML)

for(let i=0;i<parent.children.length;i++){
  console.log(parent.children[i].innerHTML)
}

parent.children[1].style.color = 'green'
console.log(parent.firstElementChild)

let x = document.querySelector('.day')
console.log(x)
console.log(x.parentElement)
console.log(x.nextElementSibling)

// gives complex tree structure
console.log("NODES : ",parent.childNodes)