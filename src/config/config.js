import { config } from "@onflow/fcl"

config({
  "accessNode.api": 'https://rest-testnet.onflow.org',
  //"accessNode.api": process.env.REACT_APP_ACCESS_NODE,
  //"discovery.wallet": process.env.REACT_APP_WALLET_DISCOVERY,
  "discovery.wallet": 'https://fcl-discovery.onflow.org/testnet/authn',
  "0xFungibleToken": process.env.REACT_APP_FT_CONTRACT,
  "0xFUSD": process.env.REACT_APP_FUSD_CONTRACT,
  "0xDappy": process.env.REACT_APP_DAPPY_CONTRACT
})