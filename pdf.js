import { produto } from "./produtos.js"


var btn = document.querySelector(".btn")
var btn1 = document.querySelector(".btn1")
var v1 = document.querySelector(".v1")
var v2 = document.querySelector(".v2")
var v3 = document.querySelector(".v3")
var v4 = document.querySelector(".v4")
var v5 = document.querySelector(".v5")
var vtal = document.querySelector(".vtal")
document.querySelector(".num").textContent="Documento"+" Nº  "+ Math.random()*1000










var cont = 0

btn1.addEventListener("click",()=>{
 var busca = document.querySelector(".inputpes").value
 var unid = document.querySelector(".unidade").value
 cont++
 var soma = ""
 

 



  
  if (busca =="") {
    alert("caixa de pesquisa estar em branco")
  } else {
    const buscapro = produto.find(produto => produto.pro === busca); 
    
      if (buscapro == undefined) {
        document.querySelector(".inputpes").value=""
        document.querySelector(".unidade").value=""
        alert("Produto não encontrado")
        
      } else {
        if (cont == 1) {
           document.querySelector(".nomepro1").textContent=buscapro.pro
           document.querySelector(".precopro1").textContent=buscapro.pre
           document.querySelector(".unidpro1").textContent=document.querySelector(".unidade").value
           
           soma = v1.textContent=buscapro.pre*document.querySelector(".unidade").value
          vtal.textContent=parseFloat(soma)+",00"
  
        }
        if (cont==2) {
          document.querySelector(".nomepro2").textContent=buscapro.pro
          document.querySelector(".precopro2").textContent=buscapro.pre
          document.querySelector(".unidpro2").textContent=document.querySelector(".unidade").value
        soma= parseInt(v2.textContent=buscapro.pre*document.querySelector(".unidade").value)+parseInt(v1.textContent)
          vtal.textContent=parseFloat(soma)+",00"
        }
        document.querySelector(".inputpes").value=""
        document.querySelector(".unidade").value=""
     }
  }

  

})
  







btn.addEventListener("click",(evt)=>{
  
    document.querySelector(".client").textContent=document.querySelector(".nome").value
   document.querySelector(".pesq").style.display="none"
  
    document.querySelector(".btn").style.display="none"
    var display = setInterval(() => {
        document.querySelector(".btn").style.display="block"
        document.querySelector(".pesq").style.display="block"
        clearInterval(display)
    }, 3000);

     window.print()
})