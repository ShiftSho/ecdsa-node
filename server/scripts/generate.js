const secp = require('ethereum-cryptography/secp256k1');
const { toHex } = require('ethereum-cryptography/utils');
const { keccak256 } = require('ethereum-cryptography/keccak');

const privateKey = secp.utils.randomPrivateKey();

console.log('private key:', toHex(privateKey));

const pubKey = secp.getPublicKey(privateKey);

console.log('public key:', toHex(pubKey));

const ethAddress = keccak256(pub.slice(1)).slice(-20);

console.log('eth address:', "0x" + toHex(ethAddress));