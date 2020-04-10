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
     * Array that stores all of the people
     * that have contributed to the campaign.
     */
    address[] public approvers;
    
    /**
     * @dev The constructor function that
     * sets the msg.sender as the value for
     * the previously declared manager variable
     * and the uint to the declared minimumContribution
     * variable.
     * @param minimum the uint to be saved under
     * minimumContribution.
     */
    function Campaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }
    
    /**
     * @dev Function that accepts ether over the
     * minimum ammount to then store msg.sender
     * in the approvers array.
     */
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers.push(msg.sender);
    }
}