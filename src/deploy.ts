import 'dotenv/config';
import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import { abi, evm } from './compile';

const { MNEMONIC_PHRASE, RINKEBY_URI } = process.env;

if (!MNEMONIC_PHRASE || !RINKEBY_URI) {
  throw new Error('Please set the MNEMONIC_PHRASE and RINKEBY_URI environment variables');
}

const provider = new HDWalletProvider(MNEMONIC_PHRASE, RINKEBY_URI);
const web3 = new Web3(provider);
