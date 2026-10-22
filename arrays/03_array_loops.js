// for of loop : applied on objects (i.e iterable things)

const arr = [1,2,3,4,5]
for(let x  of arr){
  console.log(x);
}

// for in loop : used to iterate on objects in order to access property or key

// Maps : remembers original insertion order of keys , doesnt contain any duplicate values
const mp = new Map()
mp.set('india' , '+91')
console.log(mp);

for(let x of mp){
  console.log("map keys :");
  console.log(x); 
}

for(let [key,value] of mp){
  console.log("map keys :");
  console.log(key + " -> "+value); 
}

const obj = {
  'game1' : 'hulk',
  'game2' : 'marvel action'
}

for(let x in obj){
  console.log("keys : ");
  console.log(x);

  console.log("values : ");
  console.log(obj[x]);
  
  console.log(`${x} and ${obj[x]}`);  
}

// map is not iterable

// for each loop
const coding = ['js','ruby','java','python']
coding.forEach((x)=>{
  console.log(x);
})

// forEach parameters : value , idx , array


const t = [
  {
    x : 'y',
    y : 'z'
  },
  {
    x : 'l',
    y : 'p'
  }
]

t.forEach((x)=>{
  console.log(x.x);
  console.log(x.y);
})