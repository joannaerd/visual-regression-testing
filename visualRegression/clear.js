const path = require('path');
const rimraf = require("rimraf");

console.log("Clearing visual regression cases...");
rimraf.sync(path.join(__dirname, "./__cases__/**/*.*"));
console.log("Visual regression cases cleared.");
