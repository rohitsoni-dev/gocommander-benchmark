const { measureExecutionTime } = require("../utils/performance");

// Benchmark 3: Help generation
function benchmarkHelpGeneration(CommandClass, name) {
  // Create a command structure
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
    .option("-t, --title <title>", "Title for the person");

  const calcCmd = program.command("calculate");
  calcCmd
    .description("Perform basic calculations")
    .argument("<operation>", "Operation to perform")
    .argument("<numbers...>", "Numbers to operate on")
    .option("-p, --precision <digits>", "Number of decimal places");

  return measureExecutionTime(() => {
    // Generate help (implementation varies between libraries)
    if (name === "GoCommander") {
      // GoCommander uses outputHelp()
      try {
        // Capture stdout to prevent output during benchmark
        const originalWrite = process.stdout.write;
        process.stdout.write = () => {}; // Suppress output
        program.outputHelp();
        process.stdout.write = originalWrite; // Restore output
      } catch (e) {
        // Ignore errors
      }
    } else {
      // Commander.js uses helpInformation()
      try {
        program.helpInformation();
      } catch (e) {
        // Ignore errors
      }
    }
  });
}

module.exports = {
  benchmarkHelpGeneration,
};
