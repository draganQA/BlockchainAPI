import { Wallet, UserWallets } from "./models";
import {generateAddress} from './utils'


export let dummy = {
    "user66": [
        {
            "address": "kas:831f3f0324c0dd59b46ed6925c4f63a6d787cb862fd7b8f6b3965e83a02d53b3",
            "balance": 419,
            "type": "kas",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        },
        {
            "address": "xrp:b6af4c982b4e71d319fe3c222e5b7420dd13817d6d9c9f8719f6b376b4050d13",
            "balance": 300,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user596": [
        {
            "address": "dot:32d31eeae5f38c9c4a73b0226a759da7dc5fc5d145d127a8e03fd91d6c425ef6",
            "balance": 1215678765,
            "type": "dot",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user680": [
        {
            "address": "eth:65c9b7b5b12f8b7d36d05a6236f19f4779bcb82e57c06c81f76a53e8b002828b",
            "balance": 451,
            "type": "eth",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user542": [
        {
            "address": "dot:a3908a5b40292c0e8d6ed79332d9862e22f20d75df2aeb42f35eab61f7c90b92",
            "balance": 25,
            "type": "dot",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user844": [
        {
            "address": "eth:ebe252e20e20a5f71b6ff9e52e3f6d0b802e735ab78a5e2e77ac3753288e6822",
            "balance": 6,
            "type": "eth",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user86": [
        {
            "address": "ada:f4a30f1a0450f07e284ea146b2b4521db1b6c0267a214b319b34ed062026a67a",
            "balance": 244,
            "type": "ada",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user858": [
        {
            "address": "ada:f25a898d4a3eab81be1b888108bf226fe58f74027eef0a2a7cb729d7a9f929a6",
            "balance": 781,
            "type": "ada",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user143": [
        {
            "address": "xrp:8e62f05de06bf4a3c620b28e5b7427496f5f6a2a92b0a777606ed29e32dbb04b",
            "balance": 815,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user964": [
        {
            "address": "dot:0ef1a256db90bb0cbf372996849fd5839a442429e1f5d85e2c5794cb0b13e0cd",
            "balance": 310,
            "type": "dot",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user632": [
        {
            "address": "eth:4f5986fd4a3d5fd8ff7e052a4484819b0868f5c9d021b2edce3f82d758a0ad54",
            "balance": 843,
            "type": "eth",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user760": [
        {
            "address": "xrp:089ebc951d2bf896ed4b26d94f0788d9d274dc893be6adbe874c6e21c902832f",
            "balance": 510,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user841": [
        {
            "address": "dot:f86aa2302b378f44d7fb7859e8c4ee49f63db1fc8b3052548fa4868e0abfb08a",
            "balance": 694,
            "type": "dot",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user639": [
        {
            "address": "dot:68b537a9f426ec7768b20d05c00e49c3ff31fd62eaf8cf2f0b4e0ad3d4a5a71d",
            "balance": 70,
            "type": "dot",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user6": [
        {
            "address": "xrp:87cd4162da00b18e90e116eb4b22b81ab80af3b9254bf7e1961011d07ff97ee0",
            "balance": 842,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user606": [
        {
            "address": "ada:82f5315d16c1c7d49349a8ab37d4c51087f7db2d68c48135f8e7df6f6c3e00e1",
            "balance": 728,
            "type": "ada",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user477": [
        {
            "address": "eth:9be194b7b2db1a8e6660a7bf94e0d22f4407c95128e7f2d07aee6f32738f7f09",
            "balance": 423,
            "type": "eth",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user653": [
        {
            "address": "ada:7976a934d7a90e6c508d6c6127584cfb7dc19c937af2fbb679ad837f39e1dd9b",
            "balance": 58,
            "type": "ada",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user207": [
        {
            "address": "xrp:3a8e6a8f1c5ef29c106c82dd52097dd9d05703cb1c2fe74fa233b84bc6e7b478",
            "balance": 48,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user790": [
        {
            "address": "xrp:f7921c500e56db53a35c0f58e4b99ab8a21cda2f5725e982d3bc9c9ecdb35107",
            "balance": 650,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user2": [
        {
            "address": "eth:2ac9d3f571fe72d7c29b5d85a9bb0c13ab4c7fae6d41a086a354ff5892c7d7a3",
            "balance": 256,
            "type": "eth",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user746": [
        {
            "address": "xrp:14100520d34b99b4698c4a35862b24241b010381c1731dc82b1b0b55cb89cf3b",
            "balance": 442,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user607": [
        {
            "address": "kas:0956d95e56e66bbfcb88b05e8b3cbe7a0f3c1dfb17d84802be05a78990a996d8",
            "balance": 5,
            "type": "kas",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user818": [
        {
            "address": "xrp:8a3189d44fe0c87b08609f20e0f6b68f29d2865f65a3dcb5e1b7a487dbd2c8cf",
            "balance": 524,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user301": [
        {
            "address": "kas:3eb07305358db4416b12a06b3fd88d91f6d607191896588f7d1a55fdeca80b86",
            "balance": 701,
            "type": "kas",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user194": [
        {
            "address": "dot:b4a3e4b45a24c54315a3197fd96efb41b1023fd2277c2dd4bf1a71d7775fb5e8",
            "balance": 871,
            "type": "dot",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user690": [
        {
            "address": "xrp:d7ac11a37a0778fc3e589a19785d4cbf83de28ac442fc6935b437b22ebd29fd4",
            "balance": 858,
            "type": "xrp",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ],
    "user362": [
        {
            "address": "dot:4a2a42f1a36a25c8f67c8c0b3c4520afdc35e2877ee6e0025dc95cd21f7b5fa8",
            "balance": 360,
            "type": "dot",
            "dateTimeCreated": new Date("2023-05-15T10:30:00Z")
        }
    ]
} as UserWallets;

const dummyTickers: string[] = [
    "kas", "xrp", "ada", "eth", "dot"
  ];
  
  export function generateRandomUserId(): string {
    return 'user' + Math.floor(Math.random() * 1000);
  }

export function getRandomCryptocurrencyTicker(): string {  
    const randomIndex = Math.floor(Math.random() * dummyTickers.length);
    return dummyTickers[randomIndex];
  }
  
  export function generateRandomBalance(): number {
    return Math.floor(Math.random() * 1000);
  }
  