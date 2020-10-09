function* primes({ start, end }) {
  var n = start;
  search: while (n <= end) {
    n++;
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        continue search;
      }
    }
    // prime number found, yield to caller
    yield n;
  }
}
