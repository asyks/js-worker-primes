import {
  absoluteStartValue,
  absoluteEndValue,
  totalWorkers,
} from "./constants.js";

function createResultsNodes(numWorkers) {
  const results = document.getElementById(`results`);
  for (let i = 1; i <= numWorkers; i++) {
    const p = document.createElement("p");
    p.setAttribute("id", `result-${i}`);
    results.appendChild(p);
  }
}

function workersFindPrimes(numWorkers) {
  const chunkSize = Math.round(absoluteEndValue / numWorkers);
  let startValue = absoluteStartValue;
  let endValue = startValue + chunkSize;
  for (let i = 1; i <= numWorkers; i++) {
    const worker = new Worker("worker.js");
    worker.postMessage({ start: startValue, end: endValue });
    worker.onmessage = (event) => {
      document.getElementById(`result-${i}`).textContent = event.data;
    };

    startValue = endValue + 1;
    endValue = endValue + chunkSize;
  }
}

function handleClick() {
  createResultsNodes(totalWorkers);
  workersFindPrimes(totalWorkers);
}

document.getElementById("find-button").addEventListener("click", handleClick);
