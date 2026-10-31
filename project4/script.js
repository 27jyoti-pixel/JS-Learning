let originalNum = Math.floor(Math.random()*100+1)
let previous = document.querySelector('.prev')
let attempts = document.querySelector('.attempts')
let guess = document.querySelector('#guess')
let submit = document.querySelector('.submit')

let count = attempts.textContent

submit.addEventListener('click',()=>{
  if(Number(guess.value)===originalNum){
    alert('Hurray! You have guessed correct number')
  }else if(Number(guess.value)===NaN || Number(guess.value)<0){
    alert('Enter a valid number!')
  }else{
    count = count-1
    if(count==0){
      alert(`Game over! You can't guess more!`)
    }else{
      attempts.textContent = count 
      previous.textContent = Number(guess.value)
    }
  }
})