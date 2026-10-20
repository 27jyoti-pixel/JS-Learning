let names = "jyoti ray"
console.log(names)

let x = 'jyoti'
let y = `Hi my name is ${names}`
console.log(y)
console.log(x+" "+y)

console.log(`Hi you are good at studies but yet you need to work hard ${names}`)

const schoolName = new String("Holyden English Medium School , Kagal")
console.log(schoolName)

// here schoolname is an object
console.log(schoolName[0])
schoolName[0] = 'p'
console.log(schoolName[0])

// redecalartion
// const schoolName = "hello"

// resassignment 
// schoolName = "hello"


// reassignment : Reassignment means assigning a new value to a variable that has already been declared.

console.log(names.length)
console.log(names.toUpperCase())
console.log(names.toLowerCase())
console.log(names.substring(0,4))

// slice(start, end) → supports negative indexes.
// substring(start, end) → negative indexes become 0; swaps arguments if needed
// negative indexes are considered form end of string

const n = names.trim()
console.log(n)
console.log(n.replace('t','u'))
console.log(n.includes('p'))
console.log(n.split('t'))