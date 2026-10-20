const arr = [1,2,3,4,5,true,"hi"]

const a = new Array(1,2,3,4)
console.log(a)
console.log(arr)

//  array methods

// adds value at end
arr.push(20)
arr.push(80)
console.log(arr)

// deletes value form end of array
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(-90)
console.log(arr)

arr.shift()
console.log(arr)

console.log(arr.includes(80))
console.log(arr.indexOf(0))
console.log(arr.joini ())

console.log("Array : " , arr)
console.log(arr.slice(2))
// console.log(arr.slice(1,2))
 