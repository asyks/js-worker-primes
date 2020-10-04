const worker = new Worker("worker.js");

worker.postMessage("discover");
console.log("main: message sent");
worker.onmessage = (event) => {
  console.log("main: message recieved");
  document.getElementById("result").textContent = event.data;
};
