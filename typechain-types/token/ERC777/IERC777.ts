/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IERC777Interface extends utils.Interface {
  functions: {
    "authorizeOperator(address)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256,bytes)": FunctionFragment;
    "defaultOperators()": FunctionFragment;
    "granularity()": FunctionFragment;
    "isOperatorFor(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "operatorBurn(address,uint256,bytes,bytes)": FunctionFragment;
    "operatorSend(address,address,uint256,bytes,bytes)": FunctionFragment;
    "revokeOperator(address)": FunctionFragment;
    "send(address,uint256,bytes)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authorizeOperator"
      | "balanceOf"
      | "burn"
      | "defaultOperators"
      | "granularity"
      | "isOperatorFor"
      | "name"
      | "operatorBurn"
      | "operatorSend"
      | "revokeOperator"
      | "send"
      | "symbol"
      | "totalSupply"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "authorizeOperator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultOperators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "granularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isOperatorFor",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operatorBurn",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorSend",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOperator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "authorizeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "defaultOperators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "granularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperatorFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operatorBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizedOperator(address,address)": EventFragment;
    "Burned(address,address,uint256,bytes,bytes)": EventFragment;
    "Minted(address,address,uint256,bytes,bytes)": EventFragment;
    "RevokedOperator(address,address)": EventFragment;
    "Sent(address,address,address,uint256,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizedOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokedOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
}

export interface AuthorizedOperatorEventObject {
  operator: string;
  tokenHolder: string;
}
export type AuthorizedOperatorEvent = TypedEvent<
  [string, string],
  AuthorizedOperatorEventObject
>;

export type AuthorizedOperatorEventFilter =
  TypedEventFilter<AuthorizedOperatorEvent>;

export interface BurnedEventObject {
  operator: string;
  from: string;
  amount: BigNumber;
  data: string;
  operatorData: string;
}
export type BurnedEvent = TypedEvent<
  [string, string, BigNumber, string, string],
  BurnedEventObject
>;

export type BurnedEventFilter = TypedEventFilter<BurnedEvent>;

export interface MintedEventObject {
  operator: string;
  to: string;
  amount: BigNumber;
  data: string;
  operatorData: string;
}
export type MintedEvent = TypedEvent<
  [string, string, BigNumber, string, string],
  MintedEventObject
>;

export type MintedEventFilter = TypedEventFilter<MintedEvent>;

export interface RevokedOperatorEventObject {
  operator: string;
  tokenHolder: string;
}
export type RevokedOperatorEvent = TypedEvent<
  [string, string],
  RevokedOperatorEventObject
>;

export type RevokedOperatorEventFilter = TypedEventFilter<RevokedOperatorEvent>;

export interface SentEventObject {
  operator: string;
  from: string;
  to: string;
  amount: BigNumber;
  data: string;
  operatorData: string;
}
export type SentEvent = TypedEvent<
  [string, string, string, BigNumber, string, string],
  SentEventObject
>;

export type SentEventFilter = TypedEventFilter<SentEvent>;

export interface IERC777 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC777Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    authorizeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    defaultOperators(overrides?: CallOverrides): Promise<[string[]]>;

    granularity(overrides?: CallOverrides): Promise<[BigNumber]>;

    isOperatorFor(
      operator: PromiseOrValue<string>,
      tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    operatorBurn(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    operatorSend(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    send(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  authorizeOperator(
    operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    amount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  defaultOperators(overrides?: CallOverrides): Promise<string[]>;

  granularity(overrides?: CallOverrides): Promise<BigNumber>;

  isOperatorFor(
    operator: PromiseOrValue<string>,
    tokenHolder: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  operatorBurn(
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    operatorData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  operatorSend(
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    operatorData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeOperator(
    operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  send(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    authorizeOperator(
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    defaultOperators(overrides?: CallOverrides): Promise<string[]>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    isOperatorFor(
      operator: PromiseOrValue<string>,
      tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    operatorBurn(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    operatorSend(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeOperator(
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    send(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AuthorizedOperator(address,address)"(
      operator?: PromiseOrValue<string> | null,
      tokenHolder?: PromiseOrValue<string> | null
    ): AuthorizedOperatorEventFilter;
    AuthorizedOperator(
      operator?: PromiseOrValue<string> | null,
      tokenHolder?: PromiseOrValue<string> | null
    ): AuthorizedOperatorEventFilter;

    "Burned(address,address,uint256,bytes,bytes)"(
      operator?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): BurnedEventFilter;
    Burned(
      operator?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): BurnedEventFilter;

    "Minted(address,address,uint256,bytes,bytes)"(
      operator?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): MintedEventFilter;
    Minted(
      operator?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): MintedEventFilter;

    "RevokedOperator(address,address)"(
      operator?: PromiseOrValue<string> | null,
      tokenHolder?: PromiseOrValue<string> | null
    ): RevokedOperatorEventFilter;
    RevokedOperator(
      operator?: PromiseOrValue<string> | null,
      tokenHolder?: PromiseOrValue<string> | null
    ): RevokedOperatorEventFilter;

    "Sent(address,address,address,uint256,bytes,bytes)"(
      operator?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): SentEventFilter;
    Sent(
      operator?: PromiseOrValue<string> | null,
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): SentEventFilter;
  };

  estimateGas: {
    authorizeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    defaultOperators(overrides?: CallOverrides): Promise<BigNumber>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    isOperatorFor(
      operator: PromiseOrValue<string>,
      tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    operatorBurn(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    operatorSend(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    send(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authorizeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    defaultOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOperatorFor(
      operator: PromiseOrValue<string>,
      tokenHolder: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operatorBurn(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    operatorSend(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operatorData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    send(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
