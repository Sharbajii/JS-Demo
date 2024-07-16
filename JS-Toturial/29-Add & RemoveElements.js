



//  document.getElementById("ul").innerHTML += "<li> Khaled </li>"

let liElemnet = document.createElement("li")
let textContent = document.createTextNode("Sarah")
liElemnet.appendChild(textContent)
document.getElementById("ul").appendChild(liElemnet)

document.getElementById("ul").removeChild(liElemnet)

let mahNode = document.getElementById("remove")
document.getElementById("ul").removeChild(mahNode)
