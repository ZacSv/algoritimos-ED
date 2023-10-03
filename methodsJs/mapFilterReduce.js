const arrayzinho = [
  {
    name: "Isac Vieira",
    age: 21,
    profession: "Programmer Guy",
    SalaryPerHour: 150,
  },
  {
    name: "Pedrinho Silva",
    age: 23,
    profession: "Mechanical Guy",
    SalaryPerHour: 50,
  },
  {
    name: "Carlinhos Matuzalem",
    age: 19,
    profession: "Technical Guy",
    SalaryPerHour: 40,
  },
];
const reduzido = arrayzinho.reduce((acummulator, product) => {
  return (acummulator += product.SalaryPerHour);
}, 0);

const prices = [2000, 1230, 8000, 3999];

console.log(prices.every((p) => p > 1000));
