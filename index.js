let nomeDoHeroi = "zelda"
let quantidadeXp = 500000

if (quantidadeXp <= 1000){
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nivel de Ferro" );
} 
else if (quantidadeXp >= 1001 && quantidadeXp <= 2000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nivel de Bronze" );
} 
else if (quantidadeXp >= 2001 && quantidadeXp <= 5000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nivel de Prata" );
} 
else if (quantidadeXp >= 5001 && quantidadeXp <= 7000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nivel de Ouro" );
} 
else if (quantidadeXp >= 7001 && quantidadeXp <= 8000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nivel de Platina" );
} 
else if (quantidadeXp >= 8001 && quantidadeXp <= 9000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nivel de Ascendente" );
} 
else if (quantidadeXp >= 9001 && quantidadeXp <= 10000) {
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nivel de Imortal" );
} 
else 
    console.log ("O Herói de nome " + nomeDoHeroi + " está no nivel de Radiante" );