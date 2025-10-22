const { measureExecutionTime } = require("../utils/performance");

// Benchmark: Long-running Session Performance
function benchmarkLongRunningSession(CommandClass, name) {
  // This benchmark tests for performance degradation over extended usage
  return measureExecutionTime(() => {
    const program = new CommandClass();
    program
      .name("test-cli")
      .description("A test CLI application")
      .version("1.0.0");

    // Simulate extended usage by creating many commands
    for (let i = 0; i < 50; i++) {
      const cmd = program.command(`command${i}`);
      cmd
        .description(`Command ${i}`)
        .argument("<arg>", `Argument for command ${i}`)
        .option("-o, --option", `Option for command ${i}`);

      // Add subcommands
      for (let j = 0; j < 5; j++) {
        const subCmd = cmd.command(`sub${j}`);
        subCmd
          .description(`Subcommand ${j}`)
          .argument("<subarg>", `Subargument for subcommand ${j}`);
      }
    }

    // The benchmark measures the cost of creating a large command structure
    // which simulates the memory footprint of a long-running session
  }, 100); // Use fewer iterations since this creates large structures
}

module.exports = {
  benchmarkLongRunningSession,
};
