function fatorial(number) {
  if (number == 1) {
    return 1;
  } else {
    number * fatorial(number - 1);
    console.log(number);
  }
}
fatorial(3);
