
alert("fuciona")

/*
import { eleitores } from "./eleitores.js";
import { hoje } from "./urnadata.js";
*/
var confirmaeleitor = document.querySelector(".confirmaeleitor")


document.querySelector(".init").addEventListener("click",()=>{
    
    document.querySelector(".eleitor").style.display="block"
    document.querySelector(".controleh3").textContent="Inicio de votação; "+hoje
    document.querySelector(".init").style.display="none"  
})

addEventListener("keydown", (event) => {
    if (event.key == "Home") {
        var senha = prompt("Digite senha do desenvolvedor")
        if (senha==1979) {
    /***************final de votação******************************* */       
    document.querySelector(".eleitor").style.display="none"
    document.querySelector(".contener").style.display="none"
    document.querySelector(".controle").style.display="block"

    resutado()

        }

    }
   
 })/************************************************************* */




var eleit = ""

confirmaeleitor.addEventListener("click",() =>{
 eleit=document.querySelector(".iput").value;
var confere = eleitores.find(eleitores =>eleitores.nome===eleit) 

if (  confere == undefined) {
    alert("Eleitor Não habilitado para votar")
} else {
    alert("Eleitor, "+confere.nome+"  habilitado para votar")
    document.querySelector(".eleitor").style.display="none"
    document.querySelector(".contener").style.display="block"
    const pai = document.querySelector(".controle")
    const p = document.createElement("p")
    p.textContent=eleit

    pai.appendChild(p)
}




})

var imag1 = document.querySelector(".foto1")
var imag2 = document.querySelector(".foto2")
var imag3 = document.querySelector(".foto3")
var imag4 = document.querySelector(".foto4")
var voto = ""



    imag1.addEventListener("click",()=>{
        imag2.style.display="none"
        imag3.style.display="none"
        imag4.style.display="none"
        voto="volkswagen"     //volkswagen   fiat ford
        var vote1= localStorage.getItem(voto)
        vote1=parseInt(vote1)+1
        localStorage.setItem(voto,vote1)
    })
    imag2.addEventListener("click",()=>{
        imag1.style.display="none"
        imag3.style.display="none"
        imag4.style.display="none"
        voto="fiat"     //volkswagen   fiat ford
        var vote2= localStorage.getItem(voto)
        vote2=parseInt(vote2)+1
        localStorage.setItem(voto,vote2)
    })
    imag3.addEventListener("click",()=>{
        imag2.style.display="none"
        imag1.style.display="none"
        imag4.style.display="none"
        voto="ford"     //volkswagen   fiat ford
        var vote3= localStorage.getItem(voto)
        vote3=parseInt(vote3)+1
        localStorage.setItem(voto,vote3)
    })
    imag4.addEventListener("click",()=>{
        imag2.style.display="none"
        imag3.style.display="none"
        imag1.style.display="none"
        voto="chevrolet"     //volkswagen   fiat ford
        var vote4= localStorage.getItem(voto)
        vote4=parseInt(vote4)+1
        localStorage.setItem(voto,vote4)
    })

document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector(".eleitor").style.display="block"
    document.querySelector(".contener").style.display="none"
    imag1.style.display="block" 
    imag2.style.display="block" 
    imag3.style.display="block" 
    imag4.style.display="block" 

localStorage.setItem(eleit,voto)
//localStorage.setItem(voto,0)
document.querySelector(".iput").value=""


})

