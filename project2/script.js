let calculate = document.querySelector('#calculate')
let res = document.querySelector('.results')

calculate.addEventListener('click',()=>{
  let hgt = Number(document.querySelector('#hgt').value)
  let wgt = Number(document.querySelector('#wgt').value)

  if(hgt==='' || wgt==='' || hgt<0 || wgt<0 || isNaN(hgt) || isNaN(wgt)){
    alert('Enter valid height and weight values')
  }else{
    let bmi = (wgt/((hgt*hgt)/10000)).toFixed(2)
    if(bmi<18.6 && !x){
      let p = document.createElement('p')
      p.textContent = `Under Weight : ${bmi}`
      res.appendChild(p)
    }else if(bmi>=18.6 && bmi<=24.9 && !x){
      let p = document.createElement('p')
      p.textContent = `Normal Range : ${bmi}`
      res.appendChild(p)
    }else{
      let p = document.createElement('p')
      p.textContent = `Overweight : ${bmi}`
      res.appendChild(p)
    }
  }
})