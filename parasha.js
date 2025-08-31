var data = new Date();
var dia= data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();
var hor = data.getHours()

var parasha=""

var parasha4931=[
  "Parashá 49",
  " dia 31",
  "Deuteronômio 21 v 10 ate 23",
  "10 Quando saíres à peleja contra os teus inimigos, e o Senhor teu Deus os entregar nas tuas mãos, e tu deles levares prisioneiros,",
  "¹¹ E tu entre os presos vires uma mulher formosa à vista, e a cobiçares, e a tomares por mulher, ",
  "¹² Então a trarás para a tua casa; e ela rapará a cabeça e cortará as suas unhas. ",
  "¹³ E despirá o vestido do seu cativeiro, e se assentará na tua casa, e chorará a seu pai e a sua mãe um mês inteiro; e depois chegarás a ela, e tu serás seu marido e ela tua mulher. ",
  "¹⁴ E será que, se te não contentares dela, a deixarás ir à sua vontade; mas de modo algum a venderás por dinheiro, nem a tratarás como escrava, pois a tens humilhado. ",
  "¹⁵ Quando um homem tiver duas mulheres, uma a quem ama e outra a quem despreza, e a amada e a desprezada lhe derem filhos, e o filho primogênito for da desprezada, ",
  "¹⁶ Será que, no dia em que fizer herdar a seus filhos o que tiver, não poderá dar a primogenitura ao filho da amada, preferindo-o ao filho da desprezada, que é o primogênito. ",
  "¹⁷ Mas ao filho da desprezada reconhecerá por primogênito, dando-lhe dobrada porção de tudo quanto tiver; porquanto aquele é o princípio da sua força, o direito da primogenitura é dele. ",
  "¹⁸ Quando alguém tiver um filho obstinado e rebelde, que não obedecer à voz de seu pai e à voz de sua mãe, e, castigando-o eles, lhes não der ouvidos, ",
  "¹⁹ Então seu pai e sua mãe pegarão nele, e o levarão aos anciãos da sua cidade, e à porta do seu lugar; ",
  "²⁰ E dirão aos anciãos da cidade: Este nosso filho é rebelde e obstinado, não dá ouvidos à nossa voz; é um comilão e um beberrão. ",
  "²¹ Então todos os homens da sua cidade o apedrejarão, até que morra; e tirarás o mal do meio de ti, e todo o Israel ouvirá e temerá. ",
  "²² Quando também em alguém houver pecado, digno do juízo de morte, e for morto, e o pendurares num madeiro, ",
  "²³ O seu cadáver não permanecerá no madeiro, mas certamente o enterrarás no mesmo dia; porquanto o pendurado é maldito de Deus; assim não contaminarás a tua terra, que o Senhor teu Deus te dá em herança.",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  
  "",
  "",
  "",
  "",
  "",
  "",//63

]
var parasha491 =[
  "Parashá 49",
  "dia 1",
  "Deuteronômio 22",
  "¹ Vendo extraviado o boi ou ovelha de teu irmão, não te desviarás deles; restituí-los-ás sem falta a teu irmão. ",
  "² E se teu irmão não estiver perto de ti, ou não o conheceres, recolhê-los-ás na tua casa, para que fiquem contigo, até que teu irmão os busque, e tu lhos restituirás. ",
  "³ Assim também farás com o seu jumento, e assim farás com as suas roupas; assim farás também com toda a coisa perdida, que se perder de teu irmão, e tu a achares; não te poderás omitir. ",
  "⁴ Se vires o jumento que é de teu irmão, ou o seu boi, caídos no caminho, não te desviarás deles; sem falta o ajudarás a levantá-los. ",
  "⁵ Não haverá traje de homem na mulher, e nem vestirá o homem roupa de mulher; porque, qualquer que faz isto, abominação é ao Senhor teu Deus.",
  "⁶ Quando encontrares pelo caminho um ninho de ave numa árvore, ou no chão, com passarinhos, ou ovos, e a mãe posta sobre os passarinhos, ou sobre os ovos, não tomarás a mãe com os filhotes; ",
  "⁷ Deixarás ir livremente a mãe, e os filhotes tomarás para ti; para que te vá bem e para que prolongues os teus dias. ",
  "⁸ Quando edificares uma casa nova, farás um parapeito, no eirado, para que não ponhas culpa de sangue na tua casa, se alguém de algum modo cair dela. ",
  "⁹ Não semearás a tua vinha com diferentes espécies de semente, para que não se degenere o fruto da semente que semeares, e a novidade da vinha. ",
  "¹⁰ Com boi e com jumento não lavrarás juntamente. ",
  "¹¹ Não te vestirás de diversos estofos de lã e linho juntamente. ",
  "¹² Franjas porás nas quatro bordas da tua manta, com que te cobrires. ",
  "¹³ Quando um homem tomar mulher e, depois de coabitar com ela, a desprezar, ",
  "¹⁴ E lhe imputar coisas escandalosas, e contra ela divulgar má fama, dizendo: Tomei esta mulher, e me cheguei a ela, porém não a achei virgem; ",
  "¹⁵ Então o pai da moça e sua mãe tomarão os sinais da virgindade da moça, e levá-los-ão aos anciãos da cidade, à porta; ",
  "¹⁶ E o pai da moça dirá aos anciãos: Eu dei minha filha por mulher a este homem, porém ele a despreza;",
  "¹⁷ E eis que lhe imputou coisas escandalosas, dizendo: Não achei virgem a tua filha; porém eis aqui os sinais da virgindade de minha filha. E estenderão a roupa diante dos anciãos da cidade. ",
  "¹⁸ Então os anciãos da mesma cidade tomarão aquele homem, e o castigarão. ",
  "¹⁹ E o multarão em cem siclos de prata, e os darão ao pai da moça; porquanto divulgou má fama sobre uma virgem de Israel. E lhe será por mulher, em todos os seus dias não a poderá despedir.",
  "²⁰ Porém se isto for verdadeiro, isto é, que a virgindade não se achou na moça, ",
  "²¹ Então levarão a moça à porta da casa de seu pai, e os homens da sua cidade a apedrejarão, até que morra; pois fez loucura em Israel, prostituindo-se na casa de seu pai; assim tirarás o mal do meio de ti. ",
  "²² Quando um homem for achado deitado com mulher que tenha marido, então ambos morrerão, o homem que se deitou com a mulher, e a mulher; assim tirarás o mal de Israel. ",
  "²³ Quando houver moça virgem, desposada, e um homem a achar na cidade, e se deitar com ela, ",
  "²⁴ Então trareis ambos à porta daquela cidade, e os apedrejareis, até que morram; a moça, porquanto não gritou na cidade, e o homem, porquanto humilhou a mulher do seu próximo; assim tirarás o mal do meio de ti. ",
  "²⁵ E se algum homem no campo achar uma moça desposada, e o homem a forçar, e se deitar com ela, então morrerá só o homem que se deitou com ela; ",
  "²⁶ Porém à moça não farás nada. A moça não tem culpa de morte; porque, como o homem que se levanta contra o seu próximo, e lhe tira a vida, assim é este caso. ",
  "²⁷ Pois a achou no campo; a moça desposada gritou, e não houve quem a livrasse. ",
  "²⁸ Quando um homem achar uma moça virgem, que não for desposada, e pegar nela, e se deitar com ela, e forem apanhados, ",
  "²⁹ Então o homem que se deitou com ela dará ao pai da moça cinquenta siclos de prata; e porquanto a humilhou, lhe será por mulher; não a poderá despedir em todos os seus dias. ",
  "³⁰ Nenhum homem tomará a mulher de seu pai, nem descobrirá a nudez de seu pai. ",
  "",
  "*************fim**********************",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  
  "",
  "",
  "",
  "",
  "",
  "",//63

]
var parasha492 = [
  "Parashá 49",
  "dia 2",
  "Deuteronômio 23",
  "¹ Aquele a quem forem trilhados os testículos, ou cortado o membro viril, não entrará na congregação do Senhor. ",
  "² Nenhum bastardo entrará na congregação do Senhor; nem ainda a sua décima geração entrará na congregação do Senhor. ",
  "³ Nenhum amonita nem moabita entrará na congregação do Senhor; nem ainda a sua décima geração entrará na congregação do Senhor eternamente. ",
  "⁴ Porquanto não saíram com pão e água, a receber-vos no caminho, quando saíeis do Egito; e porquanto alugaram contra ti a Balaão, filho de Beor, de Petor, de Mesopotâmia, para te amaldiçoar. ",
  "⁵ Porém o Senhor teu Deus não quis ouvir Balaão; antes o Senhor teu Deus trocou em bênção a maldição; porquanto o Senhor teu Deus te amava. ",
  "⁶ Não lhes procurarás nem paz nem bem em todos os teus dias para sempre. ",
  "⁷ Não abominarás o edomeu, pois é teu irmão; nem abominarás o egípcio, pois estrangeiro foste na sua terra. ",
  "⁸ Os filhos que lhes nascerem na terceira geração, cada um deles entrará na congregação do Senhor. ",
  "⁹ Quando o exército sair contra os teus inimigos, então te guardarás de toda a coisa má. ",
  "¹⁰ Quando entre ti houver alguém que, por algum acidente noturno, não estiver limpo, sairá fora do arraial; não entrará no meio dele. ",
  "¹¹ Porém será que, declinando a tarde, se lavará em água; e, em se pondo o sol, entrará no meio do arraial. ",
  "¹² Também terás um lugar fora do arraial, para onde sairás. ",
  "¹³ E entre as tuas armas terás uma pá; e será que, quando estiveres assentado, fora, então com ela cavarás e, virando-te, cobrirás o que defecaste. ",
  "¹⁴ Porquanto o Senhor teu Deus anda no meio de teu arraial, para te livrar, e entregar a ti os teus inimigos; pelo que o teu arraial será santo, para que ele não veja coisa feia em ti, e se aparte de ti. ",
  "¹⁵ Não entregarás a seu senhor o servo que fugiu do seu senhor para se acolher a ti; ",
  "¹⁶ Contigo ficará, no meio de ti, no lugar que escolher em alguma das tuas portas, onde lhe agradar; não o oprimirás. ",
  "¹⁷ Não haverá prostituta dentre as filhas de Israel; nem haverá sodomita dentre os filhos de Israel. ",
  "¹⁸ Não trarás o salário da prostituta nem preço de um sodomita à casa do Senhor teu Deus por qualquer voto; porque ambos são igualmente abominação ao Senhor teu Deus. ",
  "¹⁹ A teu irmão não emprestarás com juros: juros em dinheiro, juros em comida, juros em qualquer coisa que se empreste com juros. ",
  "²⁰ Ao estranho emprestarás com juros, porém a teu irmão não emprestarás com juros; para que o Senhor teu Deus te abençoe em tudo que puseres a tua mão, na terra a qual vais a possuir. ",
  "²¹ Quando fizeres algum voto ao Senhor teu Deus, não tardarás em cumpri-lo; porque o Senhor teu Deus certamente o requererá de ti, e em ti haverá pecado. ",
  "²² Porém, abstendo-te de votar, não haverá pecado em ti. ",
  "²³ O que saiu dos teus lábios guardarás, e cumprirás, tal como voluntariamente votaste ao Senhor teu Deus, declarando-o pela tua boca. ",
  "²⁴ Quando entrares na vinha do teu próximo, comerás uvas conforme ao teu desejo até te fartares, porém não as porás no teu cesto. ",
  "²⁵ Quando entrares na seara do teu próximo, com a tua mão arrancarás as espigas; porém não porás a foice na seara do teu próximo. ",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  
  "",
  "",
  "",
  "",
  "",
  "",//63

]

var parasha4830 =[
    "Parashá 48",
    "dia 30",
    "Shabbat Shalom á todos",
    "Hoje as 13:00 hrs ",
    "Reunião na congregação",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    
    "",
    "",
    "",
    "",
    "",
    "",//63

]









 
if (dia == 31) {
  parasha=parasha4931
}
if (dia==1) {
  parasha=parasha491
}
if (dia==2) {
  parasha=parasha492
}
  

  
   

export {parasha}






