document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
 });  
 document.addEventListener('keydown', function(e) {
      if (e.key === 'F12' ) { // F12 e Ctrl+Shift+I (Inspecionar)
    e.preventDefault();
  }
});


import { eleitores } from "./eleitores.js";
import { hoje } from "./urnadata.js";

var dat = new Date()
var hor = dat.getHours()
var minu = dat.getMinutes()

var confirmaeleitor = document.querySelector(".confirmaeleitor")


document.querySelector(".init").addEventListener("click",()=>{
    
    document.querySelector(".eleitor").style.display="block"
    document.querySelector(".controleh3").textContent="Inicio de votação; "+hoje
    document.querySelector(".init").style.display="none"  
})
//********************************************** */
var audio = document.querySelector(".audio")
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

var espaco = "    "


var eleit = ""

confirmaeleitor.addEventListener("click",() =>{
 eleit=document.querySelector(".iput").value;
var confere = eleitores.find(eleitores =>eleitores.nome===eleit) 

if (  confere == undefined) {
    alert("Eleitor Não habilitado para votar")
} else {
    
    document.querySelector(".eleitor").style.display="none"
    document.querySelector(".contener").style.display="block"
    const pai = document.querySelector(".controle")
    
    const p = document.createElement("p")
    p.textContent="Nome:"+ confere.nome +espaco+"bloco:"+ confere.bloco+espaco+"Ap:"+ confere.ap+espaco+"Hora"+ hor+":"+minu

    pai.appendChild(p)
}




})

var chapa1=localStorage.getItem("chapa 1")
var chapa2=localStorage.getItem("chapa 2")
var chapa3=localStorage.getItem("chapa 3")
var chapa4=localStorage.getItem("chapa 4")


var imag1 = document.querySelector(".foto1")
var imag2 = document.querySelector(".foto2")
var imag3 = document.querySelector(".foto3")
var imag4 = document.querySelector(".foto4")
var voto = ""
var chapa=""



    imag1.addEventListener("click",()=>{
        imag2.style.display="none"
        imag3.style.display="none"
        imag4.style.display="none"
        voto=localStorage.getItem(chapa1)
        var vote1=parseInt(voto) 
        vote1=parseInt(vote1)+1
        localStorage.setItem(chapa1,vote1)
        chapa=chapa1
        
    })
    imag2.addEventListener("click",()=>{
        imag1.style.display="none"
        imag3.style.display="none"
        imag4.style.display="none"
        voto=localStorage.getItem(chapa2)
        var vote2= voto
        vote2=parseInt(vote2)+1
        localStorage.setItem(chapa2,vote2)
        chapa=chapa2

    })
    imag3.addEventListener("click",()=>{
        imag2.style.display="none"
        imag1.style.display="none"
        imag4.style.display="none"
        voto=localStorage.getItem(chapa3)
        var vote3= voto
        vote3=parseInt(vote3)+1
        localStorage.setItem(chapa3,vote3)
        chapa=chapa3

    })
    imag4.addEventListener("click",()=>{
        imag2.style.display="none"
        imag3.style.display="none"
        imag1.style.display="none"
        voto=localStorage.getItem(chapa4)
        var vote4= voto
        vote4=parseInt(vote4)+1
        localStorage.setItem(chapa4,vote4)
        chapa=chapa4

    })

document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector(".eleitor").style.display="block"
    document.querySelector(".contener").style.display="none"
    imag1.style.display="block" 
    imag2.style.display="block" 
    imag3.style.display="block" 
    imag4.style.display="block"
    audio.src="https://avoz-que-clama-no-desert.github.io/audios/confirma-urna.mp3"
    audio.play() 

localStorage.setItem(eleit,chapa)
//localStorage.setItem(voto,0)
document.querySelector(".iput").value=""


})


