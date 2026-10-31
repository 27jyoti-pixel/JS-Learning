let ul = document.querySelector('.language')

function addLanguage(langName){
  let li = document.createElement('li')
  li.textContent = langName
  ul.appendChild(li)
}

addLanguage('java')
addLanguage('react')

function addLangOptimiseWay(langName){
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(langName))
  ul.appendChild(li)
}

addLangOptimiseWay('python')

// edit  
let secondLang = document.querySelector('li:nth-child(2)')
let newli = document.createElement('li')
newli.textContent = "go"
secondLang.replaceWith(newli)

// delete / remove
let lastElement = document.querySelector('li:last-child')
lastElement.remove()