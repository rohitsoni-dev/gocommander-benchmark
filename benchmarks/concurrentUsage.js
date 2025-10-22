const { measureExecutionTime } = require("../utils/performance");

// Benchmark: Concurrent Usage Performance
function benchmarkConcurrentUsage(CommandClass, name) {
  // This benchmark tests how well the library handles multiple instances
  // being created and used concurrently
  return measureExecutionTime(() => {
    // Create multiple command instances concurrently
    const instances = [];
    for (let i = 0; i < 10; i++) {
      const program = new CommandClass();
      program
        .name(`test-cli-${i}`)
        .description(`A test CLI application #${i}`)
        .version("1.0.0");

      const cmd = program.command("process");
      cmd
        .description("Process command")
        .argument("<data>", "Data to process")
        .option("-v, --verbose", "Verbose output");

      instances.push(program);
    }

    // The actual concurrent usage would involve running these in parallel,
    // but for benchmarking we're measuring the setup cost
  }, 100); // Use fewer iterations since this creates multiple instances
}

module.exports = {
  benchmarkConcurrentUsage,
};
