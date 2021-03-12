pragma solidity ^0.5.8;

// https://github.com/htmlcoin/htmlcoinjs/issues/4
contract ArrayArguments {
    function takeArray(address[] memory addresses) public {}
}
