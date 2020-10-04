function workerFindPrimes() {
  const worker = new Worker("worker.js");

  worker.postMessage("discover");
  worker.onmessage = (event) => {
    if (event.data.value === undefined) {
      worker.terminate();
    } else {
      document.getElementById("result").textContent = event.data.value;
    }
  };
}
