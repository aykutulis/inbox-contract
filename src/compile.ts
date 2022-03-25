import path from 'path';
import fs from 'fs';
import solc from 'solc';

const rootDir = path.resolve();
const inboxPath = path.join(rootDir, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

export const { abi, evm } = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'].Inbox;
