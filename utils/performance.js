const { performance } = require("perf_hooks");

// Utility function to measure execution time
function measureExecutionTime(fn, iterations = 1000) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const end = performance.now();
  return (end - start) / iterations; // Average time per execution
}

module.exports = {
  measureExecutionTime,
};
