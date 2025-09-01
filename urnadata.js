var data = new Date()
var dia = data.getDate()
var m = data.getMonth()
var mes = m+1
var ano = data.getFullYear()
var hor = data.getHours()
var minu =data.getMinutes()
var meses=[
    "",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Otubro",
    "Novembro",
    "Dezembro",


]

var hoje="Data;  "+ dia+"  /  "+meses[mes]+"  /  "+ano + "     "+"hrs"+hor+":"+minu

export {hoje}
