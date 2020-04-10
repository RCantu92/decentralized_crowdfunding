pragma solidity ^0.4.17;

/**
 * @title Campaign
 */
contract Campaign {
    
    /**
     * Address of person who created the
     * campaing contract.
     */
    address public manager;
    /**
     * Uint of the mimimum amount that
     * can be accepted in this campaign.
     */
    uint minimumContribution;
    
    /**
     * @dev The constructor function that
     * sets the msg.sender as the value for
     * the previously declared manager variable
     * and the uint to the declared minimumContribution
     * variable.
     * /**
     * @dev The constructor function that
     * sets the msg.sender as the value for
     * the previously declared manager variable.
     * @param minimum the uint to be saved under
     * minimumContribution.
     */
    function Campaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }
}