The HTMLCOIN JavaScript library for Smart Contract development.

See [documentation](https://qtumproject.github.io/qtumjs-doc/).

See [中文 API 文档](https://qtumproject.github.io/qtumjs-doc-cn/).

See [companion tutorial](https://github.com/qtumproject/qtumbook/blob/master/en/part2/erc20-js.md).

# Install

```
npm install htmlcoinjs
```

This is a sample code snippet that transfer HRC20 tokens:

```js
import { HtmlcoinRPC } from "htmlcoinjs"

const repoData = require("./solar.json")
const htmlcoin = new Htmlcoin("http://USER:PASSWORD@localhost:3889", repoData)

const myToken = htmlcoin.contract(
  "zeppelin-solidity/contracts/token/CappedToken.sol",
)

async function transfer(fromAddr, toAddr, amount) {
  const tx = await myToken.send("transfer", [toAddr, amount], {
    senderAddress: fromAddr,
  })

  console.log("transfer tx:", tx.txid)
  console.log(tx)

  await tx.confirm(3)
  console.log("transfer confirmed")
}
```

The [full source code](https://github.com/qtumproject/qtumbook-mytoken-qtumjs-cli).

> This example uses async/await (supported natively by Node 8+).

# Running Tests

```
docker run -it --rm \
  --name htmlcoinjs \
  -v `pwd`:/dapp \
  -p 3889:3889 \
  hayeah/qtumportal
```

Configure HTMLCOIN_RPC for deployment tool:

Enter into container:

```
docker exec -it htmlcoinjs sh
```

Generate initial blocks:

```
htmlcoin-cli importprivkey cMbgxCJrTYUqgcmiC1berh5DFrtY1KeU4PXZ6NZxgenniF1mXCRk
htmlcoin-cli generatetoaddress 600 hUbxboqjBRp96j3La8D1RYkyqx5uQbJPoW

htmlcoin-cli getbalance

2000000.00000000
```

Deploy test contracts:

```
export HTMLCOIN_RPC=http://qtum:test@localhost:3889
export HTMLCOIN_SENDER=qUbxboqjBRp96j3La8D1RYkyqx5uQbJPoW

sh deploy-test-contracts.sh
```

Build and run tests:

```
npm build
npm run test
```
