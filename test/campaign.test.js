// Load in assert module
const assert = require('assert');
// Load in Ganache CLI
const ganache = require('ganache-cli');
// Load in web3
const Web3 = require('web3');
// Create an instance of web3 that connects
// to the ganache local blockchain 
// and saves it to a variable.
const web3 = new Web3(ganache.provider());

// Import compiled CampaignFactory and
// Campaign contracts from their respective
// JSON files.
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('..ethereum/build/campaign.json');

// Declaring two variables with no values.
let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    // Get a list of generated accounts and
    // save to previously declared variable.
    accounts = await web3.eth.getAccounts();

    /**
     * @dev Saving the instance of the deployed contract.
     * @param compiledFactory.interface ABI from compiled
     * CampaignFactory contract. Used JSON.parse because
     * Contract() requires JavaScript object.
     * @param data CampaignFactory contract's bytecode.
     * @param from account from which gas is being paid from.
     * @param gas fee paid to the network to run code. Counted in wei.
     */
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });
});