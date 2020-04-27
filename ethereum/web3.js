// Import the web3 module
import Web3 from 'web3';

// Declare new web3 variable
let web3;

// Conditional that uses the inject web3 from metamask
// under certain conditions. Otherwise, it connects using
// Infura.
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/38c9a150380f4b63be2adf7c4c5501bf'
    );
    web3 = new Web3(provider);
}

// Export instance of web3
export default web3;