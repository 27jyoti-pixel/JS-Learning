// destructuring of objects

const course = {
  name : "JS",
  price : 2000,
  course_instructor : "xyz"
}

// console.log(course.course_instructor)

// // console.log(course.teacher)

// // syntactical sugar : 
// const {course_instructor : teacher} = course 
// console.log(teacher)

const {name,price,course_instructor} = course
console.log(name)
console.log(price)
console.log(course_instructor)

 
//  array destructuring 
let fruits = ["mango","orange","banana"]
const [x,y,z] = fruits
console.log(x)
console.log(y)
console.log(z)

// skip one value
const [x1, ,z1] = fruits
console.log(x1)
console.log(z1)

// json : synatx same like objects difference is that keys are written as strings
// {
//   "name" : "jyoti",
//   "price" : 1000
// }