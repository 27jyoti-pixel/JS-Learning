let date = new Date()
console.log(date)

console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(typeof date)

let date2 = new Date(2026,1,12)
console.log(date2.toDateString())

let d = Date.now()
console.log(Math.floor((d/1000)))
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMonth())

let t = new Date()
console.log(t.toLocaleString())
t.toLocaleString('default' , {
  weekday : "long"
  
})