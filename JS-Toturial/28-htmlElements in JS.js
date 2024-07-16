


let elm1 = document.getElementById("title")
let elm2 = document.getElementsByClassName("title")

console.log(elm1)
console.log(elm2)

//  document.getElementById("title").innerHTML = "wow"
//  document.getElementsByClassName("title")[2].innerHTML = "Welcome here"
document.getElementsByTagName("h3")

for(element of document.getElementsByTagName("h3")){
    element.innerHTML = "hi"
}