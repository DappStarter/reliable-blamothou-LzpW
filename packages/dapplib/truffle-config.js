require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remain eternal gesture hidden tackle spike'; 
let testAccounts = [
"0x94742449199ec4a38c700ef9543e49a8cf3bcbd904ca23fb7d2084ea45ef2bb8",
"0xbf0c15760bbf231c5d025da07677dac3d7d60c69fba7b9d89ba8c3a9ff174667",
"0xd31aaf7fdc0e57c91004b21de9cfbc3369e29f9d62a4ac2ae5b38b35e2130f6d",
"0x55f7484198042ef3cc1f271d1198b22516c8695f08c29462b7c0a224f3ec4585",
"0x2ab812fbdfd7589967bec5042ab4b5d194c2192cd0dea520e9701ed1a7056006",
"0xa8955f5ec2a443cb9b22ff8a54729badd33d8eb9ee36021d2f149f0e3e573357",
"0x87bd73ec1ee9eddf1627bdc76a70d8eb9af7451f7a8a9aaea8a0fd98ef8880ff",
"0x5275415756899cbfd6aba9adb9326ebd01c162037aa2f338ce21122a362ed35c",
"0xfe3c1a391faabc9c04f74046a5b0be6c6ad7ddfa3e016b79abc90807a421fe08",
"0x8b0bacf07c7075bf35ea6bc319414e0a22a2e14a752fbd3748d3034293e02906"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

