var data = new Date
var dia = data.getDate()
var hor = data.getHours()


var audio1 =[
    "",//0
    "",//1
    "",//2
    "",//3
    "",//4
    "",//5
    "",//6
    "",//7
    "",//8
    "",//9
    "",//10
    "",//11
    "",//12
    "",//13
    "",//14
    "",//15
    "",//16
    "",//17
    "",//18
    "",//19
    "",//20
    "h",//21
    "",//22
    "",//23
    "",//24
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio17.mp3",//25
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio18.mp3",//26
    "",//27
    "",//28
    "",//29
    "",//30
    "",//31


]
var audio2 =[
    "",//0
    "",//1
    "",//2
    "",//3
    "",//4
    "",//5
    "",//6
    "",//7
    "",//8
    "",//9
    "",//10
    "",//11
    "",//12
    "",//13
    "",//14
    "",//15
    "",//16
    "",//17
    "",//18
    "",//19
    "",//20
    "h",//21
    "",//22
    "",//23
    "",//24
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio17.mp3",//25
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio19.mp3",//26
    "",//27
    "",//28
    "",//29
    "",//30
    "",//31


]

var audio=""
if (dia=25) {
    if (hor<11) {
        audio=audio1 
     } else {
        audio=audio2 
     }
      
}
if (dia=26) {
if (hor<11) {
   audio=audio1 
} else {
   audio=audio2 
}
}






export {audio}

