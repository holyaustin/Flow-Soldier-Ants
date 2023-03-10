import DappyContract from "../contracts/DappyContract.cdc"
import FungibleToken from "../contracts/FungibleToken.cdc"
import FUSD from "../contracts/FUSD.cdc"

transaction(familyID: UInt32, templateIDs: [UInt32], amount: UFix64 ) {
  let receiverReference: &DappyContract.Collection{DappyContract.Receiver}
  let sentVault: @FungibleToken.Vault

  prepare(acct: AuthAccount) {
    self.receiverReference = acct.borrow<&DappyContract.Collection>(from: DappyContract.CollectionStoragePath) 
        ?? panic("Cannot borrow")
    let vaultRef = acct.borrow<&FUSD.Vault>(from: /storage/fusdVault) ?? panic("Could not borrow FUSD vault")
    self.sentVault <- vaultRef.withdraw(amount: amount)
  }

  execute {
    let collection <- DappyContract.batchMintDappiesFromFamily(familyID: familyID, templateIDs: templateIDs, paymentVault: <-self.sentVault)
    self.receiverReference.batchDeposit(collection: <-collection)
  }
}