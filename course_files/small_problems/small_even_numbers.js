// small_even_numbers

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// Launch School solution

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }
  console.log(number);
}