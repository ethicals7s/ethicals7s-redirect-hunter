const fs = require('fs');
const axios = require('axios');
const path = require('path');
const yargs = require('yargs');

const MALICIOUS_DOMAIN = 'evil.com';
const INPUT_FILE = path.join(__dirname, 'urls.txt');

async function checkForOpenRedirect(url) {
  try {
    const testUrl = `${url}?redirect=https://${MALICIOUS_DOMAIN}`;
    const response = await axios.get(testUrl, { maxRedirects: 0, validateStatus: null });
    if (response.status > 300 && response.status < 400) {
      const location = response.headers.location;
      if (location && location.includes(MALICIOUS_DOMAIN)) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`Error checking ${url}: ${error.message}`);
    return false;
  }
}

async function main(file = INPUT_FILE) {
  if (!fs.existsSync(file)) {
    console.error(`Input file not found: ${file}`);
    console.log('Please create a urls.txt file with one URL per line. Use safe tests only.');
    return;
  }
  const urls = fs.readFileSync(file, 'utf-8').split('\n').filter(Boolean);
  console.log('Scanning for open redirects (ethical tests only)...');
  const results = await Promise.all(urls.map(async (url) => {
    const vulnerable = await checkForOpenRedirect(url);
    return `${url} is ${vulnerable ? 'VULNERABLE' : 'SAFE'}.`;
  }));
  results.forEach(result => console.log(result));
}

// CLI with yargs
yargs.command('scan', 'Scan for open redirects', {
  file: {
    description: 'Input file with URLs',
    alias: 'f',
    type: 'string',
    default: 'urls.txt'
  }
}, (argv) => {
  main(argv.file);
})
  .help()
  .argv;
// Rate limit and JSON export
const results = [];
for (const url of urls) {
  const vulnerable = await checkForOpenRedirect(url);
  results.push({ url, status: vulnerable ? 'VULNERABLE' : 'SAFE' });
  console.log(`${url} is ${vulnerable ? 'VULNERABLE' : 'SAFE'}.`);
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1 sec delay
}
fs.writeFileSync('results.json', JSON.stringify(results, null, 2));
