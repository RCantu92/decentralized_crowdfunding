// Import created copy of web3
import web3 from './web3.js';
// Import compiled CampaignFactory contract
import CampaignFactory from './build/CampaignFactory.json';

// Creating contract instance from
// already deployed CampaignFactory
const instance = new web3.eth.Contract(
    // First argument is contract ABI
    JSON.parse(CampaignFactory.interface),
    // Second argument is the address
    '0xbC94Bc9CbDee96365856663695b8681cB3f679F6'
);

// Exporting contract instance
export default instance;