const { v1 } = require('uuid');
const execSync = require('child_process').execSync;

execSync(
  'npx cypress run --record --key 7f72678d-329f-4ed2-892a-8fc9f04725b8 --reporter mochawesome --reporter-options reportDir=cypress/report/mochawesome-report,overwrite=false,html=false,json=true,timestamp=mmddyyyy_HHMMss -e uuid=' +
  v1(),
  { stdio: [0, 1, 2] }
);
