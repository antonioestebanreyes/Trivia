const D=document
const consultaTrivia={
  conocimientoGeneralMultiple:'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple',
 arte_Multiple:"https://opentdb.com/api.php?amount=10&category=25&difficulty=easy&type=multiple",
 cine_multiple:"https://opentdb.com/api.php?amount=10&category=11&type=multiple",
 musiaca_multiple:"https://opentdb.com/api.php?amount=10&category=12&type=multiple",
 deporte_Pregunata_directa:"https://opentdb.com/api.php?amount=10&category=12&type=multiple",
 Video_juego_Pregunata_cerrada:"https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=boolean"
}
const url='https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple'



  

const Pregunta =document.querySelector(".PreguntaDetrivia")
const Next= D.querySelector(".flechaIzq","#fleIz")
const Ul=D.querySelector("ul")
const liuno=D.querySelector(".liuno")
const lidos=D.querySelector(".lidos")
const litres=D.querySelector(".litres")
const licuatro=D.querySelector(".licuatro")
const Progreso=D.querySelector(".Progreso")
const salir =D.querySelector(".salir")






const consulta= ()=>{
    fetch(url)
.then((respuesta)=>respuesta.json())
.then((res)=>{
  
  let respuestaDelaTrivia=res.results
  respuestaDelaTrivia.forEach(element => {
    respuesta.push(element)
    console.log(respuestaDelaTrivia);
    
  });
  let resTrivi=localStorage.setItem("respuesta",JSON.stringify(respuesta))
    let consultaDeTrivia = localStorage.getItem('respuesta');
    console.log(consultaDeTrivia);

  alert("Empezemos")
  TAnimacionProgreso()
  PainPregunta(respuesta)
  PainPregunataCorrecta (respuesta)
  PainIncorrecta (respuesta)

  siguiente(triviaPregunta)
 

 
})
.catch((erro)=>{
  console.log("no cargo bien la pagina",erro)
}
)
 }

  consulta()

const respuesta= []; 

console.log(respuesta);
 let respuesaDeUsuarioBien=[]
 let respuesaDeUsuarioIncorrectas=[]
let triviaPregunta=[]
let triviaCorrecta=[]
console.log("va",triviaCorrecta);
 let triviaIncorrecta=[]
 

