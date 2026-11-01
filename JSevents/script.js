let cat = document.querySelector('#cat')
let imgs = document.querySelector('#imgs')

imgs.addEventListener('click',(e)=>{
  // e.stopPropagation()
  console.log('images was clicked')
},true)


cat.addEventListener('click',(e)=>{
  console.log('Hey ! Do not touch my cat')
})