var numeroSecreto = parseInt(Math.random() * (101 - 1) + 1);
var iterador = 0;
console.log(numeroSecreto);

while(chute != numeroSecreto){
  if(iterador != 0){
    alert('Você já usou ' + iterador + ' tentativas!')
    }
  
    var chute = prompt('Digite um número entre 0 e 100');
  
    if(chute == numeroSecreto){
      alert('Acertou!')    
    } else if(chute > numeroSecreto){
        alert('Errou! O número secreto é menor do que ' + chute + '.')
    } else if(chute < numeroSecreto){
        alert('Errou! O número secreto é maior do que ' + chute + '.')
    }
   iterador += 1;
}
    
