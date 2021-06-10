const { v1 } = require("uuid");
const execSync = require("child_process").execSync;

execSync(
  "cypress run --record --reporter mochawesome --reporter-options reportDir=cypress/report/mochawesome-report,overwrite=false,html=false,json=true,timestamp=mmddyyyy_HHMMss -e uuid=" +
    v1(),
  { stdio: [0, 1, 2] }
);
