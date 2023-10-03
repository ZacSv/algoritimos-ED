const teste = [2, 3, 4, 5];

function soma(arg1) {
  if (arg1 == 0) {
    return 0;
  } else {
    const primeiroElemento = arg1[0];
    const restoDoArray = arg1.slice(1);
    const resultado = primeiroElemento + soma(restoDoArray);
    return resultado;
  }
}
console.log(soma(teste));
