var menu = document.querySelector(".limenu")
var canal1 =document.querySelector(".canal1")
var canal =document.querySelector(".canal")



menu.addEventListener("mouseover",()=>{
    canal.style.display="block"
    canal1.style.display="block"
})
menu.addEventListener("mouseout",()=>{
    
})

canal.addEventListener("mouseover",()=>{
    canal.style.display="block"
    canal1.style.display="block" 
})
canal1.addEventListener("mouseover",()=>{
    canal.style.display="block"
    canal1.style.display="block" 
})
canal1.addEventListener("mouseout",()=>{
    canal.style.display="none"
    canal1.style.display="none"
    
})
canal.addEventListener("mouseout",()=>{
    canal.style.display="none"
    canal1.style.display="none"
    
})

