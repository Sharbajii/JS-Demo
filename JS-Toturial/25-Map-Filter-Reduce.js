//map
const numbers = [2, 3, 6, 9, 15]
// myArr = []
// for(element of numbers){
//     myArr.push(element * 10)
// }
// console.log(myArr)

let myArray = numbers.map( function (elemnet){
   return elemnet * 10
})
console.log(myArray)

//filter
let myArr = numbers.filter(function(element){
    return element > 5
}) 
console.log(myArr)


//reduce
let myAr = numbers.reduce(function(prev, current ){
    return prev * current
})

console.log(myAr)