function resutado(){
    var controav1=localStorage.getItem("volkswagen")
    var controav2=localStorage.getItem("fiat")
    var controav3=localStorage.getItem("ford")
    var controav4=localStorage.getItem("chevrolet")

     if (controav1>=controav2) {
        if (controav1>=controav3) {
            if (controav1>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+ "volkswagen;  "+"votos:"+controav1

            } else {
                
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"volkswagen;  "+"votos:"+controav1
            }
        alert("ok")

        } else {
            
            document.querySelector(".contropn3").textContent="Terceiro lugar;  "+"volkswagen;  "+"votos:"+controav1
        }
        

     } else {
        
        if (controav1>=controav3) {
            if (controav1>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+ "volkswagen;  "+"votos:"+controav1

            } else {
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"volkswagen;  "+"votos:"+controav1
            }
        

        } else {
            if (controav1>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+ "volkswagen;  "+"votos:"+controav1

            } else {
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"volkswagen;  "+"votos:"+controav1
            }
            document.querySelector(".contropn3").textContent="Terceiro lugar;  "+"volkswagen;  "+"votos:"+controav1
        }
       document.querySelector(".contropn2").textContent="Segundo lugar;  "+"volkswagen;  "+"votos:"+controav1
     }
/************************************************************** */
     if (controav2>=controav1) {
        
        if (controav2>=controav3) {

            if (controav2>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"fiat;  "+"votos:"+controav2

            } else {
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"fiat;  "+"votos:"+controav2
            }
        

        } else {
            document.querySelector(".contropn3").textContent="Terceiro lugar;  "+"fiat;  "+"votos:"+controav2
        }
        

     } else {
        if (controav2>=controav3) {

            if (controav2>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"fiat;  "+"votos:"+controav2

            } else {
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"fiat;  "+"votos:"+controav2
            }
        

        } else {
            if (controav2>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"fiat;  "+"votos:"+controav2

            } else {
                 
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"fiat;  "+"votos:"+controav2
            }
           

            document.querySelector(".contropn3").textContent="Terceiro lugar;  "+"fiat;  "+"votos:"+controav2
        }
        
       document.querySelector(".contropn2").textContent="Segundo lugar;  "+"fiat; "+"votos:"+controav2
     }
/*************************************************** */
     if (controav3>=controav1) {
        if (controav3<=controav2) {
            if (controav3>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"ford;  "+"votos:"+controav3

            } else {
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"ford;  "+"votos:"+controav3
            }
        

        } else {
            document.querySelector(".contropn3").textContent="Terceiro lugar;  "+"ford;  "+"votos:"+controav3
        }
        

     } else {
        if (controav3<=controav2) {
            if (controav3>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"ford;  "+"votos:"+controav3

            } else {
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"ford;  "+"votos:"+controav3
            }
        

        } else {
            if (controav3>=controav4) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"ford;  "+"votos:"+controav3

            } else {
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"ford;  "+"votos:"+controav3
            }
        
            document.querySelector(".contropn3").textContent="Terceiro lugar;  "+"ford;  "+"votos:"+controav3
        }
       document.querySelector(".contropn2").textContent="Segundo lugar;  "+"ford; "+"votos:"+controav3
     }
/********************************************** */
     if (controav4>=controav1) {
        if (controav4>=controav3) {
            if (controav4>=controav2) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"chevrolet;  "+"votos:"+controav4

            } else {
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"chevrolet;  "+"votos:"+controav4
            }
        

        } else {
            document.querySelector(".contropn3").textContent="Terceiro lugar;  "+"chevrolet;  "+"votos:"+controav4
        }
        

     } else {
        if (controav4>=controav3) {
            if (controav4>=controav2) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"chevrolet;  "+"votos:"+controav4

            } else {
                document.querySelector(".contropn2").textContent="Quarto lugar;  "+"chevrolet;  "+"votos:"+controav4
            }
        

        } else {
            if (controav4>=controav2) {
         
                document.querySelector(".contropn1").textContent="Primeiro lugar;  "+"chevrolet;  "+"votos:"+controav4

            } else {
                
                document.querySelector(".contropn4").textContent="Quarto lugar;  "+"chevrolet;  "+"votos:"+controav4
            }
            
        }
      
     }
 

   

    
    


   
}

document.querySelector(".find").addEventListener("click",()=>{
   
document.querySelector(".dispaly").style.display="none"
document.querySelector(".find").style.display="none"
 

 
window.print()

var seta = setInterval(() => {
 location.reload()
 
 clearInterval(seta)

    
}, 3000);
    
   
    
   



})


