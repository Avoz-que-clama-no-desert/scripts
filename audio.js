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
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio15.mp3",//20
    "https://avoz-que-clama-no-desert.github.io/audios/deuteronomio16-1-17.mp3",//21
    "",//22
    "",//23
    "",//24
    "https://s.bibliaonline.com.br/audio/play/1/acf/Deut/16/18-22/azure/en-US-OnyxTurboMultilingualNeural/audio.mp3",//25
    "",//26
    "",//27
    "",//28
    "",//29
    "",//30
    "",//31


]
var audio2="https://s.bibliaonline.com.br/audio/play/1/acf/Deut/17/_/azure/en-US-OnyxTurboMultilingualNeural/audio.mp3"

if (dia =25) {
  if (hor<=12) {
 var audio = audio1   
}else{
    var audio = audio2   
}  
}




export {audio}
