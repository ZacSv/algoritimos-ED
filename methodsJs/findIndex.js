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
const hoursWorked = 8;
const index = arrayzinho.map((product) => {
  return {
    ...product,
    subtotal: product.SalaryPerHour * hoursWorked,
  };
});
console.log(index);
