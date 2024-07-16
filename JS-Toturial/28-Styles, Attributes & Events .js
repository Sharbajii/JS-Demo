    
    
    // document.getElementById("title").innerHTML = "Hello guys"

        // let content = document.getElementById("title").innerHTML
        // document.getElementsByTagName("input")[0].setAttribute("value", content)

        // document.getElementsByTagName("input")[0].setAttribute("type", "submit")

        console.log(document.getElementsByTagName("input")[0].getAttribute("X"))

        document.getElementById("title").style.backgroundColor = "red"
        document.getElementById("title").style.boxShadow = "0px 5px 5px rgba(0, 0 , 0, 0.5)"


        //events
        // function changeTitle2(){
        //     document.getElementById("title-3").innerHTML = "Wlcome to my ..."
        //  }

        //Event Listners
        document.getElementById("title").addEventListener("mouseover",function(){
            document.getElementById("title-2").innerHTML = "Hello Anas"
        })
    
        document.getElementById("title").addEventListener("mouseout",function(){
            document.getElementById("title-2").innerHTML = "test"
        })