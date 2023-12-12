/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
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
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
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
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalforAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_color",
        type: "string",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "callStruct",
    outputs: [
      {
        internalType: "string[]",
        name: "_hobbies",
        type: "string[]",
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
    name: "colors",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_first_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_last_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_hobbies",
        type: "string[]",
      },
    ],
    name: "insertStruct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        internalType: "string",
        name: "_color",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
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
        name: "tokenId",
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
        internalType: "address",
        name: "_instructorAddr",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "studentToInstructor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "studentToInstructorCall",
    outputs: [
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "first_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "last_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "hobbies",
        type: "string[]",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002267380380620022678339810160408190526200003491620001db565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b828054620000769062000245565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b611fd580620002926000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806380689973116100cd578063bd11f69d11610081578063d85d3d2711610066578063d85d3d27146102de578063e3ec1312146102f1578063e985e9c51461031157600080fd5b8063bd11f69d146102b8578063c87b56dd146102cb57600080fd5b80639cceb830116100b25780639cceb8301461027a578063a22cb46514610292578063b88d4fde146102a557600080fd5b8063806899731461025f57806395d89b411461027257600080fd5b806323b872dd116101245780636352211e116101095780636352211e1461022657806370a0823114610239578063722cc6e11461024c57600080fd5b806323b872dd1461020057806342842e0e1461021357600080fd5b8063081812fc11610155578063081812fc146101ae578063095ea7b3146101d957806318160ddd146101ee57600080fd5b806301ffc9a71461017157806306fdde0314610199575b600080fd5b61018461017f366004611996565b61034d565b60405190151581526020015b60405180910390f35b6101a16103b8565b6040516101909190611a0b565b6101c16101bc366004611a1e565b61044a565b6040516001600160a01b039091168152602001610190565b6101ec6101e7366004611a53565b610471565b005b6002545b604051908152602001610190565b6101ec61020e366004611a7d565b6105a8565b6101ec610221366004611a7d565b61061f565b6101c1610234366004611a1e565b61063a565b6101f2610247366004611ab9565b61069f565b6101ec61025a366004611b93565b610739565b6101ec61026d366004611ca9565b6107a4565b6101a16107fe565b61028261080d565b6040516101909493929190611d3a565b6101ec6102a0366004611ca9565b610a74565b6101ec6102b3366004611d84565b610a83565b6101a16102c6366004611a1e565b610b01565b6101a16102d9366004611a1e565b610bad565b6101ec6102ec366004611e00565b610c21565b6103046102ff366004611ab9565b610d80565b6040516101909190611e35565b61018461031f366004611e48565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166301ffc9a760e01b148061039757506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806103b257506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546103c790611e7b565b80601f01602080910402602001604051908101604052809291908181526020018280546103f390611e7b565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b600061045582610e76565b506000908152600760205260409020546001600160a01b031690565b600061047c8261063a565b9050806001600160a01b0316836001600160a01b0316141561050b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b03821614806105275750610527813361031f565b6105995760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610502565b6105a38383610edd565b505050565b6105b23382610f58565b6106145760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608401610502565b6105a3838383610fd7565b6105a383838360405180602001604052806000815250610a83565b6000818152600560205260408120546001600160a01b0316806103b25760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610502565b60006001600160a01b03821661071d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e657200000000000000000000000000000000000000000000006064820152608401610502565b506001600160a01b031660009081526006602052604090205490565b336000908152600360209081526040909120858155845190916107639160018401918701906117bc565b50825161077990600283019060208601906117bc565b503360009081526003820160209081526040909120835161079c92850190611840565b505050505050565b6001600160a01b03821660009081526003602090815260408083203384526004835281842085151585529092529091208154815560018083018054918301916107ec90611e7b565b6107f7929190611899565b5050505050565b6060600180546103c790611e7b565b3360009081526004602090815260408083206001808552925282208054918101805460609384938493909287919061084490611e7b565b80601f016020809104026020016040519081016040528092919081815260200182805461087090611e7b565b80156108bd5780601f10610892576101008083540402835291602001916108bd565b820191906000526020600020905b8154815290600101906020018083116108a057829003601f168201915b5050505050905060008360020180546108d590611e7b565b80601f016020809104026020016040519081016040528092919081815260200182805461090190611e7b565b801561094e5780601f106109235761010080835404028352916020019161094e565b820191906000526020600020905b81548152906001019060200180831161093157829003601f168201915b50505050509050600084600301600073f7ac2c1f502bb196b4c049c9d74ad756e85a66b66001600160a01b03166001600160a01b03168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610a5e5783829060005260206000200180546109d190611e7b565b80601f01602080910402602001604051908101604052809291908181526020018280546109fd90611e7b565b8015610a4a5780601f10610a1f57610100808354040283529160200191610a4a565b820191906000526020600020905b815481529060010190602001808311610a2d57829003601f168201915b5050505050815260200190600101906109b2565b50969c959b509399509097509295505050505050565b610a7f3383836111dd565b5050565b610a8d3383610f58565b610aef5760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608401610502565b610afb848484846112ac565b50505050565b60098181548110610b1157600080fd5b906000526020600020016000915090508054610b2c90611e7b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5890611e7b565b8015610ba55780601f10610b7a57610100808354040283529160200191610ba5565b820191906000526020600020905b815481529060010190602001808311610b8857829003601f168201915b505050505081565b6060610bb882610e76565b6000610bcf60408051602081019091526000815290565b90506000815111610bef5760405180602001604052806000815250610c1a565b80610bf984611335565b604051602001610c0a929190611eb6565b6040516020818303038152906040525b9392505050565b600a81604051610c319190611ee5565b9081526040519081900360200190205460ff1615610c915760405162461bcd60e51b815260206004820152601460248201527f436f6c6f7220616c7265616479206578697374730000000000000000000000006044820152606401610502565b600980546001810182556000919091528151610cd4917f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af019060208401906117bc565b50600954600090610ce790600190611f17565b9050610cf333826113df565b6001600a83604051610d059190611ee5565b908152602001604051809103902060006101000a81548160ff021916908315150217905550600160026000828254610d3d9190611f2e565b909155505060405133907f0c1b180fbb60448c5491c5ddc7c3a923854214b9ff70f90a7821333338971f9290610d74908590611a0b565b60405180910390a25050565b6001600160a01b03811660009081526003602081815260408084209283018252808420805482518185028101850190935280835260609593849084015b82821015610e69578382906000526020600020018054610ddc90611e7b565b80601f0160208091040260200160405190810160405280929190818152602001828054610e0890611e7b565b8015610e555780601f10610e2a57610100808354040283529160200191610e55565b820191906000526020600020905b815481529060010190602001808311610e3857829003601f168201915b505050505081526020019060010190610dbd565b5092979650505050505050565b6000818152600560205260409020546001600160a01b0316610eda5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610502565b50565b6000818152600760205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610f1f8261063a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610f648361063a565b9050806001600160a01b0316846001600160a01b03161480610fab57506001600160a01b0380821660009081526008602090815260408083209388168352929052205460ff165b80610fcf5750836001600160a01b0316610fc48461044a565b6001600160a01b0316145b949350505050565b826001600160a01b0316610fea8261063a565b6001600160a01b03161461104e5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610502565b6001600160a01b0382166110c95760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610502565b826001600160a01b03166110dc8261063a565b6001600160a01b0316146111405760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610502565b6000818152600760209081526040808320805473ffffffffffffffffffffffffffffffffffffffff199081169091556001600160a01b0387811680865260068552838620805460001901905590871680865283862080546001019055868652600590945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b0316141561123f5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610502565b6001600160a01b03838116600081815260086020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f09c34c45f0729f29e70549f21c581613cd3fe8086e6b6e72608960bc35a2d4e7910160405180910390a3505050565b6112b7848484610fd7565b6112c384848484611577565b610afb5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610502565b60606000611342836116da565b600101905060008167ffffffffffffffff81111561136257611362611ad4565b6040519080825280601f01601f19166020018201604052801561138c576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85049450846113d2576113d7565b611396565b509392505050565b6001600160a01b0382166114355760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610502565b6000818152600560205260409020546001600160a01b03161561149a5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610502565b6000818152600560205260409020546001600160a01b0316156114ff5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610502565b6001600160a01b0382166000818152600660209081526040808320805460010190558483526005909152808220805473ffffffffffffffffffffffffffffffffffffffff19168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b156116cf57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906115bb903390899088908890600401611f46565b602060405180830381600087803b1580156115d557600080fd5b505af1925050508015611605575060408051601f3d908101601f1916820190925261160291810190611f82565b60015b6116b5573d808015611633576040519150601f19603f3d011682016040523d82523d6000602084013e611638565b606091505b5080516116ad5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610502565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610fcf565b506001949350505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611723577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831061174f576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061176d57662386f26fc10000830492506010015b6305f5e1008310611785576305f5e100830492506008015b612710831061179957612710830492506004015b606483106117ab576064830492506002015b600a83106103b25760010192915050565b8280546117c890611e7b565b90600052602060002090601f0160209004810192826117ea5760008555611830565b82601f1061180357805160ff1916838001178555611830565b82800160010185558215611830579182015b82811115611830578251825591602001919060010190611815565b5061183c929150611914565b5090565b82805482825590600052602060002090810192821561188d579160200282015b8281111561188d578251805161187d9184916020909101906117bc565b5091602001919060010190611860565b5061183c929150611929565b8280546118a590611e7b565b90600052602060002090601f0160209004810192826118c75760008555611830565b82601f106118d85780548555611830565b8280016001018555821561183057600052602060002091601f016020900482015b828111156118305782548255916001019190600101906118f9565b5b8082111561183c5760008155600101611915565b8082111561183c57600061193d8282611946565b50600101611929565b50805461195290611e7b565b6000825580601f10611962575050565b601f016020900490600052602060002090810190610eda9190611914565b6001600160e01b031981168114610eda57600080fd5b6000602082840312156119a857600080fd5b8135610c1a81611980565b60005b838110156119ce5781810151838201526020016119b6565b83811115610afb5750506000910152565b600081518084526119f78160208601602086016119b3565b601f01601f19169290920160200192915050565b602081526000610c1a60208301846119df565b600060208284031215611a3057600080fd5b5035919050565b80356001600160a01b0381168114611a4e57600080fd5b919050565b60008060408385031215611a6657600080fd5b611a6f83611a37565b946020939093013593505050565b600080600060608486031215611a9257600080fd5b611a9b84611a37565b9250611aa960208501611a37565b9150604084013590509250925092565b600060208284031215611acb57600080fd5b610c1a82611a37565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611b1357611b13611ad4565b604052919050565b600067ffffffffffffffff831115611b3557611b35611ad4565b611b48601f8401601f1916602001611aea565b9050828152838383011115611b5c57600080fd5b828260208301376000602084830101529392505050565b600082601f830112611b8457600080fd5b610c1a83833560208501611b1b565b60008060008060808587031215611ba957600080fd5b8435935060208086013567ffffffffffffffff80821115611bc957600080fd5b611bd589838a01611b73565b95506040880135915080821115611beb57600080fd5b611bf789838a01611b73565b94506060880135915080821115611c0d57600080fd5b818801915088601f830112611c2157600080fd5b813581811115611c3357611c33611ad4565b8060051b611c42858201611aea565b918252838101850191858101908c841115611c5c57600080fd5b86860192505b83831015611c9857823585811115611c7a5760008081fd5b611c888e89838a0101611b73565b8352509186019190860190611c62565b999c989b5096995050505050505050565b60008060408385031215611cbc57600080fd5b611cc583611a37565b915060208301358015158114611cda57600080fd5b809150509250929050565b600081518084526020808501808196508360051b8101915082860160005b85811015611d2d578284038952611d1b8483516119df565b98850198935090840190600101611d03565b5091979650505050505050565b848152608060208201526000611d5360808301866119df565b8281036040840152611d6581866119df565b90508281036060840152611d798185611ce5565b979650505050505050565b60008060008060808587031215611d9a57600080fd5b611da385611a37565b9350611db160208601611a37565b925060408501359150606085013567ffffffffffffffff811115611dd457600080fd5b8501601f81018713611de557600080fd5b611df487823560208401611b1b565b91505092959194509250565b600060208284031215611e1257600080fd5b813567ffffffffffffffff811115611e2957600080fd5b610fcf84828501611b73565b602081526000610c1a6020830184611ce5565b60008060408385031215611e5b57600080fd5b611e6483611a37565b9150611e7260208401611a37565b90509250929050565b600181811c90821680611e8f57607f821691505b60208210811415611eb057634e487b7160e01b600052602260045260246000fd5b50919050565b60008351611ec88184602088016119b3565b835190830190611edc8183602088016119b3565b01949350505050565b60008251611ef78184602087016119b3565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b600082821015611f2957611f29611f01565b500390565b60008219821115611f4157611f41611f01565b500190565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611f7860808301846119df565b9695505050505050565b600060208284031215611f9457600080fd5b8151610c1a8161198056fea264697066735822122055b298ae039c23c3f944cb3ea368eb2c1c3a6eedac9d4dddd7c4e9dd54ffa67f64736f6c63430008090033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}