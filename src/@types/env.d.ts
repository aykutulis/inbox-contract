declare namespace NodeJS {
  export interface ProcessEnv {
    MNEMONIC_PHRASE?: string;
    RINKEBY_URI?: string;
    INITIAL_CONTRACT_ARGS?: string;
  }
}