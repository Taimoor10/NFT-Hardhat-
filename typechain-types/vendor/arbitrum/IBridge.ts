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
  PayableOverrides,
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

export interface IBridgeInterface extends utils.Interface {
  functions: {
    "activeOutbox()": FunctionFragment;
    "allowedDelayedInboxList(uint256)": FunctionFragment;
    "allowedDelayedInboxes(address)": FunctionFragment;
    "allowedOutboxList(uint256)": FunctionFragment;
    "allowedOutboxes(address)": FunctionFragment;
    "delayedInboxAccs(uint256)": FunctionFragment;
    "delayedMessageCount()": FunctionFragment;
    "enqueueDelayedMessage(uint8,address,bytes32)": FunctionFragment;
    "enqueueSequencerMessage(bytes32,uint256,uint256,uint256)": FunctionFragment;
    "executeCall(address,uint256,bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "rollup()": FunctionFragment;
    "sequencerInbox()": FunctionFragment;
    "sequencerInboxAccs(uint256)": FunctionFragment;
    "sequencerMessageCount()": FunctionFragment;
    "sequencerReportedSubMessageCount()": FunctionFragment;
    "setDelayedInbox(address,bool)": FunctionFragment;
    "setOutbox(address,bool)": FunctionFragment;
    "setSequencerInbox(address)": FunctionFragment;
    "submitBatchSpendingReport(address,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activeOutbox"
      | "allowedDelayedInboxList"
      | "allowedDelayedInboxes"
      | "allowedOutboxList"
      | "allowedOutboxes"
      | "delayedInboxAccs"
      | "delayedMessageCount"
      | "enqueueDelayedMessage"
      | "enqueueSequencerMessage"
      | "executeCall"
      | "initialize"
      | "rollup"
      | "sequencerInbox"
      | "sequencerInboxAccs"
      | "sequencerMessageCount"
      | "sequencerReportedSubMessageCount"
      | "setDelayedInbox"
      | "setOutbox"
      | "setSequencerInbox"
      | "submitBatchSpendingReport"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activeOutbox",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowedDelayedInboxList",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedDelayedInboxes",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedOutboxList",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedOutboxes",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "delayedInboxAccs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "delayedMessageCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enqueueDelayedMessage",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "enqueueSequencerMessage",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeCall",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "rollup", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sequencerInbox",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sequencerInboxAccs",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sequencerMessageCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sequencerReportedSubMessageCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDelayedInbox",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setOutbox",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSequencerInbox",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitBatchSpendingReport",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "activeOutbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedDelayedInboxList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedDelayedInboxes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedOutboxList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedOutboxes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delayedInboxAccs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delayedMessageCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enqueueDelayedMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enqueueSequencerMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rollup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sequencerInbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sequencerInboxAccs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sequencerMessageCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sequencerReportedSubMessageCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDelayedInbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOutbox", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSequencerInbox",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitBatchSpendingReport",
    data: BytesLike
  ): Result;

  events: {
    "BridgeCallTriggered(address,address,uint256,bytes)": EventFragment;
    "InboxToggle(address,bool)": EventFragment;
    "MessageDelivered(uint256,bytes32,address,uint8,address,bytes32,uint256,uint64)": EventFragment;
    "OutboxToggle(address,bool)": EventFragment;
    "SequencerInboxUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BridgeCallTriggered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InboxToggle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageDelivered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OutboxToggle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SequencerInboxUpdated"): EventFragment;
}

export interface BridgeCallTriggeredEventObject {
  outbox: string;
  to: string;
  value: BigNumber;
  data: string;
}
export type BridgeCallTriggeredEvent = TypedEvent<
  [string, string, BigNumber, string],
  BridgeCallTriggeredEventObject
>;

export type BridgeCallTriggeredEventFilter =
  TypedEventFilter<BridgeCallTriggeredEvent>;

export interface InboxToggleEventObject {
  inbox: string;
  enabled: boolean;
}
export type InboxToggleEvent = TypedEvent<
  [string, boolean],
  InboxToggleEventObject
>;

export type InboxToggleEventFilter = TypedEventFilter<InboxToggleEvent>;

export interface MessageDeliveredEventObject {
  messageIndex: BigNumber;
  beforeInboxAcc: string;
  inbox: string;
  kind: number;
  sender: string;
  messageDataHash: string;
  baseFeeL1: BigNumber;
  timestamp: BigNumber;
}
export type MessageDeliveredEvent = TypedEvent<
  [BigNumber, string, string, number, string, string, BigNumber, BigNumber],
  MessageDeliveredEventObject
