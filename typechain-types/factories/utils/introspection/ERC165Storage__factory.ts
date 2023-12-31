/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC165Storage,
  ERC165StorageInterface,
} from "../../../utils/introspection/ERC165Storage";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ERC165Storage__factory {
  static readonly abi = _abi;
  static createInterface(): ERC165StorageInterface {
    return new utils.Interface(_abi) as ERC165StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC165Storage {
    return new Contract(address, _abi, signerOrProvider) as ERC165Storage;
  }
}
