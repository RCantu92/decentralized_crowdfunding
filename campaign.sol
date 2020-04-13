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
        // Variable to keep count of 'yes'
        // votes for a particular Request.
        uint approvalCount;
        // Mapping storing what each contributor
        // voted on the Request.
        mapping(address => bool) approvals;
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
     * Mapping storing whether or not an 
     * addresses has contributed.
     */
    mapping(address => bool) public approvers;
    
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
     * @param _minimum the uint to be saved under
     * minimumContribution.
     */
    function Campaign(uint _minimum) public {
        manager = msg.sender;
        minimumContribution = _minimum;
    }
    
    /**
     * @dev Function that will serve to accept
     * contributions in the form of ether.
     */
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
    }

    /**
     * @dev Function that creates a new struct of
     * the Request type.
     * @param _description descriptor for the 
     * Request being created.
     * @param _value amount of money being managed.
     * @param _recipient address of the recipient
     * of _value.
     */
    function createRequest(string _description, uint _value, address _recipient) public restricted {
        // Creating a new variable that will have a
        // Request named newRequest.
        Request memory newRequest = Request({ 
            description: _description,
            value: _value,
            recipient: _recipient,
            complete: false
        });
        
        requests.push(newRequest);
    }
}