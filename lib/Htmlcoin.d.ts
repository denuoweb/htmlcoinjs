import { HtmlcoinRPC } from "./HtmlcoinRPC";
import { IContractsRepoData } from "./ContractsRepo";
import { Contract, IContractInfo } from "./Contract";
/**
 * The `Htmlcoin` class is an instance of the `htmlcoinjs` API.
 *
 * @param providerURL URL of the htmlcoind RPC service.
 * @param repoData Information about Solidity contracts.
 */
export declare class Htmlcoin extends HtmlcoinRPC {
    private repo;
    constructor(providerURL: string, repoData?: IContractsRepoData);
    /**
     * A factory method to instantiate a `Contract` instance using the ABI
     * definitions and address found in `repoData`. The Contract instance is
     * configured with an event log decoder that can decode all known event types
     * found in `repoData`.
     *
     * @param name The name of a deployed contract
     */
    contract(name: string, info?: IContractInfo): Contract;
}
