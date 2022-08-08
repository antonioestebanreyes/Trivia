//const URL=https//opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple
const Promesas_1=()=>{
fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
.then((data)=>data.json())
.then((respuesta)=>iteracion_conocimiento_general(respuesta))
.catch(console.log("error"));

}
const Promesas_2=()=>{
fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=hard&type=boolean")
.then((data)=>data.json())
.then((respuesta)=>Pregunta_de_video_juego_iteracion(respuesta))
.catch(console.log("error"));
}
let categoria_boleano=[];

let Pregunata_correcta=[];
console.log(Pregunata_correcta);
let Dificulta_de_pregunat=[];
let Pregunata_de_la_trivia=[];
let Pregunta_incorrecta=[];

const Pregunta_de_video_juego_iteracion=(respuesta)=>{
  console.log(respuesta.results);
  let ar=respuesta.results;
  for (let i = 0; i <ar.length; i++) {
    const element =console.log(ar[i]);
    categoria_boleano.push(ar[i].category)
    Pregunata_correcta.push(ar[i].correct_answe)
    Dificulta_de_pregunat.push(ar[i].difficulty)
    Pregunta_incorrecta.push(ar[i].incorrect_answers)
    Pregunata_de_la_trivia.push(ar[i].question)
    
  }
}
Promesas_2()
let pregunta_trivia= []
let pregunta_correcta=[]
let respuesta_erronia=[]
let conocimiento_generales=[]
let pregunata_facil=[]
Promesas_1()
const iteracion_conocimiento_general= (respuesta)=>{
  
  let ar=respuesta.results;
  for (let i = 0; i < ar.length; i++) {
    pregunta_trivia.push(ar[i].question)
    pregunta_correcta.push(ar[i].correct_answer)
  respuesta_erronia.push(ar[i].incorrect_answers)
  conocimiento_generales.push(ar[i].category)
  pregunata_facil.push(ar[i].difficulty)
 
  }
 
}








