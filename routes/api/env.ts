export default eventHandler((event) => {
    // Visit /api/env to test
    console.log(useRuntimeConfig().envExample)
    return "Check your terminal to see if the environment variable exists.";
});
  