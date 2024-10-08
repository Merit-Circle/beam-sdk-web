export enum ChainId {
  BEAM_MAINNET = 4337,
  BEAM_TESTNET = 13337,
}

export enum ChainName {
  BEAM_MAINNET = 'Beam',
  BEAM_TESTNET = 'Beam Testnet',
}

export type ChainConfig = {
  /** The chain id */
  id: ChainId;
  /** The publishableKey belonging to the chain */
  publishableKey: string;
  /** If the preview environment should be connected to. Setting this to true only has an effect on the testnet chain */
  isPreview?: boolean;
  /** Optionally define whenever all transactions should be sponsored, requires deposits to be made through dashboard.(testnet).onbeam.com */
  sponsor?: boolean;
}[];

export type ClientConfig = {
  /** The chains the SDK can connect to. At least one chain should be defined */
  chains: ChainConfig;
  /** Optionally define a chainId to connect to by default. If omitted, the first defined chain is set to the active chain. */
  chainId?: ChainId;
  /** Set to true to output logs */
  debug?: boolean;
};

export type Session = {
  id: string;
  isActive: boolean;
  sessionAddress: string;
  startTime?: string | null;
  endTime?: string | null;
};
