

let messageElement = document.getElementById("message")

let isSubmited = false


function nameInputChaged(input){
    document.getElementById("currentName").innerHTML = input.value
}

document.getElementById("submit-btn").addEventListener("click", function(){
    if(!isSubmited){
        isSubmited = true
        let child = messageElement.firstChild
        messageElement.removeChild(child)
    }
    
    let value = document.getElementById("name-input").value

    let txtNode = document.createTextNode(value)
    
    messageElement.appendChild(txtNode)

    let brElement = document.createElement("br")

    messageElement.appendChild(brElement)
})

messageElement.addEventListener("mouseover", function(){

    if(isSubmited){
        this.style.background = "green"
    }else{
        this.style.background = "red"
    }
    
})

messageElement.addEventListener("mouseout", function(){
    this.style.background = "white"
})