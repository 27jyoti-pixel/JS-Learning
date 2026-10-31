let time = document.querySelector('.localTime')

setInterval(()=>{
  let date = new Date()
  time.textContent = date.toLocaleTimeString()
  time.style.color = 'white'
  time.style.display = 'flex'
  time.style.alignItems = 'center'
  time.style.justifyContent = 'center'
  time.style.fontSize = '23px'
},1000)