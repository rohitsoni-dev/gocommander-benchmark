const { measureExecutionTime } = require("../utils/performance");

// Benchmark: Autocomplete/Tab Completion Performance
function benchmarkAutocompletePerformance(CommandClass, name) {
  return measureExecutionTime(() => {
    const program = new CommandClass();
    program
      .name("test-cli")
      .description("A test CLI application")
      .version("1.0.0");

    // Create a command structure that would benefit from autocomplete
    for (let i = 0; i < 20; i++) {
      const cmd = program.command(`command${i}`);
      cmd.description(`Command ${i}`).argument("<arg>", "An argument");

      // Add many options to increase autocomplete complexity
      for (let j = 0; j < 10; j++) {
        // Use valid option format for both libraries
        cmd.option(`--option${j} <value>`, `Option ${j}`);
      }
    }

    // Autocomplete performance testing depends on library-specific implementations
    // For this benchmark, we're measuring the setup cost of a structure that
    // would be used for autocomplete
  });
}

module.exports = {
  benchmarkAutocompletePerformance,
};
