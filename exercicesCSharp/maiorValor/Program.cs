
class Program
{
    static int MaiorElemento(int[] arr)
    {
        if (arr.Length == 0)
        {
            // -Infinity serve para sinalizar o menor número possível,
            // visto que se fosse zero estaria errado pois assumiriamos que o 0 é o maior número.
            return int.MinValue;
        }
        else
        {
            int primeiroElemento = arr[0];
            int[] restanteElementos = arr.Skip(1).ToArray();
            int maiorElementoEncontrado = MaiorElemento(restanteElementos);
            
            // Leia "retorne o primeiroElemento caso ele seja maior que o maiorElementoEncontrado,
            // caso não seja defina o primeiroElemento com o valor de maiorElementoEncontrado"
            return primeiroElemento > maiorElementoEncontrado
                ? primeiroElemento
                : maiorElementoEncontrado;
        }
    }

    static void Main(string[] args)
    {
        int[] teste = { 1, 2, 4, 10 };
        Console.WriteLine(MaiorElemento(teste));
        Console.ReadKey();
    }
}
