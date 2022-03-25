import assert from 'assert';
import ganache from 'ganache-cli';
import Web3 from 'web3';
import { abi, evm } from '../compile';

const INITIAL_MESSAGE = 'Hi there!';

const web3 = new Web3(ganache.provider());

let accounts: string[] = [];
let inbox: InstanceType<typeof web3.eth.Contract>;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: 1000000 });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_MESSAGE);
  });

  it('can change the message', async () => {
    const newMessage = 'bye!';
    await inbox.methods.setMessage(newMessage).send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, newMessage);
  });
});
