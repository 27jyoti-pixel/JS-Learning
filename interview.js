// can you over write value of Math.PI if yes then reason if no then reason

const des = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(des)