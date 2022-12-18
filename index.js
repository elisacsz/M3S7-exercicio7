//1

const numbers = [2, 4, 8, 16, 32, 64,128, 256, 512, 1024, 2048];

let soma = 0;


for (number of numbers) {
    soma += number;
}

console.log(soma);
console.log(soma/Object.keys(numbers).length);

//2

const notas = {
    bimestre1: 7.0,
    bimestre2: 3.7,
    bimestre3: 6.4,
    bimestre4: 8.6
    }

let somaNotas = 0;

for (let nota in notas) {
    somaNotas += notas[nota];
}

console.log(somaNotas.toFixed(2));

let media = somaNotas/Object.keys(notas).length;

console.log(media.toFixed(2));

if (media >= 7){
    console.log("O aluno foi aprovado.");    
} else {
    console.log(`O aluno não foi aprovado com a nota ${media}.`);    
}
