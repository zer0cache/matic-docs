---
id: setup-validator-ansible
title: Setting up Validator node
description: Use Ansible to set up the Validator node on the Polygon Network.
keywords:
  - docs
  - matic
  - polygon
  - ansible
  - node
  - validator
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Set up the validator node

At this point, you have the sentry node set up.

On your local machine, you also have the Ansible playbook set up to run the validator node setup.

Check that the remote validator machine is reachable. On the local machine, run `ansible validator -m ping`:

```sh
$ ansible validator -m ping
```

You should get this as output

```sh
xxx.xxx.xx.xx | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python3"
    },
    "changed": false,
    "ping": "pong"
}
```

Do a test run of the validator node setup:

```sh
ansible-playbook -l validator playbooks/network.yml --extra-var="bor_branch=v0.2.14 heimdall_branch=v0.2.5 network_version=mainnet-v1 node_type=sentry/validator heimdall_network=mainnet" --list-hosts
```

You should get this as output

```sh
playbook: playbooks/network.yml
  pattern: ['all']
  host (1):
    xx.xxx.x.xxx
```

Run the validator node setup with sudo privileges:

```sh
ansible-playbook -l validator playbooks/network.yml --extra-var="bor_branch=v0.2.14 heimdall_branch=v0.2.5  network_version=mainnet-v1 node_type=sentry/validator heimdall_network=mainnet" --ask-become-pass
```

Once the setup is complete, you will see a message of completion on the terminal.

:::note

If you run into issue and would like to start over, run:

```sh
ansible-playbook -l validator playbooks/clean.yml
```

:::

## Configure the validator node

:::note

To complete this section, you must have an RPC endpoint of your fully synced Ethereum mainnet node ready.

:::

### Configure the Heimdall Service

Login to the remote validator machine.

Open for editing `vi ~/.heimdalld/config/config.toml`.

In `config.toml`, change the following:

* `moniker` — any name. Example: `moniker = "my-validator-node"`.
* `pex` — set the value to `false` to disable the peer exchange. Example: `pex = false`.
* `private_peer_ids` — comment out the value to disable it. Example: `# private_peer_ids = ""`.


  To get the node ID of Heimdall on the sentry machine:

  1. Login to the sentry machine.
  1. Run `heimdalld tendermint show-node-id`.

  Example: `persistent_peers = "sentry_machineNodeID@sentry_instance_ip:26656"`

* `prometheus` — set the value to `true` to enable the Prometheus metrics. Example: `prometheus = true`.

Save the changes in `config.toml`.

Open for editing `vi ~/.heimdalld/config/heimdall-config.toml`.

In `heimdall-config.toml`, change the following:

* `eth_rpc_url` — an RPC endpoint for a fully synced Ethereum mainnet node, i.e Infura. `eth_rpc_url =<insert Infura or any full node RPC URL to Ethereum>`

Example: `eth_rpc_url = "https://nd-123-456-789.p2pify.com/60f2a23810ba11c827d3da642802412a"`


Save the changes in `heimdall-config.toml`.

### Configure the Bor Service

Open for editing `vi ~/.bor/data/bor/static-nodes.json`.

In `static-nodes.json`, change the following:

* `"<replace with enode://sentry_machine_enodeID@sentry_machine_ip:30303>"` — the node ID and IP address of Bor set up on the sentry machine.

  To get the node ID of Bor on the sentry machine:

  1. Login to the sentry machine.
  1. Run `bootnode -nodekey ~/.bor/data/bor/nodekey -writeaddress`.

  Example: `"enode://a8024075291c0dd3467f5af51a05d531f9e518d6cd229336156eb6545581859e8997a80bc679fdb7a3bd7473744c57eeb3411719b973b2d6c69eff9056c0578f@188.166.216.25:30303"`.

Save the changes in `static-nodes.json`.

## Start the validator node

At this point, you must have:

* The Heimdall service on the sentry machine fully synced and running.
* The Bor service on the sentry machine running.
* The Heimdall service and the Bor service on the validator machine configured.
* Your owner and signer keys configured.

### Start the Heimdall Service

You will now start the Heimdall service on the validator machine. Once the Heimdall service syncs, you will start the Bor service on the validator machine.

:::note

The Heimdall service takes several days to fully sync from scratch.

Alternatively, you can use a maintained snapshot, which will reduce the sync time to a few hours. For detailed instructions, see [Snapshot Instructions for Heimdall and Bor](https://forum.matic.network/t/snapshot-instructions-for-heimdall-and-bor/2278).

For snapshot download links, see [Polygon Chains Snapshots](https://snapshots.matic.today/).

:::

Start the Heimdall service:

```sh
sudo service heimdalld start
```

Start the Heimdall rest-server:

```sh
sudo service heimdalld-rest-server start
```

Start the Heimdall bridge:

```sh
sudo service heimdalld-bridge start
```

Check the Heimdall service logs:

```sh
journalctl -u heimdalld.service -f
```

Check the Heimdall rest-server logs:

```sh
journalctl -u heimdalld-rest-server.service -f
```

Check the Heimdall bridge logs:

```sh
journalctl -u heimdalld-bridge.service -f
```

Check the sync status of Heimdall:

```sh
curl localhost:26657/status
```

In the output, the `catching_up` value is:

* `true` — the Heimdall service is syncing.
* `false` — the Heimdall service is fully synced.

Wait for the Heimdall service to fully sync.

### Start the Bor Service

Once the Heimdall service on the validator machine is fully synced, start the Bor service on the validator machine.

Start the Bor service:

```sh
sudo service bor start
```

Check the Bor service logs:

```sh
journalctl -u bor.service -f
```