Next.addEventListener("click",next)
let pos=-0
function next() {
  let increpos=pos++
   NextCorrecta(increpos) 
  alert(increpos)
 
  switch (increpos) {
    case 0:
      let consultaPregunata0 = localStorage.getItem('pregunataDeTrivia');
  let parseConsultaDeTrivia=JSON.parse(consultaPregunata0)
    console.log("este es el pregunts",parseConsultaDeTrivia);
    let P0=parseConsultaDeTrivia[0]
 Pregunta.innerHTML=`${P0}`
 
      break;
    case 1: 
    let consultaPregunata1 = localStorage.getItem('pregunataDeTrivia');
  let parseConsultaDeTrivia1=JSON.parse(consultaPregunata1)
    console.log("este es el pregunts",parseConsultaDeTrivia1);
    let P1=parseConsultaDeTrivia1[1]
 Pregunta.innerHTML=`${P1}`
    case 2: 
    let consultaPregunata2 = localStorage.getItem('pregunataDeTrivia');
    let parseConsultaDeTrivia2=JSON.parse(consultaPregunata2)
      console.log("este es el pregunts",parseConsultaDeTrivia2);
      let P2=parseConsultaDeTrivia2[2]
   Pregunta.innerHTML=`${P2}`
      break; 
    case 3:
      let consultaPregunata3 = localStorage.getItem('pregunataDeTrivia');
      let parseConsultaDeTrivia3=JSON.parse(consultaPregunata3)
        console.log("este es el pregunts",parseConsultaDeTrivia3);
        let P3=parseConsultaDeTrivia3[3]
     Pregunta.innerHTML=`${P3}`
      break;
      case 4:
        let consultaPregunata4=localStorage.getItem('pregunataDeTrivia');
        let parseConsultaDeTrivia4=JSON.parse(consultaPregunata4)
        let P4=parseConsultaDeTrivia4[4]
        Pregunta.innerHTML=`${P4}`
        break;
        case 5:
          let consultaPregunta5=localStorage.getItem("pregunataDeTrivia");
          let parseConsultaDeTrivia5=JSON.parse(consultaPregunta5)
          let P5=parseConsultaDeTrivia5[5]
          Pregunta.innerHTML=`${P5}`
          break;
          case 6:
          let consultaPregunata6=localStorage.getItem("pregunataDeTrivia");
          let parseConsultaDeTrivia6=JSON.parse(consultaPregunata6)
          let P6=parseConsultaDeTrivia6[6]
          Pregunta.innerHTML=`${P6}`

          break;
          case 7:
          let consultaPregunata7=localStorage.getItem("pregunataDeTrivia");
          let parseConsultaDeTrivia7=JSON.parse(consultaPregunata7)
          let P7=parseConsultaDeTrivia7[7]
          Pregunta.innerHTML=`${P7}`

          break;
          case 8:
          let consultaPregunata8=localStorage.getItem("pregunataDeTrivia");
          let parseConsultaDeTrivia8=JSON.parse(consultaPregunata8)
          let P8=parseConsultaDeTrivia8[8]
          Pregunta.innerHTML=`${P8}`
          break;
          case 8:
          let consultaPregunata9=localStorage.getItem("pregunataDeTrivia");
          let parseConsultaDeTrivia9=JSON.parse(consultaPregunata9)
          let P9=parseConsultaDeTrivia9[9]
          Pregunta.innerHTML=`${P9}`
    default:

      alert("total de pregunata")
  }
}
 console.log(pos);
 const PainPregunta=(respuesta)=>{
  
let data=respuesta
 
  for (let i = 0; i < data.length; i++) {
   triviaPregunta.push(data[i].question)
  
  }
  let resTrivi=localStorage.setItem("pregunataDeTrivia",JSON.stringify(triviaPregunta))
    let consultaPregunata = localStorage.getItem('pregunataDeTrivia');
    
    
  
  let parseConsultaDeTrivia=JSON.parse(consultaPregunata)
    console.log("este es el pregunts",parseConsultaDeTrivia);
    let P1=parseConsultaDeTrivia[0]
 

 Pregunta.innerHTML=`${P1}`
 
  
 
 
}
const NextCorrecta=(increpos)=>{

 

  
  switch (increpos) {
    case 0:
      let consultaPregunata0 = localStorage.getItem('respuesta1');
      let parseConsultaDeTrivia0=JSON.parse(consultaPregunata0)
        console.log("este es el pregunts",parseConsultaDeTrivia0);
        let P0=parseConsultaDeTrivia0[0]
     liuno.innerHTML=`${P0}`
 
      break;
    case 1: 
    let consultaPregunata1 = localStorage.getItem('respuesta1');
  let parseConsultaDeTrivia1=JSON.parse(consultaPregunata1)
    console.log("este es el pregunts",parseConsultaDeTrivia1);
    let P1=parseConsultaDeTrivia1[1]
 liuno.innerHTML=`${P1}`
    case 2: 
    let consultaPregunata2 = localStorage.getItem('respuesta1');
    let parseConsultaDeTrivia2=JSON.parse(consultaPregunata2)
      console.log("este es el pregunts",parseConsultaDeTrivia2);
      let P2=parseConsultaDeTrivia2[2]
   liuno.innerHTML=`${P2}`
      break; 
    case 3:
      let consultaPregunata3 = localStorage.getItem('respuesta1');
      let parseConsultaDeTrivia3=JSON.parse(consultaPregunata3)
        console.log("este es el pregunts",parseConsultaDeTrivia3);
        let P3=parseConsultaDeTrivia3[3]
        liuno.innerHTML=`${P3}`
      break;
    default:
      alert("total de pregunata")
}}

 

