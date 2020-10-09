self.importScripts("primes.js");

onmessage = function (event) {
  console.log(event.data);
  const generator = primes(event.data);
  while (true) {
    prime = generator.next();
    if (prime.done) {
      break;
    } else {
      postMessage(prime.value);
    }
  }
};
