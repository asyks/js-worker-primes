self.importScripts("primes.js");

onmessage = function (event) {
  if (event.data === "discover") {
    const generator = primes();
    while (true) {
      prime = generator.next();
      if (prime.value === undefined) {
        break;
      } else {
        postMessage({ done: false, value: prime.value });
      }
    }
    postMessage({ done: true, value: undefined });
  }
};
