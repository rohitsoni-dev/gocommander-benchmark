const { measureExecutionTime } = require("../utils/performance");

// Benchmark 1: Command creation
function benchmarkCommandCreation(CommandClass, name) {
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
      .option("-t, --title <title>", "Title for the person");

    const calcCmd = program.command("calculate");
    calcCmd
      .description("Perform basic calculations")
      .argument("<operation>", "Operation to perform")
      .argument("<numbers...>", "Numbers to operate on")
      .option("-p, --precision <digits>", "Number of decimal places");
  });
}

module.exports = {
  benchmarkCommandCreation,
};
