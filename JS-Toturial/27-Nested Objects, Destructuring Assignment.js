let students = [
    {
       name:{
        firstName: "Anas",
        lastName: "Sharbaji",
       },
       age: 27,
       year: "1997",

       fullName: function(){
          console.log (this.firstName + " " + this.lastName)
      },
      courses: [{name: "math", credits: 4}, {}]
    },
    {
        name:{
            firstName: "Sarah",
            lastName: "Sharbaji",
           },
       
       age: 24,
       year: "2000",

       fullName: function(){
          console.log (this.firstName + " " + this.lastName)
      },
      courses: [{name: "math", credits: 4}, {}]
    },
    {
       name:{
             firstName: "Yahia",
             lastName: "Sharbaji"
        },
       age: 32,
       year: "1992",

       fullName: function(){
          console.log (this.firstName + " " + this.lastName)
      },
      courses: [{name: "math", credits: 4}, {}]
    },
    {
        name:{
            firstName: "Bara",
            lastName: "Sharbaji",
       },
        age: 39,
        year: "1984",
 
        fullName: function(){
           console.log (this.firstName + " " + this.lastName)
       },
       courses: [{name: "math", credits: 4}, {}]
     }
]


let st = {
    name: "Anas",
    age: 27
}

// let name = st.name
// let age = st.age


let {name, age} = st
console.log(name, age)

var arr = [10, 20, 30]
let [first, second, third] = arr

console.log(first, second, third)