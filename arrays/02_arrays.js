const colors = ['red','yellow','black','blue','white']
const favColors = ['red','yellow','black']

// colors.push(favColors)
// console.log(colors)
// console.log(colors[5][2]);

// console.log(colors.concat(favColors))

// spread operator
const x = [1,2,3,4,5]
const z = [6,7,8,9,10]
let y = [...x,...z]
console.log(y)

// spread operator is used to craete a shallow copy
let d = [...y]
console.log(`d before modification : ${d}`)
d[0] = -900
console.log(`d after modification : ${d}`)
console.log(`y after d modification : ${y}`)

let a1 = [1,2,3,4,[5,6],[[7,8,9,10]]]
console.log(a1.flat())

console.log(Array.isArray("hi"))
console.log(Array.isArray([2,3,4])) 

console.log(Array.from("ray"))
console.log(Array.of(1,2,3))