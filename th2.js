//NIVEL FACIL

//exercicio-1

let numerosFacil1 = []; 
numerosFacil1.push(1, 2, 3); 
console.log(numerosFacil1); 


//exercicio-2

let numerosFacil2 = [];
numerosFacil2.push(1, 2, 3); 
console.log(numerosFacil2);


//exercicio-3

let arrayFacil3 = [1, 2, 3]; 
arrayFacil3[1] = 100; 
console.log(arrayFacil3); 


//exercicio-4

let frutasFacil4 = ["maçã", "banana", "laranja", "pera", "abacaxi"]; 
console.log(frutasFacil4.length); 


//exercicio-5

let numerosFacil5 = [1, 2, 3, 4, 5];
let somaFacil5 = numerosFacil5.reduce((acc, curr) => acc + curr, 0);
console.log(somaFacil5); 


//exercicio-6

let arrayFacil6 = [1, 2, 3, 4, 5]; 
arrayFacil6.pop(); 
console.log(arrayFacil6); 

//exercicio-7

let arrayFacil7 = [2, 3, 4]; 
arrayFacil7.unshift(1); 
console.log(arrayFacil7); 


// exercicio-8

let arrayFacil8 = [1, 2, 3]; 
let arrayFacil9 = [4, 5, 6]; 
let arrayCombinadoFacil8 = arrayFacil8.concat(arrayFacil9); 
console.log(arrayCombinadoFacil8); 


//NIVEL MEDIO


//exercicio-1

let numerosMedio1 = [10, 20, 30, 40]; 
for (let i = 0; i < numerosMedio1.length; i++) { 
    console.log(numerosMedio1[i]); 
}
//exercicio-2

let livrosMedio2 = [ 
    {nome: 'Harry Potter', autor: 'J.K. Rowling'},
    {nome: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'}
];
for (let i = 0; i < livrosMedio2.length; i++) { 
    console.log(livrosMedio2[i].nome); 
}


//exercicio-3

let numerosMedio3 = [1, 2, 3, 4]; 
let dobradosMedio3 = numerosMedio3.map(x => x * 2); 
console.log(dobradosMedio3); 



//exercicio-4

let numerosMedio4 = [5, 15, 20, 3, 12]; 
let maioresQueDezMedio4 = numerosMedio4.filter(x => x > 10); 
console.log(maioresQueDezMedio4); 


//exercicio-5

let numerosMedio5 = [2, 4, 6, 8]; 
let todosParesMedio5 = numerosMedio5.every(x => x % 2 === 0); 
console.log(todosParesMedio5); 


//exercicio-6

let numerosMedio6 = [3, 5, -1, 7, -3]; 
let primeiroNegativoMedio6 = numerosMedio6.find(x => x < 0); 
console.log(primeiroNegativoMedio6); 


//exercicio-7

let numerosMedio7 = [5, 3, 8, 1, 4]; 
numerosMedio7.sort((a, b) => a - b); 
console.log(numerosMedio7); 


//exercicio-8

let numerosMedio8 = [1, 2, 4, 5]; 
numerosMedio8.splice(2, 0, 3);
console.log(numerosMedio8); 
