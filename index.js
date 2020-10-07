function workerFindPrimes() {
  const worker = new Worker("worker.js");

  worker.postMessage("discover");
  worker.onmessage = (event) => {
    document.getElementById("result").textContent = event.data;
  };
}

document
  .getElementById("find-button")
  .addEventListener("click", workerFindPrimes);
