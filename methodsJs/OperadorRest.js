function soma(...argumentos) {
  let resultado = 0;
  for (let i = 0; i < argumentos.length; i++) {
    resultado += argumentos[i];
  }
  console.log(`O resultado da soma é ${resultado}`);
}
function soma2(arg1, ...argumentos) {
  console.log(arg1);
  console.log(argumentos);
}
soma2(1, 2, 3);
