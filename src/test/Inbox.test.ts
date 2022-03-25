import assert from 'assert';
import ganache from 'ganache-cli';
import Web3 from 'web3';
const web3 = new Web3(ganache.provider());

let accounts: string[] = [];

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
  })
})
