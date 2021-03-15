"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const test_1 = require("./test");
const Htmlcoin_1 = require("./Htmlcoin");
const Contract_1 = require("./Contract");
describe("Htmlcoin", () => {
    const htmlcoin = new Htmlcoin_1.Htmlcoin(test_1.rpcURL, test_1.repoData);
    it("can instantiate a contract", () => {
        const contract = htmlcoin.contract("test/contracts/Methods.sol");
        chai_1.assert.instanceOf(contract, Contract_1.Contract);
    });
    it("throws an error if contract is not known", () => {
        // assertThrow
        chai_1.assert.throw(() => {
            htmlcoin.contract("test/contracts/Unknown.sol");
        });
    });
});
