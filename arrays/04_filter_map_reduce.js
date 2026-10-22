// filter method
const nums = [1,2,3,4,5,6,7,8,9,10]

const modifynums = nums.filter((x)=> (x>4))

console.log(modifynums);
console.log(nums);


// map method
const x = [2,3,4,5,6,7]
const l = x.map((t)=>{
  return t+10
})

console.log(l);
console.log(x);


// method chaining 
const ans = [2,3,4,5,6,7,8,9,10]
const ans2 = ans.map((x)=>x/2).filter((x)=>x%2==0)
console.log(ans2)
console.log(ans);


// reduce : accumulator is kept empty and initially , initial value is passed to accumulator , only at start one time initial value is used in accumulator

const arr = [2,3,4,5,6]
let sum = 0
let ans4  = arr.reduce((acc,curr)=>{
  return acc+curr
},sum)

console.log(ans4);
