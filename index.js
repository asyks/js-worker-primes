const worker = new Worker("worker.js");

worker.postMessage("discover");
worker.onmessage = (event) => {
  document.getElementById("result").textContent = event.data;
};
