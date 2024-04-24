function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log("GENERATOR 1 :",gen.next().value);
  // Expected output: 10
  
  console.log("GENERATOR 1 :",gen.next().value);
  // Expected output: 20

// SECOND EXAMPLE
  function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
  }
  
  const gen1 = generator(10);
  
  console.log("GENERATOR 2 :",gen1.next().value); // 10
  console.log("GENERATOR 2 :",gen1.next().value); // 11
  console.log("GENERATOR 2 :",gen1.next().value); // 12
  console.log("GENERATOR 2 :",gen1.next().value); // 13
  console.log("GENERATOR 2 :",gen1.next().value); // 20