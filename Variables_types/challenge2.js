
const prompt = require("prompt-sync")();

let temperature =Number(prompt("donne moi la temperature : "));

const transformeKelvin = temperature + 273.15;

console.log(transformeKelvin);
