/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PaymentSplitter,
  PaymentSplitterInterface,
} from "../../finance/PaymentSplitter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares_",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20PaymentReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    ],
    name: "releasable",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "releasable",
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
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
        name: "account",
        type: "address",
      },
    ],
    name: "shares",
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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "totalReleased",
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
    inputs: [],
    name: "totalReleased",
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
    inputs: [],
    name: "totalShares",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052604051620012c6380380620012c683398101604081905262000026916200042e565b8051825114620000985760405162461bcd60e51b815260206004820152603260248201527f5061796d656e7453706c69747465723a2070617965657320616e6420736861726044820152710cae640d8cadccee8d040dad2e6dac2e8c6d60731b60648201526084015b60405180910390fd5b6000825111620000eb5760405162461bcd60e51b815260206004820152601a60248201527f5061796d656e7453706c69747465723a206e6f2070617965657300000000000060448201526064016200008f565b60005b82518110156200015757620001428382815181106200011157620001116200050c565b60200260200101518383815181106200012e576200012e6200050c565b60200260200101516200016060201b60201c565b806200014e8162000538565b915050620000ee565b50505062000571565b6001600160a01b038216620001cd5760405162461bcd60e51b815260206004820152602c60248201527f5061796d656e7453706c69747465723a206163636f756e74206973207468652060448201526b7a65726f206164647265737360a01b60648201526084016200008f565b600081116200021f5760405162461bcd60e51b815260206004820152601d60248201527f5061796d656e7453706c69747465723a2073686172657320617265203000000060448201526064016200008f565b6001600160a01b038216600090815260026020526040902054156200029b5760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e7420616c726561647960448201526a206861732073686172657360a81b60648201526084016200008f565b60048054600181019091557f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180546001600160a01b0319166001600160a01b0384169081179091556000908152600260205260408120829055546200030390829062000556565b600055604080516001600160a01b0384168152602081018390527f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac910160405180910390a15050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156200038d576200038d6200034c565b604052919050565b60006001600160401b03821115620003b157620003b16200034c565b5060051b60200190565b600082601f830112620003cd57600080fd5b81516020620003e6620003e08362000395565b62000362565b82815260059290921b840181019181810190868411156200040657600080fd5b8286015b848110156200042357805183529183019183016200040a565b509695505050505050565b600080604083850312156200044257600080fd5b82516001600160401b03808211156200045a57600080fd5b818501915085601f8301126200046f57600080fd5b8151602062000482620003e08362000395565b82815260059290921b84018101918181019089841115620004a257600080fd5b948201945b83861015620004d95785516001600160a01b0381168114620004c95760008081fd5b82529482019490820190620004a7565b91880151919650909350505080821115620004f357600080fd5b506200050285828601620003bb565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156200054f576200054f62000522565b5060010190565b600082198211156200056c576200056c62000522565b500190565b610d4580620005816000396000f3fe6080604052600436106100c05760003560e01c80639852595c11610074578063ce7c2ac21161004e578063ce7c2ac214610268578063d79779b21461029e578063e33b7de3146102d457600080fd5b80639852595c146101f2578063a3f8eace14610228578063c45ac0501461024857600080fd5b8063406072a9116100a5578063406072a91461015457806348b750441461019a5780638b83209b146101ba57600080fd5b8063191655871461010e5780633a98ef391461013057600080fd5b36610109577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be77033604080516001600160a01b0390921682523460208301520160405180910390a1005b600080fd5b34801561011a57600080fd5b5061012e610129366004610b4a565b6102e9565b005b34801561013c57600080fd5b506000545b6040519081526020015b60405180910390f35b34801561016057600080fd5b5061014161016f366004610b67565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3480156101a657600080fd5b5061012e6101b5366004610b67565b610455565b3480156101c657600080fd5b506101da6101d5366004610ba0565b6105e6565b6040516001600160a01b03909116815260200161014b565b3480156101fe57600080fd5b5061014161020d366004610b4a565b6001600160a01b031660009081526003602052604090205490565b34801561023457600080fd5b50610141610243366004610b4a565b610616565b34801561025457600080fd5b50610141610263366004610b67565b61065e565b34801561027457600080fd5b50610141610283366004610b4a565b6001600160a01b031660009081526002602052604090205490565b3480156102aa57600080fd5b506101416102b9366004610b4a565b6001600160a01b031660009081526005602052604090205490565b3480156102e057600080fd5b50600154610141565b6001600160a01b0381166000908152600260205260409020546103625760405162461bcd60e51b815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201526573686172657360d01b60648201526084015b60405180910390fd5b600061036d82610616565b9050806103d05760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201526a191d59481c185e5b595b9d60aa1b6064820152608401610359565b80600160008282546103e29190610bcf565b90915550506001600160a01b038216600090815260036020526040902080548201905561040f8282610751565b604080516001600160a01b0384168152602081018390527fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056910160405180910390a15050565b6001600160a01b0381166000908152600260205260409020546104c95760405162461bcd60e51b815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201526573686172657360d01b6064820152608401610359565b60006104d5838361065e565b9050806105385760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201526a191d59481c185e5b595b9d60aa1b6064820152608401610359565b6001600160a01b03831660009081526005602052604081208054839290610560908490610bcf565b90915550506001600160a01b03808416600090815260066020908152604080832093861683529290522080548201905561059b83838361086f565b604080516001600160a01b038481168252602082018490528516917f3be5b7a71e84ed12875d241991c70855ac5817d847039e17a9d895c1ceb0f18a910160405180910390a2505050565b6000600482815481106105fb576105fb610be7565b6000918252602090912001546001600160a01b031692915050565b60008061062260015490565b61062c9047610bcf565b90506106578382610652866001600160a01b031660009081526003602052604090205490565b6108ef565b9392505050565b6001600160a01b03821660009081526005602052604081205481906040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038616906370a082319060240160206040518083038186803b1580156106d157600080fd5b505afa1580156106e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107099190610bfd565b6107139190610bcf565b6001600160a01b0380861660009081526006602090815260408083209388168352929052205490915061074990849083906108ef565b949350505050565b804710156107a15760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610359565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146107ee576040519150601f19603f3d011682016040523d82523d6000602084013e6107f3565b606091505b505090508061086a5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610359565b505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261086a90849061092a565b600080546001600160a01b0385168252600260205260408220548391906109169086610c16565b6109209190610c35565b6107499190610c57565b600061097f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610a129092919063ffffffff16565b90508051600014806109a05750808060200190518101906109a09190610c6e565b61086a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610359565b6060610749848460008585600080866001600160a01b03168587604051610a399190610cc0565b60006040518083038185875af1925050503d8060008114610a76576040519150601f19603f3d011682016040523d82523d6000602084013e610a7b565b606091505b5091509150610a8c87838387610a97565b979650505050505050565b60608315610b03578251610afc576001600160a01b0385163b610afc5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610359565b5081610749565b6107498383815115610b185781518083602001fd5b8060405162461bcd60e51b81526004016103599190610cdc565b6001600160a01b0381168114610b4757600080fd5b50565b600060208284031215610b5c57600080fd5b813561065781610b32565b60008060408385031215610b7a57600080fd5b8235610b8581610b32565b91506020830135610b9581610b32565b809150509250929050565b600060208284031215610bb257600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610be257610be2610bb9565b500190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610c0f57600080fd5b5051919050565b6000816000190483118215151615610c3057610c30610bb9565b500290565b600082610c5257634e487b7160e01b600052601260045260246000fd5b500490565b600082821015610c6957610c69610bb9565b500390565b600060208284031215610c8057600080fd5b8151801515811461065757600080fd5b60005b83811015610cab578181015183820152602001610c93565b83811115610cba576000848401525b50505050565b60008251610cd2818460208701610c90565b9190910192915050565b6020815260008251806020840152610cfb816040850160208701610c90565b601f01601f1916919091016040019291505056fea264697066735822122009dde07c42069601dc36e834f2954a129fe964b0862b26d6a94a28959d94582864736f6c63430008090033";

type PaymentSplitterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentSplitterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PaymentSplitter__factory extends ContractFactory {
  constructor(...args: PaymentSplitterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    payees: PromiseOrValue<string>[],
    shares_: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<PaymentSplitter> {
    return super.deploy(
      payees,
      shares_,
      overrides || {}
    ) as Promise<PaymentSplitter>;
  }
  override getDeployTransaction(
    payees: PromiseOrValue<string>[],
    shares_: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(payees, shares_, overrides || {});
  }
  override attach(address: string): PaymentSplitter {
    return super.attach(address) as PaymentSplitter;
  }
  override connect(signer: Signer): PaymentSplitter__factory {
    return super.connect(signer) as PaymentSplitter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentSplitterInterface {
    return new utils.Interface(_abi) as PaymentSplitterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PaymentSplitter {
    return new Contract(address, _abi, signerOrProvider) as PaymentSplitter;
  }
}