log = console.log;

function workerFindPrimes() {
  const worker = new Worker("worker.js");

  worker.postMessage("discover");
  log("main: worker started");

  worker.onmessage = (event) => {
    if (event.data.done === false && typeof event.data.value === "number") {
      document.getElementById("result").textContent = event.data.value;
    } else if (event.data.done === true) {
      worker.terminate();
      log("main: worker terminated");
    } else {
      log("main: ERROR invalid mesage recieved from worker");
    }
  };
}
