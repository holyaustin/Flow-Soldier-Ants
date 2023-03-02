import { config } from "@onflow/fcl"

config({
  "accessNode.api": "https://rest-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
  "0xFungibleToken": "0x9a0766d93b6608b7",
  "0xFUSD": "0xe223d8a629e49c68",
  "0xDappy": "0xdb3d539e48a805b7",
  //"accessNode.api": process.env.REACT_APP_ACCESS_NODE,
  //"discovery.wallet": process.env.REACT_APP_WALLET_DISCOVERY,
  //"0xFungibleToken": process.env.REACT_APP_FT_CONTRACT,
  //"0xFUSD": process.env.REACT_APP_FUSD_CONTRACT,
  //"0xDappy": process.env.REACT_APP_DAPPY_CONTRACT
})