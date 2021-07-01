---
id: getting-started
title: Getting Started
---

This is a startup guide for users who wish to use the implementation packages published by Polygon team, to generate and publish a Polygon DID on the Polygon chain.

The Polygon DID method Implementation comprises of 3 packages, namely the polygon-did-registrar, polygon-did-resolver and polygon-did-registry-contract. A user who wants to incorporate the functionality to either register or read a DID on or from Polygon network can use the following guide.

## Create DID 

To get started, one first needs to create a DID. Creation in case of Polygon did is an encapsulation of two steps, first where a user needs to generate a DID uri for themselves and next register it on Polygon chain.

### Step 1 - Create DID

In your project to create a polygon DID uri one first needs to install
```
npm i @ayanworks/polygon-did-registrar --save
```
Once the installation is completed, the user can use
```
import { createDID } from "polygon-did-registrar";
```
The createdDID function helps user generate a DID uri. There are two ways in which a user can call the function, case one will be where the user already owns a wallet and wishes to generate a DID correponding to the same wallet. The network parameter here refers to if the user wishes to use testnet configurations or mainnet configurations.
```
const {address, publicKey58, privateKey, DID} = await createDID(network, privateKey);
```
If the user does not pre own a wallet and wants to generate one, the user can use
```
const {address, publicKey58, privateKey, DID} = await createDID(network);
```
So at the end of step 1 one will have a DID uri generated.

### Step 2 - Register DID

To register the DID uri and it's corresponding DID document on chain, the user first needs to use
```
import { registerDID } from "polygon-did-registrar";
```
Now before one goes to register the DID, the user needs to make sure that the wallet corrsponding to the DID has Matic tokens, test tokens if DID is generated on testnet and Matic tokens if on mainnet.
Once the user has tokens in wallet, a call can be made to the registerDID functionality as given below
```
const txHash = await registerDID(did, privateKey, url?, contractAddress?);
```
As seen, parameters did and private key are mandatory, while it is optional to enter the url and contract address. If the user does not give the last two parameters, the library picks up the default configurations as per the network being used.
If all the parameters match the specifications and everything is given in correct order the registerDID function returns a transaction hash, a corresponding error is returned otherwise.

And with this you have successfully completed your task of registering a DID polygon implementation for yourself.

## Resolve DID

For starters in project, first install
```
npm i @ayanworks/polygon-did-resolver --save
```

To read a DID document registered on chain, any user with a DID polygon uri can first in project import, 
```
import { resolveDID } from "polygon-did-resolver";
```
after importing the package the DID document can be retrieved by using
```
const didDocument = await resolveDID(did);
```
It should be noted that, no gas cost will be entailed by the user while trying to resolve a DID.

## Update DID

To encapsulate the project with the ability to update the DID, one can first import
```
import { updateDidDoc } from "polygon-did-registrar";
```
Next is to just call the function
```
const txHash = await updateDidDoc(did, didDoc, privateKey, url?, contractAddress?);
```
It should be noted that to update the DID document, only the owner of DID can send the request. The private key sent here should also hold some Matic tokens or test tokens as per the network configuration they are working on. If the user does not provide the configuration with url and contract address, the package will take them from it's default configuration file.

## Delete DID

With polygon DID implementation a user can also revoke his DID from chain for this, first import
```
import { deleteDidDoc } from "polygon-did-registrar";
```
After this with the DID owner who wishes to delete the DID instance can use
```
const txHash = await deleteDidDoc(did, privateKey, url?, contractAddress?);
```
Amongst the parameters it is notable that, url and contract address are optional parameters, which if not provided by the user a default configuration will be picked up by the function. It is important for the private key to hold Matic tokens or Matic test tokens, as per the network configuration where DID was registered, or the transaction would fail.

With this we think that you have a fair idea of how you can use the Polygon-DID-Implementation suite, to generate your Polygon DID uri and register them on Polygon chain.

## Contributing to the Repository

Use the standard fork, branch, and pull request workflow to propose changes to the repositories. Please make branch names informative—by including the issue or bug number for example.

### Github Repositories

```
https://github.com/ayanworks/polygon-did-registrar
```

```
https://github.com/ayanworks/polygon-did-resolver
```