>;

export type MessageDeliveredEventFilter =
  TypedEventFilter<MessageDeliveredEvent>;

export interface OutboxToggleEventObject {
  outbox: string;
  enabled: boolean;
}
export type OutboxToggleEvent = TypedEvent<
  [string, boolean],
  OutboxToggleEventObject
>;

export type OutboxToggleEventFilter = TypedEventFilter<OutboxToggleEvent>;

export interface SequencerInboxUpdatedEventObject {
  newSequencerInbox: string;
}
export type SequencerInboxUpdatedEvent = TypedEvent<
  [string],
  SequencerInboxUpdatedEventObject
>;

export type SequencerInboxUpdatedEventFilter =
  TypedEventFilter<SequencerInboxUpdatedEvent>;

export interface IBridge extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBridgeInterface;

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
    activeOutbox(overrides?: CallOverrides): Promise<[string]>;

    allowedDelayedInboxList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allowedDelayedInboxes(
      inbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    allowedOutboxList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    allowedOutboxes(
      outbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    delayedInboxAccs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    delayedMessageCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    enqueueDelayedMessage(
      kind: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      messageDataHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    enqueueSequencerMessage(
      dataHash: PromiseOrValue<BytesLike>,
      afterDelayedMessagesRead: PromiseOrValue<BigNumberish>,
      prevMessageCount: PromiseOrValue<BigNumberish>,
      newMessageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeCall(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      rollup_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rollup(overrides?: CallOverrides): Promise<[string]>;

    sequencerInbox(overrides?: CallOverrides): Promise<[string]>;

    sequencerInboxAccs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    sequencerMessageCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    sequencerReportedSubMessageCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setDelayedInbox(
      inbox: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setOutbox(
      inbox: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSequencerInbox(
      _sequencerInbox: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitBatchSpendingReport(
      batchPoster: PromiseOrValue<string>,
      dataHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  activeOutbox(overrides?: CallOverrides): Promise<string>;

  allowedDelayedInboxList(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allowedDelayedInboxes(
    inbox: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  allowedOutboxList(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  allowedOutboxes(
    outbox: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  delayedInboxAccs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  delayedMessageCount(overrides?: CallOverrides): Promise<BigNumber>;

  enqueueDelayedMessage(
    kind: PromiseOrValue<BigNumberish>,
    sender: PromiseOrValue<string>,
    messageDataHash: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  enqueueSequencerMessage(
    dataHash: PromiseOrValue<BytesLike>,
    afterDelayedMessagesRead: PromiseOrValue<BigNumberish>,
    prevMessageCount: PromiseOrValue<BigNumberish>,
    newMessageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeCall(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    rollup_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rollup(overrides?: CallOverrides): Promise<string>;

  sequencerInbox(overrides?: CallOverrides): Promise<string>;

  sequencerInboxAccs(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  sequencerMessageCount(overrides?: CallOverrides): Promise<BigNumber>;

  sequencerReportedSubMessageCount(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setDelayedInbox(
    inbox: PromiseOrValue<string>,
    enabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setOutbox(
    inbox: PromiseOrValue<string>,
    enabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSequencerInbox(
    _sequencerInbox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitBatchSpendingReport(
    batchPoster: PromiseOrValue<string>,
    dataHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activeOutbox(overrides?: CallOverrides): Promise<string>;

    allowedDelayedInboxList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedDelayedInboxes(
      inbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    allowedOutboxList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedOutboxes(
      outbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    delayedInboxAccs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    delayedMessageCount(overrides?: CallOverrides): Promise<BigNumber>;

    enqueueDelayedMessage(
      kind: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      messageDataHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enqueueSequencerMessage(
      dataHash: PromiseOrValue<BytesLike>,
      afterDelayedMessagesRead: PromiseOrValue<BigNumberish>,
      prevMessageCount: PromiseOrValue<BigNumberish>,
      newMessageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string] & {
        seqMessageIndex: BigNumber;
        beforeAcc: string;
        delayedAcc: string;
        acc: string;
      }
    >;

    executeCall(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { success: boolean; returnData: string }>;

    initialize(
      rollup_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    rollup(overrides?: CallOverrides): Promise<string>;

    sequencerInbox(overrides?: CallOverrides): Promise<string>;

    sequencerInboxAccs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    sequencerMessageCount(overrides?: CallOverrides): Promise<BigNumber>;

    sequencerReportedSubMessageCount(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDelayedInbox(
      inbox: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setOutbox(
      inbox: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSequencerInbox(
      _sequencerInbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitBatchSpendingReport(
      batchPoster: PromiseOrValue<string>,
      dataHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "BridgeCallTriggered(address,address,uint256,bytes)"(
      outbox?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      data?: null
    ): BridgeCallTriggeredEventFilter;
    BridgeCallTriggered(
      outbox?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null,
      data?: null
    ): BridgeCallTriggeredEventFilter;

    "InboxToggle(address,bool)"(
      inbox?: PromiseOrValue<string> | null,
      enabled?: null
    ): InboxToggleEventFilter;
    InboxToggle(
      inbox?: PromiseOrValue<string> | null,
      enabled?: null
    ): InboxToggleEventFilter;

    "MessageDelivered(uint256,bytes32,address,uint8,address,bytes32,uint256,uint64)"(
      messageIndex?: PromiseOrValue<BigNumberish> | null,
      beforeInboxAcc?: PromiseOrValue<BytesLike> | null,
      inbox?: null,
      kind?: null,
      sender?: null,
      messageDataHash?: null,
      baseFeeL1?: null,
      timestamp?: null
    ): MessageDeliveredEventFilter;
    MessageDelivered(
      messageIndex?: PromiseOrValue<BigNumberish> | null,
      beforeInboxAcc?: PromiseOrValue<BytesLike> | null,
      inbox?: null,
      kind?: null,
      sender?: null,
      messageDataHash?: null,
      baseFeeL1?: null,
      timestamp?: null
    ): MessageDeliveredEventFilter;

    "OutboxToggle(address,bool)"(
      outbox?: PromiseOrValue<string> | null,
      enabled?: null
    ): OutboxToggleEventFilter;
    OutboxToggle(
      outbox?: PromiseOrValue<string> | null,
      enabled?: null
    ): OutboxToggleEventFilter;

    "SequencerInboxUpdated(address)"(
      newSequencerInbox?: null
    ): SequencerInboxUpdatedEventFilter;
    SequencerInboxUpdated(
      newSequencerInbox?: null
    ): SequencerInboxUpdatedEventFilter;
  };

  estimateGas: {
    activeOutbox(overrides?: CallOverrides): Promise<BigNumber>;

    allowedDelayedInboxList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allowedDelayedInboxes(
      inbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedOutboxList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    allowedOutboxes(
      outbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delayedInboxAccs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delayedMessageCount(overrides?: CallOverrides): Promise<BigNumber>;

    enqueueDelayedMessage(
      kind: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      messageDataHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    enqueueSequencerMessage(
      dataHash: PromiseOrValue<BytesLike>,
      afterDelayedMessagesRead: PromiseOrValue<BigNumberish>,
      prevMessageCount: PromiseOrValue<BigNumberish>,
      newMessageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeCall(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      rollup_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rollup(overrides?: CallOverrides): Promise<BigNumber>;

    sequencerInbox(overrides?: CallOverrides): Promise<BigNumber>;

    sequencerInboxAccs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sequencerMessageCount(overrides?: CallOverrides): Promise<BigNumber>;

    sequencerReportedSubMessageCount(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDelayedInbox(
      inbox: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setOutbox(
      inbox: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSequencerInbox(
      _sequencerInbox: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitBatchSpendingReport(
      batchPoster: PromiseOrValue<string>,
      dataHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activeOutbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowedDelayedInboxList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allowedDelayedInboxes(
      inbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedOutboxList(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    allowedOutboxes(
      outbox: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delayedInboxAccs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delayedMessageCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enqueueDelayedMessage(
      kind: PromiseOrValue<BigNumberish>,
      sender: PromiseOrValue<string>,
      messageDataHash: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    enqueueSequencerMessage(
      dataHash: PromiseOrValue<BytesLike>,
      afterDelayedMessagesRead: PromiseOrValue<BigNumberish>,
      prevMessageCount: PromiseOrValue<BigNumberish>,
      newMessageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeCall(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      rollup_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sequencerInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sequencerInboxAccs(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sequencerMessageCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sequencerReportedSubMessageCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDelayedInbox(
      inbox: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setOutbox(
      inbox: PromiseOrValue<string>,
      enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSequencerInbox(
      _sequencerInbox: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitBatchSpendingReport(
      batchPoster: PromiseOrValue<string>,
      dataHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
