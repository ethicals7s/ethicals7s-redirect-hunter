EthicalS7s Redirect Hunter
A Node.js CLI tool to ethically test for open redirect vulnerabilities. Built with Grok and GitHub Copilot for efficient, async scanning—stronger and faster than basic Python versions, with rate limiting and JSON export for safe, professional use.
Features

Reads URLs from a text file for batch testing.
Appends a payload (e.g., ?redirect=https://evil.com) to detect open redirects.
Async parallel scans with Promise.all for speed.
Rate limiting (1-second delay per scan) to avoid abuse.
Exports results to JSON for logging/portfolio demos.
Ethical safeguards: Use only with permission; safe test examples included.

Install
Install dependencies via npm:
textnpm install axios yargs
Usage

Create or update urls.txt with one URL per line (use safe, ethical tests only, e.g.):
https://www.google.com/url?q=https://evil.com
https://example.com
https://www.koni-store.ru/bitrix/redirect.php?event1=&event2=&event3=&goto=https://google.com
Run the scanner:textnode index.js scan
Optional: --file=yourfile.txt to use a custom input file.

Output shows SAFE or VULNERABLE for each URL, with results saved to results.json.

Example Output
textScanning for open redirects (ethical tests only)...
https://www.google.com/url?q=https://evil.com is VULNERABLE.
https://example.com is SAFE.
https://www.koni-store.ru/bitrix/redirect.php?event1=&event2=&event3=&goto=https://google.com is VULNERABLE.
results.json example:
text[
  {
    "url": "https://www.google.com/url?q=https://evil.com",
    "status": "VULNERABLE"
  },
  {
    "url": "https://example.com",
    "status": "SAFE"
  },
  {
    "url": "https://www.koni-store.ru/bitrix/redirect.php?event1=&event2=&event3=&goto=https://google.com",
    "status": "VULNERABLE"
  }
]
Notes

Ethical Use Only: This tool is for educational and permitted testing. Do not scan without explicit permission—violates laws like CFAA. Inspired by bug bounties; always report responsibly.
Improvements: Rate limiting prevents overload; JSON export for easy analysis. Built as part of my journey from zero to full-stack ethical hacker.
Dependencies: axios (HTTP requests), yargs (CLI parsing).
License: MIT—feel free to fork/improve.

For issues or collabs, open a GitHub issue or hit me up on dev.to/ethicals7s.
