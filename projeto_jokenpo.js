//const prompt = require("prompt-sync")();
console.log('bem vindos ao jokenpo');
let inicio = +prompt('deseja jogar se sim digite 1 , se nao digite 2: ');
const escolha = ['Pedra', 'Papel', 'Tesoura']
const resultado = ['Ganhou','Perdeu', 'Empatou']
let pontuacaojogador = 0;
let pontuacaocomputador = 0;
let nick = prompt('digite seu nome de player: ');
while(inicio != 1 || inicio !=2){
  console.clear()

if(inicio == 1){
  console.log('Eba!! vamos jogar');
} else{
  console.log('AH!! Que pena');
  
}
  break;
}
console.log('bem vindo', nick)
  
let rodadas = +prompt('deseja jogar quantas rodadas?');

for(i = 1; i <= rodadas; i++){
let jogadacomputador = Math.floor(Math.random() * 3 + 1)
let jogadajogador = +prompt('escolha [1] para pedra, [2] para papel, [3] para tesoura: ');

console.log(`\nRodadas ${i}`)

if(jogadajogador == 1){
  console.log(`jogador: ${escolha[0]}`)
  jogada = 1
} else if(jogadajogador == 2 ){
  console.log(`jogador: ${escolha[1]}`);
  jogada = 2
} else if(jogadajogador == 3){
  console.log(`jogador: ${escolha[2]}`);
  jogada = 3
}
if(jogadajogador == 0 || jogadacomputador == 0){
  console.log(`resultado ${resultado[2]}`);
} else if(jogadajogador == 0 || jogadacomputador == 1 ){
  console.log(`resultado: ${resultado[1]}`)
   pontuacaocomputador++
} else if(jogadajogador == 0 || jogadacomputador == 2 ){
  console.log(`resultado: ${resultado[0]}`)

  
} else if(jogadajogador == 1 || jogadacomputador == 0){
  console.log(`resultado ${resultado[0]}`);
  
} else if(jogadajogador == 1 || jogadacomputador == 1 ){
  console.log(`resultado: ${resultado[2]}`)
} else if(jogadajogador == 1 || jogadacomputador == 2 ){
  console.log(`resultado: ${resultado[1]}`)
 
}
  else if(jogadajogador == 2 || jogadacomputador == 0){
  console.log(`resultado ${resultado[1]}`);
    pontuacaocomputador++
} else if(jogadajogador == 2 || jogadacomputador == 1 ){
  console.log(`resultado: ${resultado[0]}`)

} else if(jogadajogador == 2 || jogadacomputador == 2 ){
  console.log(`resultado: ${resultado[2]}`)
}
}