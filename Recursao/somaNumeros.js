function soma(arr) {
  if (arr == 0) {
    return 0;
  } else {
    arr.shift();
    return 1 + soma(arr);
  }
}

const arrayTeste = [1, 2, 3, 4];
console.log(soma(arrayTeste));
