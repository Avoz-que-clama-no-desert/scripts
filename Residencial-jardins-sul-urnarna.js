document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
 });  
 document.addEventListener('keydown', function(e) {
      if (e.key === 'F12' ) { // F12 e Ctrl+Shift+I (Inspecionar)
    e.preventDefault();
  }
});
// verificar se ta conectado com a internet
if (navigator.onLine) {
    
  } else {
    alert('Os dados de programação só é Carregado com a internet!');
  }
//**************************************** */


import { eleitores } from "./eleitores.js";
import { hoje } from "./urnadata.js";
import { senha } from "./eleitores.js";
import { titulo } from "./eleitores.js";
import { remetente } from "./eleitores.js";
import { cnpj } from "./eleitores.js";

document.querySelector(".h2titulo").textContent=titulo
document.querySelector(".h2remete").textContent=remetente
document.querySelector(".h2cnpj").textContent=cnpj
var qvotaram =[]
// aqui busca o objeto do storege
const arrayRecuperadoString = localStorage.getItem('votos');

//aqui transfor o objeto JSON para array
const meuArrayRecuperado = JSON.parse(arrayRecuperadoString);

// voltando array para o principal
if (meuArrayRecuperado == null) {
    
} else {
  qvotaram= meuArrayRecuperado  
}

var gravarposi=qvotaram.length;
var cont= parseInt(gravarposi) 
var posi=0 


/******************************************************** */

var hor=0
var minu=0
setInterval(() => {
  var dat = new Date()
  hor = dat.getHours()
 minu = dat.getMinutes()

}, 8);








var confirmaeleitor = document.querySelector(".confirmaeleitor")


// iniciei as votação
document.querySelector(".init").addEventListener("click",()=>{
   
    document.querySelector(".eleitor").style.display="block"
    document.querySelector(".controleh3").textContent="Inicio de votação; "+hoje
   
    document.querySelector(".init").style.display="none"  
})
//********************************************** */

// aqui entra para finalizar eleições
var audio = document.querySelector(".audio")
addEventListener("keydown", (event) => {
    if (event.key == "Home") {
        var senha1 = prompt("Digite senha do desenvolvedor")
        if (senha1==senha) {
    /***************final de votação******************************* */       
    document.querySelector(".eleitor").style.display="none"
    document.querySelector(".contener").style.display="none"
    document.querySelector(".controle").style.display="block"
  


    resutado()

        }else{
            alert("Senha do desenvovedor incorreta!")
        }

    }
   
 })/************************************************************* */

var espaco = "    "


var eleit = ""
var blo=""
var apt = ""
// aqui confirma o eleitor
confirmaeleitor.addEventListener("click",() =>{
 eleit=document.querySelector(".iput").value;


var confere = eleitores.find(eleitores =>eleitores.nome===eleit)
blo =confere.bloco;
apt = confere.ap

var javotou = qvotaram.find(qvotaram =>qvotaram.nome===eleit)

if (javotou == undefined) {
    if (  confere == undefined) {
    alert("Eleitor Não habilitado para votar")
    

} else {
var Hora = hor+":"+minu

    document.querySelector(".eleitor").style.display="none"
    document.querySelector(".contener").style.display="block"
    

   var votaram = {nome:eleit,bloco:blo,ap:apt,hora:Hora}
    
    qvotaram.push(votaram)
        // converter array para string
        var arraystring =JSON.stringify(qvotaram)


        // salvar no Storege
        localStorage.setItem('votos',arraystring)
  
        document.querySelector(".iput").value=""
         gravarposi++
        if (meuArrayRecuperado == null) {
      
        } else {
        qvotaram= meuArrayRecuperado
         
        }
     

    
    
    document.querySelector(".iput").value=""
    
  
}

} else {
   alert("eleitor"+";        "+eleit+";     "+"já votor as"+"   "+ hor+":"+minu ) 
   document.querySelector(".iput").value=""
} 





})
/*************************************************************** */

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
        imag1.style. backgroundColor="green";
        imag2.style. backgroundColor="red";
        imag3.style.backgroundColor="red";
        imag4.style.backgroundColor="red";
        imag1.disabled=true
        imag2.disabled=true
        imag3.disabled=true
        imag4.disabled=true
        voto=localStorage.getItem(chapa1)
        var vote1=parseInt(voto) 
        vote1=parseInt(vote1)+1
        localStorage.setItem(chapa1,vote1)
        chapa=chapa1
       
        
    })
    imag2.addEventListener("click",()=>{
        imag1.style.backgroundColor="red";
        imag2.style.backgroundColor="green";
        imag3.style.backgroundColor="red";
        imag4.style.backgroundColor="red";
        imag1.disabled=true
        imag2.disabled=true
        imag3.disabled=true
        imag4.disabled=true
        voto=localStorage.getItem(chapa2)
        var vote2= voto
        vote2=parseInt(vote2)+1
        localStorage.setItem(chapa2,vote2)
        chapa=chapa2
        

    })
    imag3.addEventListener("click",()=>{
        imag2.style.backgroundColor="red";
        imag3.style.backgroundColor="green";
        imag1.style.backgroundColor="red";
        imag4.style.backgroundColor="red";
        voto=localStorage.getItem(chapa3)
        var vote3= voto
        vote3=parseInt(vote3)+1
        localStorage.setItem(chapa3,vote3)
        chapa=chapa3
       

    })
    imag4.addEventListener("click",()=>{
        imag2.style.backgroundColor="red";
        imag3.style.backgroundColor="red";
        imag1.style.backgroundColor="red";
        imag4.style.backgroundColor="green";
        imag1.disabled=true
        imag2.disabled=true
        imag3.disabled=true
        imag4.disabled=true
        voto=localStorage.getItem(chapa4)
        var vote4= voto
        vote4=parseInt(vote4)+1
        localStorage.setItem(chapa4,vote4)
        chapa=chapa4
        

    })

    // aqui confimar o voto finalizando
