/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ERC1155, ERC1155Interface } from "../../../token/ERC1155/ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200179c3803806200179c83398101604081905262000034916200011b565b6200003f8162000046565b5062000234565b80516200005b9060029060208401906200005f565b5050565b8280546200006d90620001f7565b90600052602060002090601f016020900481019282620000915760008555620000dc565b82601f10620000ac57805160ff1916838001178555620000dc565b82800160010185558215620000dc579182015b82811115620000dc578251825591602001919060010190620000bf565b50620000ea929150620000ee565b5090565b5b80821115620000ea5760008155600101620000ef565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200012f57600080fd5b82516001600160401b03808211156200014757600080fd5b818501915085601f8301126200015c57600080fd5b81518181111562000171576200017162000105565b604051601f8201601f19908116603f011681019083821181831017156200019c576200019c62000105565b816040528281528886848701011115620001b557600080fd5b600093505b82841015620001d95784840186015181850187015292850192620001ba565b82841115620001eb5760008684830101525b98975050505050505050565b600181811c908216806200020c57607f821691505b602082108114156200022e57634e487b7160e01b600052602260045260246000fd5b50919050565b61155880620002446000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610e33565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610e76565b610235565b60405190151581526020016100a9565b6100e86100e3366004610e9a565b6102d2565b6040516100a99190610f00565b61010861010336600461105f565b610366565b005b61011d610118366004611109565b610408565b6040516100a9919061120f565b610108610138366004611222565b610546565b6100c561014b36600461125e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610187366004611291565b610555565b60006001600160a01b03831661020f5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b031982167fd9b67a2600000000000000000000000000000000000000000000000000000000148061029857506001600160e01b031982167f0e89341c00000000000000000000000000000000000000000000000000000000145b806102cc57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6060600280546102e1906112f6565b80601f016020809104026020016040519081016040528092919081815260200182805461030d906112f6565b801561035a5780601f1061032f5761010080835404028352916020019161035a565b820191906000526020600020905b81548152906001019060200180831161033d57829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103825750610382853361014b565b6103f45760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f7665640000000000000000000000000000000000006064820152608401610206565b61040185858585856105f0565b5050505050565b606081518351146104815760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152608401610206565b6000835167ffffffffffffffff81111561049d5761049d610f13565b6040519080825280602002602001820160405280156104c6578160200160208202803683370190505b50905060005b845181101561053e576105118582815181106104ea576104ea611331565b602002602001015185838151811061050457610504611331565b602002602001015161018c565b82828151811061052357610523611331565b60209081029190910101526105378161135d565b90506104cc565b509392505050565b610551338383610863565b5050565b6001600160a01b0385163314806105715750610571853361014b565b6105e35760405162461bcd60e51b815260206004820152602e60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206f7220617070726f7665640000000000000000000000000000000000006064820152608401610206565b6104018585858585610958565b81518351146106675760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152608401610206565b6001600160a01b0384166106cb5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610206565b3360005b84518110156107f55760008582815181106106ec576106ec611331565b60200260200101519050600085838151811061070a5761070a611331565b602090810291909101810151600084815280835260408082206001600160a01b038e16835290935291909120549091508181101561079d5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610206565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906107da908490611378565b92505081905550505050806107ee9061135d565b90506106cf565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610845929190611390565b60405180910390a461085b818787878787610b03565b505050505050565b816001600160a01b0316836001600160a01b031614156108eb5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152608401610206565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166109bc5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610206565b3360006109c885610cc1565b905060006109d585610cc1565b90506000868152602081815260408083206001600160a01b038c16845290915290205485811015610a5b5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610206565b6000878152602081815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290610a98908490611378565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610af8848a8a8a8a8a610d0c565b505050505050505050565b6001600160a01b0384163b1561085b5760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610b4790899089908890889088906004016113be565b602060405180830381600087803b158015610b6157600080fd5b505af1925050508015610b91575060408051601f3d908101601f19168201909252610b8e9181019061141c565b60015b610c4757610b9d611439565b806308c379a01415610bd75750610bb2611455565b80610bbd5750610bd9565b8060405162461bcd60e51b81526004016102069190610f00565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401610206565b6001600160e01b0319811663bc197c8160e01b14610cb85760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401610206565b50505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610cfb57610cfb611331565b602090810291909101015292915050565b6001600160a01b0384163b1561085b5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610d5090899089908890889088906004016114df565b602060405180830381600087803b158015610d6a57600080fd5b505af1925050508015610d9a575060408051601f3d908101601f19168201909252610d979181019061141c565b60015b610da657610b9d611439565b6001600160e01b0319811663f23a6e6160e01b14610cb85760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401610206565b80356001600160a01b0381168114610e2e57600080fd5b919050565b60008060408385031215610e4657600080fd5b610e4f83610e17565b946020939093013593505050565b6001600160e01b031981168114610e7357600080fd5b50565b600060208284031215610e8857600080fd5b8135610e9381610e5d565b9392505050565b600060208284031215610eac57600080fd5b5035919050565b6000815180845260005b81811015610ed957602081850181015186830182015201610ebd565b81811115610eeb576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610e936020830184610eb3565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610f4f57610f4f610f13565b6040525050565b600067ffffffffffffffff821115610f7057610f70610f13565b5060051b60200190565b600082601f830112610f8b57600080fd5b81356020610f9882610f56565b604051610fa58282610f29565b83815260059390931b8501820192828101915086841115610fc557600080fd5b8286015b84811015610fe05780358352918301918301610fc9565b509695505050505050565b600082601f830112610ffc57600080fd5b813567ffffffffffffffff81111561101657611016610f13565b60405161102d601f8301601f191660200182610f29565b81815284602083860101111561104257600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561107757600080fd5b61108086610e17565b945061108e60208701610e17565b9350604086013567ffffffffffffffff808211156110ab57600080fd5b6110b789838a01610f7a565b945060608801359150808211156110cd57600080fd5b6110d989838a01610f7a565b935060808801359150808211156110ef57600080fd5b506110fc88828901610feb565b9150509295509295909350565b6000806040838503121561111c57600080fd5b823567ffffffffffffffff8082111561113457600080fd5b818501915085601f83011261114857600080fd5b8135602061115582610f56565b6040516111628282610f29565b83815260059390931b850182019282810191508984111561118257600080fd5b948201945b838610156111a75761119886610e17565b82529482019490820190611187565b965050860135925050808211156111bd57600080fd5b506111ca85828601610f7a565b9150509250929050565b600081518084526020808501945080840160005b83811015611204578151875295820195908201906001016111e8565b509495945050505050565b602081526000610e9360208301846111d4565b6000806040838503121561123557600080fd5b61123e83610e17565b91506020830135801515811461125357600080fd5b809150509250929050565b6000806040838503121561127157600080fd5b61127a83610e17565b915061128860208401610e17565b90509250929050565b600080600080600060a086880312156112a957600080fd5b6112b286610e17565b94506112c060208701610e17565b93506040860135925060608601359150608086013567ffffffffffffffff8111156112ea57600080fd5b6110fc88828901610feb565b600181811c9082168061130a57607f821691505b6020821081141561132b57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561137157611371611347565b5060010190565b6000821982111561138b5761138b611347565b500190565b6040815260006113a360408301856111d4565b82810360208401526113b581856111d4565b95945050505050565b60006001600160a01b03808816835280871660208401525060a060408301526113ea60a08301866111d4565b82810360608401526113fc81866111d4565b905082810360808401526114108185610eb3565b98975050505050505050565b60006020828403121561142e57600080fd5b8151610e9381610e5d565b600060033d11156114525760046000803e5060005160e01c5b90565b600060443d10156114635790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561149357505050505090565b82850191508151818111156114ab5750505050505090565b843d87010160208285010111156114c55750505050505090565b6114d460208286010187610f29565b509095945050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261151760a0830184610eb3565b97965050505050505056fea2646970667358221220145181ca0d89057cd0f3786d83af257c8c72a33040bd78f6c20748be8953337364736f6c63430008090033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  override connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}