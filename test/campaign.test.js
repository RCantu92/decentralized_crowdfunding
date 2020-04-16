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
const compiledCampaign = require('../ethereum/build/campaign.json');

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

    // Creating a new campaign using the first account
    // generated from the local ganache blockchain.
    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000',
    });

    // Saving the address of the campaing to the previously
    // initialized variable.
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    // Create get the campaign interface and address and
    // save it to previously initialized variable.
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager.', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('allows people to contribute money and marks them as approvers', async () => {
        await campaign.methods.contribute().send({ 
            value: '200',
            from: accounts[1]
        });
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });

    it('requires a minimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                value: '5',
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('allows a manager to make a payment request', async () => {
        await campaign.methods
        .createRequest('Buy batteries', '100', accounts[1])
        .send({
            from: accounts[0],
            gas: '1000000'
        });
        const request = await campaign.methods.requests(0).call();

        assert.equal('Buy batteries', request.description);
    });
});