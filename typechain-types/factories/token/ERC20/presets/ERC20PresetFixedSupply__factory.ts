/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC20PresetFixedSupply,
  ERC20PresetFixedSupplyInterface,
} from "../../../../token/ERC20/presets/ERC20PresetFixedSupply";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
  {
    inputs: [],
    name: "symbol",
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
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000efc38038062000efc8339810160408190526200003491620002bb565b8351849084906200004d90600390602085019062000148565b5080516200006390600490602084019062000148565b5050506200007881836200008260201b60201c565b50505050620003b4565b6001600160a01b038216620000dd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620000f1919062000350565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b828054620001569062000377565b90600052602060002090601f0160209004810192826200017a5760008555620001c5565b82601f106200019557805160ff1916838001178555620001c5565b82800160010185558215620001c5579182015b82811115620001c5578251825591602001919060010190620001a8565b50620001d3929150620001d7565b5090565b5b80821115620001d35760008155600101620001d8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200021657600080fd5b81516001600160401b0380821115620002335762000233620001ee565b604051601f8301601f19908116603f011681019082821181831017156200025e576200025e620001ee565b816040528381526020925086838588010111156200027b57600080fd5b600091505b838210156200029f578582018301518183018401529082019062000280565b83821115620002b15760008385830101525b9695505050505050565b60008060008060808587031215620002d257600080fd5b84516001600160401b0380821115620002ea57600080fd5b620002f88883890162000204565b955060208701519150808211156200030f57600080fd5b506200031e8782880162000204565b60408701516060880151919550935090506001600160a01b03811681146200034557600080fd5b939692955090935050565b600082198211156200037257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200038c57607f821691505b60208210811415620003ae57634e487b7160e01b600052602260045260246000fd5b50919050565b610b3880620003c46000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101bd578063a457c2d7146101c5578063a9059cbb146101d8578063dd62ed3e146101eb57600080fd5b806342966c681461016c57806370a082311461018157806379cc6790146101aa57600080fd5b806323b872dd116100bd57806323b872dd14610137578063313ce5671461014a578063395093511461015957600080fd5b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec610224565b6040516100f9919061095c565b60405180910390f35b6101156101103660046109cd565b6102b6565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b6101156101453660046109f7565b6102ce565b604051601281526020016100f9565b6101156101673660046109cd565b6102f2565b61017f61017a366004610a33565b610331565b005b61012961018f366004610a4c565b6001600160a01b031660009081526020819052604090205490565b61017f6101b83660046109cd565b61033e565b6100ec610357565b6101156101d33660046109cd565b610366565b6101156101e63660046109cd565b610415565b6101296101f9366004610a6e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461023390610aa1565b80601f016020809104026020016040519081016040528092919081815260200182805461025f90610aa1565b80156102ac5780601f10610281576101008083540402835291602001916102ac565b820191906000526020600020905b81548152906001019060200180831161028f57829003601f168201915b5050505050905090565b6000336102c4818585610423565b5060019392505050565b6000336102dc85828561057c565b6102e785858561060e565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102c4908290869061032c908790610adc565b610423565b61033b33826107fb565b50565b61034982338361057c565b61035382826107fb565b5050565b60606004805461023390610aa1565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104085760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102e78286868403610423565b6000336102c481858561060e565b6001600160a01b03831661049e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b03821661051a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461060857818110156105fb5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103ff565b6106088484848403610423565b50505050565b6001600160a01b03831661068a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b0382166107065760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b038316600090815260208190526040902054818110156107955760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610608565b6001600160a01b0382166108775760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b038216600090815260208190526040902054818110156109065760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016103ff565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910161056f565b600060208083528351808285015260005b818110156109895785810183015185820160400152820161096d565b8181111561099b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109c857600080fd5b919050565b600080604083850312156109e057600080fd5b6109e9836109b1565b946020939093013593505050565b600080600060608486031215610a0c57600080fd5b610a15846109b1565b9250610a23602085016109b1565b9150604084013590509250925092565b600060208284031215610a4557600080fd5b5035919050565b600060208284031215610a5e57600080fd5b610a67826109b1565b9392505050565b60008060408385031215610a8157600080fd5b610a8a836109b1565b9150610a98602084016109b1565b90509250929050565b600181811c90821680610ab557607f821691505b60208210811415610ad657634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610afd57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220fc9d82697ab3ab0c72347cabe0babcaa6fd87552b00e1a87aab6a93319702e7f64736f6c63430008090033";

type ERC20PresetFixedSupplyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20PresetFixedSupplyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20PresetFixedSupply__factory extends ContractFactory {
  constructor(...args: ERC20PresetFixedSupplyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20PresetFixedSupply> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      owner,
      overrides || {}
    ) as Promise<ERC20PresetFixedSupply>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    initialSupply: PromiseOrValue<BigNumberish>,
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      owner,
      overrides || {}
    );
  }
  override attach(address: string): ERC20PresetFixedSupply {
    return super.attach(address) as ERC20PresetFixedSupply;
  }
  override connect(signer: Signer): ERC20PresetFixedSupply__factory {
    return super.connect(signer) as ERC20PresetFixedSupply__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PresetFixedSupplyInterface {
    return new utils.Interface(_abi) as ERC20PresetFixedSupplyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20PresetFixedSupply {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20PresetFixedSupply;
  }
}
