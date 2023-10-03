function pesquisaBinaria(lista, alvo) {
  let baixo = 0;

  //Este trecho resgata o último índice da lista, como começamos de zero o último índice estará na equação: tamanho da lista -1
  let alto = lista.length - 1;

  while (baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2);
    const chute = lista[meio];

    if (chute === alvo) {
      return meio; // Retorna o índice onde o elemento foi encontrado
    } else if (chute < alvo) {
      baixo = meio + 1;
    } else {
      alto = meio - 1;
    }
  }

  return "Elemento inexistente na lista"; // Retorna se o elemento não for encontrado na lista
}

const listinha = ["1", "2", "3", "4", "5", "7", "9"];
const elementoProcurado = "2";

console.log(pesquisaBinaria(listinha, elementoProcurado)); // Deve imprimir o índice onde o elemento foi encontrado
