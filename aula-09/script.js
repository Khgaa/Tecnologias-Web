//Get
/*const element = document.getElementById("miolo");*/

//Query
/*const element2 = document.querySelector("#miolo");*/

//const alunos = ["joão", "maria", "jose", "antonio", "claudia"];

//const miolo = document.querySelector("#miolo");

//alunos.map(item => miolo.innerHTML += `<div class="card">$(item)</div>`)

document.querySelector("#btn").addEventListener("click", somar);

function somar(){

    const num1 = document.querySelector("#n1");
    const num2 = document.querySelector("#n2");
    const result = document.querySelector("#result");

    let n1 = Number.parseInt(num1.value);
    let n2 = Number.parseInt(num2.value);

    result.innerHTML = n1 + n2;
}