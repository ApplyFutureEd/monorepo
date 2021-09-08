const { v1 } = require('uuid');
const execSync = require('child_process').execSync;

execSync('cypress open -e uuid=' + v1(), { stdio: [0, 1, 2] });