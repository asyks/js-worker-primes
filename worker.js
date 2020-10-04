self.importScripts("primes.js");

onmessage = function (event) {
  if (event.data === "discover") {
    const generator = primes();
    while (true) {
      prime = generator.next();
      if (prime.value === undefined) {
        break;
      } else {
        postMessage(prime.value);
      }
    }
  }
};
