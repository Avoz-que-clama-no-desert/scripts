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
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio11.mp3",//17
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio12.mp3",//18
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio14.mp3",//19
    "",//20
    "",//21
    "",//22
    "",//23
    "",//24
    "",//25
    "",//26
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
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio11.mp3",//17
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio13.mp3",//18
    "",//19
    "",//20
    "",//21
    "",//22
    "",//23
    "",//24
    "",//25
    "",//26
    "",//27
    "",//28
    "",//29
    "",//30
    "",//31


]
var audio
if (dia==18) {
    if (hor<=11) {
      audio=audio1  
    }
    if (hor>=12) {
       audio=audio2 
    }
    
}else{
    audio=audio1
}

export {audio}
