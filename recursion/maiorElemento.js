function maiorElemento(arr) {
  if (arr.length == 0) {
    //-Infinity serve para sinalizar o menor número possível, visto que se fosse zero estaria errado pois assumiriamos que o 0 é o maior número.
    return -Infinity;
  } else {
    const primeiroElemento = arr.shift();
    const maiorElementoEncontrado = maiorElemento(arr);
    //Leia "retorne o primeiroElemento caso ele seja maior que o maiorElementoEncontrado, caso não seja defina o primeiroElemento com o valor de maiorElementoEncontrado"
    return primeiroElemento > maiorElementoEncontrado
      ? primeiroElemento
      : maiorElementoEncontrado;
  }
}

const teste = [1, 2];
console.log(maiorElemento(teste));
