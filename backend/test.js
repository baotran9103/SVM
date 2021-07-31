const x = require('chia-network-scanner') 
const chiaNetworkScanner = new x.ChiaNetworkScanner({
    // The network to scan and protocol to use
    network: {
        networkId: 'd4735eaa2ffe1cceeeef59718b9eed0ee19cc7d8bbc51ff0da226611ec44a555',
        protocolVersion: '0.0.29',
        softwareVersion: '0.2.2'
    },

    startNodes: [{
        hostname: 'sumo.chia.net',
        port: 58444,
    }, {
        hostname: 'beast.chia.net',
        port: 58444,
    }],

    // Identifies this peer on the network
    peer: {
        nodeType: 1,
    },

    // Used to timeout on various operations such as handshake
    connectionTimeout: 2500,

    // Number of peers to scan concurrently. Bigger is faster but uses more sockets and memory :)
    concurrency: 50,

    // Full node public key
    keyPath: '/root/123.key',

    // Full node public cert
    certPath: '/root/123.crt'
});
const test = async () => {
const peers = await chiaNetworkScanner.scan();
console.log(peers)
    
}
test()