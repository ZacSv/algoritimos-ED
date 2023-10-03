function selectionSort(arr) {
  //Pega o tamanho da matriz
  const n = arr.length;
  //Loop para varrer toda a matriz menos o último item
  for (let i = 0; i < n - 1; i++) {
    // Encontre o índice do menor elemento na parte não ordenada
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Troque o elemento atual com o menor elemento encontrado
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

const array = [64, 25, 12, 22, 11];
console.log(array);
const sortedArray = selectionSort(array);
console.log(sortedArray);
