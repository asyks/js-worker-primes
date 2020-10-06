importScripts("primes.js");

onmessage = function (event) {
  if (event.data === "discover") {
    const generator = primes();
    for (prime of generator) {
      postMessage({ done: false, value: prime.value });
    }
    postMessage({ done: true, value: undefined });
  }
};
