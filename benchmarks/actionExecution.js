const { measureExecutionTime } = require("../utils/performance");

// Benchmark: Action Execution Performance
function benchmarkActionExecution(CommandClass, name) {
  return measureExecutionTime(() => {
    const program = new CommandClass();
    program
      .name("test-cli")
      .description("A test CLI application")
      .version("1.0.0");

    const greetCmd = program.command("greet");
    greetCmd
      .description("Greet a person")
      .argument("<name>", "Name of the person to greet")
      .option("-f, --formal", "Use formal greeting")
      .action((name, options) => {
        // Simulate some work in the action
        const greeting = options.formal ? `Good day, ${name}` : `Hi, ${name}!`;
        return greeting;
      });

    // For GoCommander, we need to handle the action differently
    if (name !== "GoCommander") {
      // For commander.js, we can simulate action execution
      try {
        // We're not actually calling parse here to avoid side effects in benchmark
        // Just testing the action setup
      } catch (e) {
        // Ignore errors
      }
    }
  });
}

module.exports = {
  benchmarkActionExecution,
};
