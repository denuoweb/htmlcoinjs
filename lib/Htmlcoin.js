"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Htmlcoin = void 0;
const HtmlcoinRPC_1 = require("./HtmlcoinRPC");
const ContractsRepo_1 = require("./ContractsRepo");
/**
 * The `Htmlcoin` class is an instance of the `htmlcoinjs` API.
 *
 * @param providerURL URL of the htmlcoind RPC service.
 * @param repoData Information about Solidity contracts.
 */
class Htmlcoin extends HtmlcoinRPC_1.HtmlcoinRPC {
    constructor(providerURL, repoData) {
        super(providerURL);
        this.repo = new ContractsRepo_1.ContractsRepo(this, Object.assign({ 
            // massage the repoData by providing empty default properties
            contracts: {}, libraries: {}, related: {} }, repoData));
    }
    /**
     * A factory method to instantiate a `Contract` instance using the ABI
     * definitions and address found in `repoData`. The Contract instance is
     * configured with an event log decoder that can decode all known event types
     * found in `repoData`.
     *
     * @param name The name of a deployed contract
     */
    contract(name, info) {
        return this.repo.contract(name, info);
    }
}
exports.Htmlcoin = Htmlcoin;
