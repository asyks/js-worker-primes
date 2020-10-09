import {
  absoluteStartValue,
  absoluteEndValue,
  numWorkers,
} from "./constants.js";

function workerFindPrimes() {
  const chunkSize = absoluteEndValue / numWorkers;
  let startValue = absoluteStartValue;
  let endValue = startValue + chunkSize;
  for (let i = 1; i <= numWorkers; i++) {
    const worker = new Worker("worker.js");
    const data = { start: startValue, end: endValue };
    console.log(data);
    worker.postMessage(data);
    worker.onmessage = (event) => {
      document.getElementById(`result-${i}`).textContent = event.data;
    };

    startValue = endValue + 1;
    endValue = endValue + chunkSize;
  }
}

document
  .getElementById("find-button")
  .addEventListener("click", workerFindPrimes);
