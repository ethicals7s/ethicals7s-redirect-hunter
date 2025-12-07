# EthicalS7s Redirect Hunter

A Node.js CLI tool to ethically test for open redirect vulns. Built with Grok/Copilot—stronger with async scans than basic Python.

## Install
npm install axios yargs

## Usage
1. Add URLs to urls.txt (one per line, safe tests only!).
2. Run `node index.js scan`.

## Example Output
Scanning for open redirects (ethical tests only)...
is SAFE.ww.google.com/url?q=https://evil.com
https://www.koni-store.ru/bitrix/redirect.php?eventhttps://radarbogor.jawapos.com/wisata/2474588168/tiket-masuknya-cuma-rp-10-ribu-yuk-cobain-spot is VULNERABLE.-dengan-vibes-ala-pantai-di-parung-bogor/=OME&event2=&event3=&goto=https://google.com
https://example.com is SAFE.

## Notes
Ethical use only—test with permission. Inspired by bug bounties.
