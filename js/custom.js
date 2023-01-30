let counter = document.querySelectorAll(".counter")

let arr = Array.from(counter)

arr.map((item) => {
    let startNumber = 0
    let endNumber = item.innerHTML
    item.innerHTML = ""
    
    function count(){
        startNumber++
        item.innerHTML = startNumber
    
        if(startNumber == endNumber){
            clearInterval(end)
        }
    }
    
    let end = setInterval(() => {
        count()
    },item.dataset.speed);
    
})