function resutado(){
    var controav1=localStorage.getItem(chapa1) 
    var controav2=localStorage.getItem(chapa2)
    var controav3=localStorage.getItem(chapa3)
    var controav4=localStorage.getItem(chapa4)


    var v1=19
    var v2=20
    var v3=17
    var v4=14

     
/************************************************************** */
if (controav1 > controav2) {
    
    if (controav1 > controav3) {
       
        if (controav1 > controav4) {
            //1 lugar
            document.querySelector(".contropn1").innerHTML=chapa1+ "   "+controav1
        } else {
            //s2 lugar
            document.querySelector(".contropn2").innerHTML=chapa1+ "   "+controav1
        }
       
        
    } else {
      
      if (controav1 > controav4) {
        document.querySelector(".contropn3").innerHTML=chapa1+ "   "+controav1
        
      } else {
        document.querySelector(".contropn4").innerHTML=chapa1+ "   "+controav1
        
      }  
    }
} else {

    
    if (controav1 > controav3) {
        // 2 lgar
        document.querySelector(".contropn2").innerHTML=chapa1+ "   "+controav1
        
    } else {
        
        if (controav1 > controav4) {
            // 3 lugar
            document.querySelector(".contropn3").innerHTML=chapa1+ "   "+controav1

        } else {
            //4 lugar
            document.querySelector(".contropn4").innerHTML=chapa1+ "   "+controav1
            
        }
        
    }
    
}
   
/*************************************************** */
if (controav2 > controav1) {
    
    if (controav2 > controav3) {
        
        if (controav2>controav4) {
            //1 lugar
            document.querySelector(".contropn1").textContent=chapa2+ "   "+controav2
        } else {
            //s2 lugar
            document.querySelector(".contropn2").textContent=chapa2+ "   "+controav2
        }
       
        
    } else {
     
      if (controav2 > controav4) {
        document.querySelector(".contropn3").textContent=chapa2+ "   "+controav2
        
      } else {
        document.querySelector(".contropn4").textContent=chapa2+ "   "+controav2
        
      }  
    }
} else {

    
    if (controav2 > controav3) {
        // 2 lgar
        document.querySelector(".contropn2").textContent=chapa2+ "   "+controav2
        
    } else {
        
        if (controav2 > controav4) {
            // 3 lugar
            document.querySelector(".contropn3").textContent=chapa2+ "   "+controav2

        } else {
            //4 lugar
            document.querySelector(".contropn4").textContent=chapa2+ "   "+controav2
            
        }
        
    }
    
}
    
/********************************************** */
if (controav3 > controav1) {
    
    if (controav3 > controav2) {
        
        if (controav3 > controav4) {
            //1 lugar
            document.querySelector(".contropn1").textContent=chapa3+ "   "+controav3
        } else {
            //s2 lugar
            document.querySelector(".contropn2").textContent=chapa3+ "   "+controav3
        }
       
        
    } else {
      
      if (controav3 > controav4) {
        document.querySelector(".contropn3").textContent=chapa3+ "   "+controav3
        
      } else {
        document.querySelector(".contropn4").textContent=chapa3+ "   "+controav3
        
      }  
    }
} else {

    
    if (controav3 > controav2) {
        // 2 lgar
        document.querySelector(".contropn2").textContent=chapa3+ "   "+controav3
        
    } else {
        
        if (controav3 > controav4) {
            // 3 lugar
            document.querySelector(".contropn3").textContent=chapa3+ "   "+controav3

        } else {
            //4 lugar
            document.querySelector(".contropn4").textContent=chapa3+ "   "+controav3
            
        }
        
    }
    
}    
//************************************************************ */
if (controav4> controav1) {
    
    if (controav4 > controav2) {
        
        if (controav4 > controav3) {
            //1 lugar
            document.querySelector(".contropn1").textContent=chapa4+ "   "+controav4
        } else {
            //s2 lugar
            document.querySelector(".contropn2").textContent=chapa4+ "   "+controav4
        }
       
        
    } else {
      
      if (controav4 > controav3) {
        document.querySelector(".contropn3").textContent=chapa4+ "   "+controav4
       
      } else {
        document.querySelector(".contropn4").textContent=chapa4+ "   "+controav4
       
      }  
    }
} else {

    
    if (controav4 > controav2) {
        // 2 lgar
        document.querySelector(".contropn2").textContent=chapa4+ "   "+controav4
        
    } else {
        
        if (controav4 > controav3) {
            // 3 lugar
            document.querySelector(".contropn3").textContent=chapa4+ "   "+controav4
            
        } else {
            //4 lugar
            document.querySelector(".contropn4").textContent=chapa4+ "   "+controav4
            
        }
        
    }
    
} 

   

    
    


   
}
//******************************************************************************** */


var nuchap =0
addEventListener("keydown", (ev)=>{
  if (ev.key=="End") {
     nuchap++
    
    if (nuchap>4) {
        
       alert("fim de inscrição")
    } else {
        
       if (ev.key=="End") {
       var chapa = prompt("digite o nome da chapa ")
       localStorage.setItem("chapa "+nuchap,chapa)
       localStorage.setItem(chapa,0)
    } 
    }
  } else {
    
  }

    
})


//********************************************************************************** */
document.querySelector(".find").addEventListener("click",()=>{
   
document.querySelector(".dispaly").style.display="none"
document.querySelector(".rodape").style.display="block"
document.querySelector(".find").style.display="none"
document.querySelector(".init").style.display="none" 

 
window.print()

var seta = setInterval(() => { 
 document.querySelector(".rodape").style.display="none"
 location.reload()
 localStorage.clear()
 
 
 clearInterval(seta)

    
}, 3000);
    
   
    
   



})