const PainPregunataCorrecta =(respuesta)=>{
  let Correcta=respuesta
  for (let i = 0; i < Correcta.length; i++) {
    triviaCorrecta.push(Correcta[i].correct_answer)
   }
  console.log("este es el correcto",triviaCorrecta);
  let resTrivi=localStorage.setItem("respuesta1",JSON.stringify(triviaCorrecta))
  let consultaDeTrivia = localStorage.getItem('respuesta1');
  let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
 
  
  console.log("vamos",parseConsultaDeTrivia[0]);
  console.log(consultaDeTrivia[0]);
  siguientePain(triviaPregunta)
  
 }
  

   const PainIncorrecta= (respuesta)=>{

    let Incorrecta = respuesta
  
  
    for (let i = 0; i < Incorrecta.length; i++) {
      triviaIncorrecta.push(Incorrecta[i].incorrect_answers)
   
   
     }
    console.log("este es el incorrecto",triviaIncorrecta); 
    
      
      }





 
let lista1=liuno.setAttribute("value","false1")
let lista2=lidos.setAttribute("value","false2")
 let lista3= litres.setAttribute("value","false3")
 let lista4= licuatro.setAttribute("value","true1")
  let valor1= liuno.getAttribute("value");
  let valor2= liuno.getAttribute("value");
  let valor3= liuno.getAttribute("value");
  let valor4= licuatro.getAttribute("value");

  
liuno.addEventListener("click",obtenerValorDeRespuestauno)
lidos.addEventListener("click",obtenerValorDeRespuestados)
litres.addEventListener("click",obtenerValorDeRespuestatres)
licuatro.addEventListener("click",licorrecta)

 function obtenerValorDeRespuestauno() {
  "false1"==valor1?respuesaDeUsuarioIncorrectas.push(valor1):respuesaDeUsuarioIncorrectas.push(null)
console.log(respuesaDeUsuarioIncorrectas);




}
function obtenerValorDeRespuestados() {
  "false1"==valor1?respuesaDeUsuarioIncorrectas.push(valor2):respuesaDeUsuarioIncorrectas.push(null)
  console.log(respuesaDeUsuarioIncorrectas);
  localStorage.setItem("incorrecta", JSON.stringify(respuesaDeUsuarioIncorrectas));
  const incorrectoEvalucion=JSON.parse(localStorage.getItem("incorrecta"))
  console.log(incorrectoEvalucion);
  contadorDeTrivia()
}
function obtenerValorDeRespuestatres() {
  "false1"==valor1?respuesaDeUsuarioIncorrectas.push(valor3):respuesaDeUsuarioIncorrectas.push(null)
  console.log(respuesaDeUsuarioIncorrectas);
  
}
function licorrecta() {
  "true1"==valor4?respuesaDeUsuarioBien.push(valor4):respuesaDeUsuarioBien.push(null)
  localStorage.setItem("correcta", JSON.stringify(respuesaDeUsuarioBien));
  const correctoEvalucion=JSON.parse(localStorage.getItem("correcta"))
  console.log(correctoEvalucion);
console.log(respuesaDeUsuarioBien)
}
const correcta=()=>{
  let consultaDeTrivia = localStorage.getItem('respuesta1');
  let parseConsultaDeTrivia=JSON.parse(consultaDeTrivia)
 
  
  console.log("vamos",parseConsultaDeTrivia[0]);
  console.log(consultaDeTrivia[0]);
  let pre=consultaDeTrivia[0]
  let Li=licuatro.innerHTML=`<i class="bi bi-circle-fill"></i>  ${pre}`
 
}
let coun =1;
const contadorDeTrivia=()=>{
if (coun===respuesaDeUsuarioIncorrectas.length || coun===respuesaDeUsuarioBien.length) {
  console.log("esta es la longuito",respuesaDeUsuarioIncorrectas.length);
  window.open("file:///C:/Users/javacrispt/Desktop/Trivia/src/app/endApp/endApp.html");
}

}

const TAnimacionProgreso=()=>{
  let couan=0
   
  const TiempoProgreso=()=> {
  
if (couan>=400) {
  alert("Termino el tiempo")
  clearInterval(P)
  
}else{
  couan+=10
  console.log(couan);
  Progreso.style.width=couan+"px"

  
}

}
let P=setInterval(TiempoProgreso,1000)

}
