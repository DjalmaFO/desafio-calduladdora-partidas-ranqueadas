const { log } = require("console");
const ps = require("prompt-sync");

const prompt = ps();

// Declaração de parametros
let vitorias, derrotas;

// Calcula o saldo de vitórias, o qual pode ser negativo
function saldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Determina o Rank através do saldo de vitórias
function obterRank(saldo) {
  if (saldo <= 10) {
    return "Ferro";
  } else if (saldo <= 20) {
    return "Bronze";
  } else if (saldo <= 50) {
    return "Prata";
  } else if (saldo <= 80) {
    return "Ouro";
  } else if (saldo <= 90) {
    return "Diamante";
  } else if (saldo <= 100) {
    return "Lendário";
  } else {
    return "Imortal"
  }
}

// Atribui um valor à variável vitorias, onde o valor não pode ser negativo
function getVitorias() {
  while (isNaN(vitorias) || vitorias === undefined || vitorias < 0) {
    vitorias = parseInt(prompt("Digite a quantidade de vitórias: \n"));
  }
}

// Atribui um valor à variável derrotas, onde o valor não pode ser negativo
function getDerrotas() {
  while (isNaN(derrotas) || derrotas === undefined || derrotas < 0) {
    derrotas = parseInt(prompt("Digite a quantidade de derrotas: \n"));
  }
}

// Seta o valor da variável vitorias
getVitorias();

// Seta o valor da variável derrotas
getDerrotas();

// Calcula o saldo de vitórias e atribui à variável saldo
let saldo = saldoVitorias(vitorias, derrotas);

// Exibe o saldo de vitórias e o rank
console.log(`O herói tem saldo de ${saldo}, está no nivel ${obterRank(saldo)}.`)