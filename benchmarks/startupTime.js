const { measureExecutionTime } = require("../utils/performance");

// Benchmark 6: Startup time (module loading)
function benchmarkStartupTime(GoCommand, CommanderJS) {
  // This is a bit tricky to measure accurately since we've already loaded the modules
  // But we can measure the time to create a new instance
  const goCommandTime = measureExecutionTime(() => {
    new GoCommand();
  }, 100);

  let commanderTime = 0;
  if (CommanderJS) {
    commanderTime = measureExecutionTime(() => {
      new CommanderJS.Command();
    }, 100);
  }

  return { goCommandTime, commanderTime };
}

module.exports = {
  benchmarkStartupTime,
};
