let frutas = ["maça", "laranja", "melancia"];
let i;

frutas.pop();//remove o último valor
frutas.push("limão"); //adiciona um valor
frutas.unshift("melão");// adiciona um valor na 1
frutas.shift();//remove o 1 valor
frutas.splice(2,1);
console.log(frutas);