function remainingOrders(timeRestante, orders) {
  let timeLeft = timeRestante;
  let ordersRemaining = [];
  const juiceTimes = {
    "Pure Strawberry Joy": 0.5,
    Energizer: 1.5,
    "Green Garden": 1.5,
    "Tropical Island": 3,
    "All or Nothing": 5,
  };
  for (const juiceName of orders) {
    if (juiceTimes.hasOwnProperty(juiceName)) {
      const preparationTime = juiceTimes[juiceName];
      if (timeLeft > 0) {
        timeLeft -= preparationTime;
      } else {
        ordersRemaining.push(juiceName);
      }
    } else {
      let tempoRestante = 2.5;
      if (timeLeft > 0) {
        timeLeft -= tempoRestante;
      } else {
        ordersRemaining.push(juiceName);
      }
    }
  }
  return ordersRemaining;
}

// Exemplo de uso:
const remainingMinutes = 13;
const juiceOrders = [
  "Pure Strawberry Joy",
  "Pure Strawberry Joy",
  "Vitality",
  "Tropical Island",
  "All or Nothing",
  "All or Nothing",
  "All or Nothing",
  "Green Garden",
  "Limetime",
];

const remaining = remainingOrders(remainingMinutes, juiceOrders);
console.log("Pedidos restantes para Dmitry:", remaining);
