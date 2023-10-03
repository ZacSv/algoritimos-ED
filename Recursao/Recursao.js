function contador(tempo) {
  if (tempo <= 1) {
    console.log(tempo);
  } else {
    console.log(`${tempo}...`);
    contador(tempo - 1);
  }
}
contador(10);