document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector(".eleitor").style.display="block"
    document.querySelector(".contener").style.display="none"
    imag1.style.display="block" 
    imag2.style.display="block" 
    imag3.style.display="block" 
    imag4.style.display="block"
    imag1.disabled=false
    imag2.disabled=false
    imag3.disabled=false
    imag4.disabled=false
    imag1.style.backgroundColor="aqua";
    imag2.style.backgroundColor="aqua";
    imag3.style.backgroundColor="aqua";
    imag4.style.backgroundColor="aqua";

    audio.src="https://avoz-que-clama-no-desert.github.io/audios/confirma-urna.mp3"
    audio.play() 

localStorage.setItem(eleit,chapa)
//localStorage.setItem(voto,0)



})

// aqui da o resultado do eleitor
function resutado(){
    

    var controav1=localStorage.getItem(chapa1) 
    var controav2=localStorage.getItem(chapa2)
    var controav3=localStorage.getItem(chapa3)
    var controav4=localStorage.getItem(chapa4)


    if (controav1 > controav2) {
        // 1 maior 2 
          if (controav1 > controav3) {
             if (controav1 > controav2) {
                  // 1 lugar
                 document.querySelector(".contropn1").innerHTML="Campeão ("+chapa1+ "   "+controav1+")"
             } else {
                  // 2 lugar
                 document.querySelector(".contropn2").innerHTML=chapa1+ "   "+controav1  
             }
             
          } else {
            
             if (controav1 > controav4) {
                // 2 lugar
                 document.querySelector(".contropn2").innerHTML=chapa1+ "   "+controav1
             } else {
                 // 3 lugar
                 document.querySelector(".contropn3").innerHTML=chapa1+ "   "+controav1 
             }
          }    
             
         } else {
         // aqui foi 1 menor que 2 
             if (controav1 > controav3) {
             // 1 maior 3
     
                 if (controav1 > controav4) {
                     // aqui se ele for maior é 2 lugar
                     document.querySelector(".contropn2").innerHTML=chapa1+ "   "+controav1
                 } else {
                     // aqui se ele for maior é 3 lugar
                    document.querySelector(".contropn3").innerHTML=chapa1+ "   "+controav1
                 }
             } else {
              // 1menor 3
     
                 if (controav1 > controav4) {
                  // 1 maior 4
                  // aqui se ele for maior é 3 lugar
                  document.querySelector(".contropn3").innerHTML=chapa1+ "   "+controav1
                     
                 } else {
                 // 1 menor 4    
                  // aqui se ele for maior é 4 lugar
                  document.querySelector(".contropn4").innerHTML=chapa1+ "   "+controav1   
                 }
                  
             } 
         }
/************************************************************************* */
         if (controav2 > controav1) {
            // 1 maior 2 
              if (controav2 > controav3) {
                 if (controav2 > controav4) {
                     // 1 lugar
                     document.querySelector(".contropn1").innerHTML="Campeão ("+chapa2+ "   "+controav2+")"
                 } else {
                      // 2 lugar
                     document.querySelector(".contropn2").innerHTML=chapa2+ "   "+controav2  
                 }
                 
              } else {
                
                 if (controav2 > controav4) {
                     // 2 lugar
                     document.querySelector(".contropn2").innerHTML=chapa2+ "   "+controav2
                 } else {
                     // 3 lugar
                     document.querySelector(".contropn3").innerHTML=chapa2+ "   "+controav2 
                 }
              }    
                 
             } else {
             // aqui foi 1 menor que 2 
                 if (controav2 > controav3) {
                 // 1 maior 3
         
                     if (controav2 > controav4) {
                        // aqui se ele for maior é 2 lugar
                         document.querySelector(".contropn2").innerHTML=chapa2+ "   "+controav2
                     } else {
                         // aqui se ele for maior é 3 lugar
                        document.querySelector(".contropn3").innerHTML=chapa2+ "   "+controav2
                     }
                 } else {
                  // 1menor 3
         
                     if (controav2 > controav4) {
                      // 1 maior 4
                      // aqui se ele for maior é 3 lugar
                      document.querySelector(".contropn3").innerHTML=chapa2+ "   "+controav2
                         
                     } else {
                     // 1 menor 4    
                     // aqui se ele for maior é 4 lugar
                      document.querySelector(".contropn4").innerHTML=chapa2+ "   "+controav2  
                     }
                      
                 } 
             }
        /*********************************************************** */     
        if (controav3 > controav1) {
            // 1 maior 2 
              if (controav3 > controav2) {
                 if (controav3 > controav4) {
                     // 1 lugar
                     document.querySelector(".contropn1").innerHTML="Campeão ("+chapa3+ "   "+controav3+")"
                 } else {
                      // 2 lugar
                     document.querySelector(".contropn2").innerHTML=chapa3+ "   "+controav3  
                 }
                 
              } else {
                
                 if (controav3 > controav4) {
                     // 2 lugar
                     document.querySelector(".contropn2").innerHTML=chapa3+ "   "+controav3
                 } else {
                     // 3 lugar
                     document.querySelector(".contropn3").innerHTML=chapa3+ "   "+controav3
                 }
              }    
                 
             } else {
             // aqui foi 1 menor que 2 
                 if (controav3 > controav2) {
                 // 1 maior 3
         
                     if (controav3 > controav4) {
                        // aqui se ele for maior é 2 lugar
                         document.querySelector(".contropn2").innerHTML=chapa3+ "   "+controav3
                     } else {
                         // aqui se ele for maior é 3 lugar
                        document.querySelector(".contropn3").innerHTML=chapa3+ "   "+controav3
                     }
                 } else {
                  // 1menor 3
         
                     if (controav3 > controav4) {
                      // 1 maior 4
                      // aqui se ele for maior é 3 lugar
                      document.querySelector(".contropn3").innerHTML=chapa3+ "   "+controav3
                         
                     } else {
                     // 1 menor 4    
                     // aqui se ele for maior é 4 lugar
                      document.querySelector(".contropn4").innerHTML=chapa3+ "   "+controav3   
                     }
                      
                 } 
             }
         /************************************************************************ */    
         if (controav4 > controav1) {
            // 1 maior 2 
              if (controav4 > controav2) {
                 if (controav4 > controav3) {
                     // 1 lugar
                     document.querySelector(".contropn1").innerHTML="Campeão ("+chapa4+ "   "+controav4+")"
                 } else {
                      // 2 lugar
                     document.querySelector(".contropn2").innerHTML=chapa4+ "   "+controav4  
                 }
                 
              } else {
                
                 if (controav4 > controav3) {
                     // 2 lugar
                     document.querySelector(".contropn2").innerHTML=chapa4+ "   "+controav4
                 } else {
                     // 3 lugar
                     document.querySelector(".contropn3").innerHTML=chapa4+ "   "+controav4 
                 }
              }    
                 
             } else {
             // aqui foi 1 menor que 2 
                 if (controav4 > controav2) {
                 // 1 maior 3
         
                     if (controav4 > controav3) {
                        // aqui se ele for maior é 2 lugar
                         document.querySelector(".contropn2").innerHTML=chapa4+ "   "+controav4
                     } else {
                         // aqui se ele for maior é 3 lugar
                        document.querySelector(".contropn3").innerHTML=chapa4+ "   "+controav4
                     }
                 } else {
                  // 1menor 3
         
                     if (controav4 > controav3) {
                      // 1 maior 4
                      // aqui se ele for maior é 3 lugar
                      document.querySelector(".contropn3").innerHTML=chapa4+ "   "+controav4
                         
                     } else {
                     // 1 menor 4    
                     // aqui se ele for maior é 4 lugar
                      document.querySelector(".contropn4").innerHTML=chapa4+ "   "+controav4   
                     }
                      
                 } 
             }
     
/************************************************************** */
   
}

