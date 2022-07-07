import { makeAutoObservable } from 'mobx';
import sha256 from 'crypto-js/sha256';
import React, { createContext, useContext, useEffect } from 'react';

interface IBlock {
  hash: string;
  transactions: string[];
}

const emptyBlock: IBlock = {
  hash: '',
  transactions: [],
};

class BlockchainStore {
  blocks: IBlock[] = [];
  transactions: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get numberBlocks() {
    return this.blocks.length;
  }

  get valid() {
    return this.blocks.every((block, index) => {
      const prevBlock: IBlock = this.blocks[index - 1] ?? emptyBlock;
      const hash: string = sha256(
        `${prevBlock.hash}${JSON.stringify(block.transactions)}`
      ).toString();

      return block.hash === hash;
    });
  }

  addTransaction(message: string) {
    this.transactions.push(message);
  }

  writeBlock() {
    if (!this.transactions.length) return;

    const transactions = [...this.transactions];
    this.transactions = [];

    const prevBlock = this.blocks.at(-1) ?? emptyBlock;
    const hash = sha256(
      `${prevBlock.hash}${JSON.stringify(transactions)}`
    ).toString();

    this.blocks.push({
      hash,
      transactions,
    });
  }
}

const StoreContext = createContext<BlockchainStore>(new BlockchainStore());

const StoreProvider: React.FC<{
  store: BlockchainStore;
  children: React.ReactNode;
}> = ({ store, children }) => {
  useEffect(() => {
    const interval = setInterval(() => store.writeBlock(), 5000);

    return () => clearInterval(interval);
  }, [store]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { BlockchainStore, StoreProvider, useStore };
