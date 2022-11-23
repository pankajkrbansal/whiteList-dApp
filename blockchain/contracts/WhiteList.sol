// SPDX-License-Identifier:MIT

pragma solidity >0.8.0;

contract WhiteList {
    // mapping for users registered
    mapping(address => bool) public whiteListedMembers;
    address private owner;
    uint256 maxWhiteListLimit;
    uint256 public whiteListCount;

    modifier onlyOwner(address addr) {
        require(addr == owner, "Only Owner Can Call This Function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setWhiteListLimit(uint256 limit) external onlyOwner(msg.sender) {
        maxWhiteListLimit = limit;
    }

    function addSendertoWhitelist() external{
        require(whiteListCount < maxWhiteListLimit, "List Is Full, Better Luck Next Time");
        require(!whiteListedMembers[msg.sender], "Member With This Address Is Already Registered");

        // adding member to white list
        whiteListedMembers[msg.sender] = true;
        // Increasing the count of current count;
        whiteListCount = whiteListCount + 1;
    }
}
