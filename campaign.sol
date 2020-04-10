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
    uint public minimumContribution;
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
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers.push(msg.sender);
    }
}