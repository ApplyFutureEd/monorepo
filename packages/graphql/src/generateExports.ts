const fs = require('fs');

const mutations = fs
    .readFileSync('./src/mutations.ts', 'utf8')
    .toString()
    .match(/(?<=const\s+).*?(?=\s+=)/gs);
const queries = fs
    .readFileSync('./src/queries.ts', 'utf8')
    .toString()
    .match(/(?<=const\s+).*?(?=\s+=)/gs);
const subscriptions = fs
    .readFileSync('./src/subscriptions.ts', 'utf8')
    .toString()
    .match(/(?<=const\s+).*?(?=\s+=)/gs);
const types = fs
    .readFileSync('./src/API.ts', 'utf8')
    .toString()
    .match(/(?<=export type\s+).*?(?=\s+=)/gs);

const content = `export {${mutations.toString()}} from "./mutations"
\nexport {${queries.toString()}} from "./queries"
\nexport {${subscriptions.toString()}} from "./subscriptions"
\nexport type {${types.toString()}} from "./API"`;

fs.writeFileSync('./src/index.ts', content);
