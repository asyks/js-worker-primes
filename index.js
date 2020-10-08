const numWorkers = 1;

function workerFindPrimes() {
  for (i = 1; i <= numWorkers; i++) {
    const worker = new Worker("worker.js");

    worker.postMessage("discover");
    worker.onmessage = (event) => {
      document.getElementById("result").textContent = event.data;
    };
  }
}

document
  .getElementById("find-button")
  .addEventListener("click", workerFindPrimes);
