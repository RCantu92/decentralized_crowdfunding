pragma solidity ^0.4.17;

/**
 * @title Campaign
 */
contract Campaign {
    
    /**
     * New struct type storing the
     * requests that the manager address
     * will submit for approval of how to
     * use contributions.
     */  
    struct Request {
        // Describes why the request
        // is being created.
        string description;
        // Amount of money that the
        // manager wants to send to
        // the vendor.
        uint value;
        // Address that the money will
        // be sent to.
        address recipient;
        // True if request has already
        // been processed.
        bool complete;
    }
    /**
     * Array storing all of the requests
     * that have been submitted.
     */
    Request[] public requests;
    
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
    /**
     * Array storing all of the addresses
     * that have contributed.
     */
    address[] public approvers;
    
    /**
     * @dev Guarantees msg.sender is the same
     * address that is stored under
     * the manager variable.
     */
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
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
     * @dev Function that will serve to accept
     * contributions in the form of ether.
     */
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers.push(msg.sender);
    }
}