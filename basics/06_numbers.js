const score = 300
console.log(typeof score)
console.log(score)

const s = new Number(10)
console.log(s)
console.log(typeof s)

const t = 900
console.log(Number(t))
console.log(typeof t)
console.log(typeof t.toString())
console.log(typeof t)

console.log(score.toFixed(4))

let x = 45.908
console.log(x.toFixed(9))

let p = 90.87
console.log(p.toPrecision(3))

p = 678.89
console.log(p.toPrecision(2))

let o = 90897362538
console.log(o.toLocaleString())
console.log(o.toExponential())


// ------------- Maths --------------------------
console.log(Math.abs(-80))
console.log(Math.round(89.78))
console.log(Math.round(89.5))
console.log(Math.round(89.49))
console.log(Math.ceil(89.1))
console.log(Math.floor(89.9))
console.log(Math.floor(88))
console.log(Math.max(78,9,0,1))
console.log(Math.min(78,9,0,1))

// Math.random() => always gives number between 0 and 1

console.log((Math.random()*10) + 1) 
// the above line guarantees that min value will be 1


let min = 10
let max = 30
console.log(Math.floor(Math.random()*(max-min+1))+min)
// generates a random integer between min and max, including both the minimum and maximum values.