//******************************************************************************** */

//cadastra chapa
var nuchap =0
addEventListener("keydown", (ev)=>{
  if (ev.key=="End") {
     nuchap++
    if (nuchap>3) {
        location.reload()
    }
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


// aqui finaliza eleições
document.querySelector(".find").addEventListener("click",()=>{
   
document.querySelector(".dispaly").style.display="none"
document.querySelector(".rodape").style.display="block"
document.querySelector(".find").style.display="none"
document.querySelector(".init").style.display="none" 
document.querySelector(".controleh4").textContent="Final de votação; "+"  hrs:"+hor+":"+minu
cont=qvotaram.length;
var ipri = setInterval(() => {
    if (cont==posi) {
        
        
        clearInterval(ipri)
        var seta = setInterval(() => { 
            window.print()
            document.querySelector(".rodape").style.display="none"
            location.reload()
            localStorage.clear()
    
    
            clearInterval(seta)
            
            posi=0
       
         }, 3000);
          
      
    } else {
        
        
        
       
    }

    const pai = document.querySelector(".controle")
    const p = document.createElement("p")
    p.textContent="Nome: "+qvotaram[posi].nome+espaco+"bloco"+espaco+qvotaram[posi].bloco+espaco+"ap"+qvotaram[posi].ap+espaco+"hora;"+espaco+qvotaram[posi].hora
    
       pai.appendChild(p)
       posi++
 
    }, 100);



    
   
    
   



})


