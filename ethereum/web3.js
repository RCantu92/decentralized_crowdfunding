// Import the web3 module
import Web3 from 'web3';

/**
 * @dev Declaring a new variable instance of web3.
 * @param window.web3.currentProvider the instance
 * of web3 provided by MetaMask.
 */
const web3 = new Web3(window.web3.currentProvider);

// Export instance of web3
export default web3;