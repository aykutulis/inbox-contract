import assert from 'assert';
import ganache from 'ganache-cli';
import Web3 from 'web3';
import { abi, evm } from '../compile';

const web3 = new Web3(ganache.provider());

let accounts: string[] = [];
let inbox: InstanceType<typeof web3.eth.Contract>;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: 1000000 });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });
});
