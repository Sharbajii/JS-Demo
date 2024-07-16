//Objects

// let student = {
//     firstName: "Anas",
//     lastName: "Sharbaji",
//     age: 27,
//     year: "1997",

//     fullName: function(){
//        console.log (this.firstName+ " "+ this.lastName)
//     }
// }
// student.age = 28

// student.status = "Single"

// student.fullName()

// console.log(student.age)
// console.log(student.status)



//Objects with array

let studentss = [
    {
       firstName: "Anas",
       lastName: "Sharbaji",
       age: 27,
       year: "1997",

       fullName: function(){
          console.log (this.firstName+ " "+ this.lastName)
      }
    },
    {
       firstName: "Sarah",
       lastName: "Sharbaji",
       age: 24,
       year: "2000",

       fullName: function(){
          console.log (this.firstName+ " "+ this.lastName)
      }
    },
    {
       firstName: "Yahia",
       lastName: "Sharbaji",
       age: 32,
       year: "1992",

       fullName: function(){
          console.log (this.firstName+ " "+ this.lastName)
      }
    }
]

    // console.log(studentss[1])
    // console.log(studentss[1].firstName)
    // console.log(studentss[1].lastName)
    // console.log(studentss[1].age)
    // console.log(studentss[1].year)
    // console.log(studentss[1].fullName())

    // studentss[1].age = 25

    // console.log(studentss[1].age)



    //Objects Exercise

    let students = [
        {
           firstName: "Anas",
           lastName: "Sharbaji",
           age: 27,
           year: "1997",
    
           fullName: function(){
              console.log (this.firstName + " " + this.lastName)
          }
        },
        {
           firstName: "Sarah",
           lastName: "Sharbaji",
           age: 24,
           year: "2000",
    
           fullName: function(){
              console.log (this.firstName + " " + this.lastName)
          }
        },
        {
           firstName: "Yahia",
           lastName: "Sharbaji",
           age: 32,
           year: "1992",
    
           fullName: function(){
              console.log (this.firstName + " " + this.lastName)
          }
        },
        {
            firstName: "Bara",
            lastName: "Sharbaji",
            age: 39,
            year: "1984",
     
            fullName: function(){
               console.log (this.firstName + " " + this.lastName)
           }
         }
    ]

    for(let st of students){
        let content = `<tr> 
                            <td>${st.firstName}</td>
                            <td>${st.age}</td>
                            <td>${st.year}</td>
                        </tr>`
        document.getElementById("students").innerHTML += content;
    }
