let birdsPerDay = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0];
let novoArray = [];
function totalBirdCount(birdsPerDay) {
  let passaros = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    passaros += birdsPerDay[i];
  }
  console.log(passaros);
}

function birdsInWeek(birdsPerDay, week) {
  let passaros = 0;
  const diasSemana = 7;
  const indexIni = (week - 1) * diasSemana;
  const indexFim = indexIni + diasSemana;
  for (let i = indexIni; i < indexFim; i++) {
    passaros += birdsPerDay[i];
  }
  console.log(passaros);
}

function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
  console.log(birdsPerDay);
}
