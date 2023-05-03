// Define as variáveis
var precoCombustivel = 4.50; // Preço por litro
var consumoCarro = 12; // Quilômetros por litro
var distanciaViagem = 200; // Quilômetros

// Calcula o valor gasto em combustível
var litrosConsumidos = distanciaViagem / consumoCarro;
var valorGasto = litrosConsumidos * precoCombustivel;

// Imprime o resultado
console.log("O valor gasto em combustível será de R$" + valorGasto.toFixed(2));
