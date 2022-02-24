---
id: setup-owner-signer-keys
title: Setting up Owner and Signer keys
description: Use Ansible to set up Owner and Signer keys.
keywords:
  - docs
  - matic
  - polygon
  - ansible
  - node
  - validator
  - sentry
  - owner
  - signer
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';


## Set the owner and signer key

On Polygon, it is recommended that you keep the owner and signer keys different.

* Signer — the address that signs the [checkpoint transactions](/docs/validate/glossary#checkpoint-transaction). The recommendation is to keep at least 1 ETH on the signer address.
* Owner — the address that does the staking transactions. The recommendation is to keep the MATIC tokens on the owner address.

### Generate a Heimdall private key

You must generate a Heimdall private key only on the validator machine. Do not generate a Heimdall private key on the sentry machine.

To generate the private key, run:

```sh
heimdallcli generate-validatorkey ETHEREUM_PRIVATE_KEY
```

:::note
* ETHEREUM_PRIVATE_KEY — your Ethereum wallet address.
:::

This will generate `priv_validator_key.json`. Move the generated JSON file to the Heimdall configuration directory:

```sh
mv ./priv_validator_key.json ~/.heimdalld/config
```

### Generate a Bor keystore file

You must generate a Bor keystore file only on the validator machine. Do not generate a Bor keystore file on the sentry machine.

To generate the private key, run:

```sh
heimdallcli generate-keystore ETHEREUM_PRIVATE_KEY
```

:::note
* ETHEREUM_PRIVATE_KEY — your Ethereum private key.
:::

When prompted, set up a password to the keystore file.

This will generate a `UTC-<time>-<address>` keystore file.

Move the generated keystore file to the Bor configuration directory:

```sh
mv ./UTC-<time>-<address> ~/.bor/keystore/
```

### Add password.txt

Make sure to create a `password.txt` file then add the Bor keystore file password right in the `~/.bor/password.txt` file.

### Add your Ethereum address

Open for editing `vi /etc/matic/metadata`.

In `metadata`, add your Ethereum address. Example: `VALIDATOR_ADDRESS=0xca67a8D767e45056DC92384b488E9Af654d78DE2`.

Save the changes in `metadata`.

## Check node health with the community

Now that your sentry and validator nodes are synced and running, head over to [Discord](https://discord.gg/polygon) and ask the community to health-check your nodes.

## Proceed to staking

Now that you have your sentry and validator nodes health-checked, proceed to [Staking](https://docs.polygon.technology/docs/validate/validator/core-components/staking).
