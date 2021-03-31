require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stool cost remain prosper harvest cover army giggle'; 
let testAccounts = [
"0x5ad5088c8bc14ab378103d5f4ebfc7fb9ae8bbdeacba6449f62f8e067039e3eb",
"0x896fd98103ca5aad73850be695e1ca4415f080e34551a816675b244b694a9fe1",
"0x8e916d147c465408e541366f9a091e30263b405bf6e3cec9e15831328813d511",
"0x632c74c55c2d412af3ed6f69b8380fa1a78112c1dd9ee95c2aa9938a364f7162",
"0x4299d2948641d0fd130263a59a99c605add37e5e6bcd0935d8b342869ea7e750",
"0x085935bcf2a45e0b27510387e48e553977613b929ef81b2f57b1632b4e836532",
"0xc429d2ae4080c309f8afd24f3cf4b08e2d5c3174860966d884a006718069100c",
"0x02e3e71efbc700c3bbb6a2e37b18f066d4edc786a21bc9f6c650440ae1825b75",
"0x8d27d0d30b9d9e32757c6b4898059e630a5f458ee7dd682409de63603948e0eb",
"0x959b0f8bb50753d4c55407c2b3f3addb85bed79b749d3451f9a129413af6a699"
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
            version: '^0.5.11'
        }
    }
};
