/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CrossChainEnabledAMB,
  CrossChainEnabledAMBInterface,
} from "../../../crosschain/amb/CrossChainEnabledAMB";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x60a0604052348015600f57600080fd5b5060405160bc38038060bc833981016040819052602a91603a565b6001600160a01b03166080526068565b600060208284031215604b57600080fd5b81516001600160a01b0381168114606157600080fd5b9392505050565b608051603f607d60003960005050603f6000f3fe6080604052600080fdfea2646970667358221220cb1e8c83acfa7cd184d6a8b6d93ad0915b333b93e6ce66c375d01ef731ba7feb64736f6c63430008090033";

type CrossChainEnabledAMBConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainEnabledAMBConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainEnabledAMB__factory extends ContractFactory {
  constructor(...args: CrossChainEnabledAMBConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    bridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrossChainEnabledAMB> {
    return super.deploy(
      bridge,
      overrides || {}
    ) as Promise<CrossChainEnabledAMB>;
  }
  override getDeployTransaction(
    bridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(bridge, overrides || {});
  }
  override attach(address: string): CrossChainEnabledAMB {
    return super.attach(address) as CrossChainEnabledAMB;
  }
  override connect(signer: Signer): CrossChainEnabledAMB__factory {
    return super.connect(signer) as CrossChainEnabledAMB__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainEnabledAMBInterface {
    return new utils.Interface(_abi) as CrossChainEnabledAMBInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledAMB {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledAMB;
  }
}