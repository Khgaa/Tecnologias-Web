//Variáveis

const pi = 3.14;
var nome = "Teste";
let idade = 20;

valor = 100;
string = "String";
number = -7;
boolean = (4==4);
object = [nome = 'Fabiano', idade = 40];
array = [1, "teste", true];

//Operadores
// + - / * **
// == === != !== < <= > >=
// && || !

//Estrutura de Decisão
//Decisão Simples

if(true){

}

//Decisão Composto

if(true){

}else{

}

//Caso

n = 7;
switch(n){
    case 1:
    case 2:
    case 7:
    default:
}

//Estrutura de Repetição

//Pré-Testada

while(true){

}

//Pós-Testada

do{

}while(true);

//Controlada

for(let i = 0; i < 10; i++){
    console.log(i);
}

for(let a in [1, 2, 3, 4, 5]){
    console.log(a);
}

//Objeto: Array

let frutas = ["Banana", "Maça", "Laranja"];

frutas.push("Manga");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.forEach(item => console.log(item));

frutas.map(item => console.log(item));

frutas = frutas.filter(item => item.includes("n"));
console.log(frutas);