# Desafio - Calculadora de Partidas Rankeadas

## Instruções para entrega

2️⃣ Calculadora de partidas Rankeadas

### O Que deve ser utilizado

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

### Objetivo

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro  
Se vitórias for entre 11 e 20 = Bronze  
Se vitórias for entre 21 e 50 = Prata  
Se vitórias for entre 51 e 80 = Ouro  
Se vitórias for entre 81 e 90 = Diamante  
Se vitórias for entre 91 e 100= Lendário  
Se vitórias for maior ou igual a 101 = Imortal  

## Saída

Ao final deve se exibir uma mensagem:  
_"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"_

## Solução

Utilizei a função **_prompt_** do módulo **_prompt-sync_** do **_Node.js_** para receber o **_input_** (dados de entrada) do usuário e armazenar em váriaveis.

Para controlar os inputs, utulizei o laço de repetição (**_looping_**) **_while_**, onde também poderia ser aplicado **_do while_** já que ao menos uma vez o bloco de código deve ser executado (aplicado no arquivo _desafio-com-do-while.js_).

Criei funções para utilizar a cada etapa do processo

- getVitorias
- getDerrotas
- saldoVitorias
- obterRank

### Referencias

- prompt-sync (Node):
[Stackoverflow](https://stackoverflow.com/questions/54486307/referenceerror-prompt-is-undefined-how-would-i-fix-this-in-javascript)
- isNaN Function JS: [W3Scools](https://www.w3schools.com/jsref/jsref_isnan.asp)
- functions JS: [W3Scools](https://www.w3schools.com/js/js_functions.asp)
