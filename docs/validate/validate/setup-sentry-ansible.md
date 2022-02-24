---
id: setup-sentry-ansible
title: Setting up Sentry node
description: Use Ansible to set up the Sentry node on the Polygon Network.
keywords:
  - docs
  - matic
  - polygon
  - ansible
  - node
  - sentry
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Set up the sentry node

On your local machine, clone the [node-ansible repository](https://github.com/maticnetwork/node-ansible):

```sh
git clone https://github.com/maticnetwork/node-ansible
```

Change to the cloned repository:

```sh
cd node-ansible
```

Add the IP addresses of the remote machines that will become a sentry node and a validator node to the `inventory.yml` file.

```yml
all:
  hosts:
  children:
    sentry:
      hosts:
        xxx.xxx.xx.xx: # <----- Add IP for sentry node
        xxx.xxx.xx.xx: # <----- Add IP for second sentry node (optional)
    validator:
      hosts:
        xxx.xxx.xx.xx: # <----- Add IP for validator node
```

Example:

```yml
all:
  hosts:
  children:
    sentry:
      hosts:
        188.166.216.25:
    validator:
      hosts:
        134.209.100.175:
```

Check that the remote sentry machine is reachable. On the local machine, run:

```sh
$ ansible sentry -m ping
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

Do a test run of the sentry node setup:

```sh
ansible-playbook -l sentry playbooks/network.yml --extra-var="bor_branch=v0.2.14 heimdall_branch=v0.2.5  network_version=mainnet-v1 node_type=sentry/sentry heimdall_network=mainnet" --list-hosts
```

This will be the output

```sh
playbook: playbooks/network.yml
  pattern: ['all']
  host (1):
    xx.xxx.x.xxx
```

Run the sentry node setup with sudo privileges :

```sh
ansible-playbook -l sentry playbooks/network.yml --extra-var="bor_branch=v0.2.14 heimdall_branch=v0.2.5  network_version=mainnet-v1 node_type=sentry/sentry heimdall_network=mainnet" --ask-become-pass
```

Once the setup is complete, you will see a message of completion on the terminal.

:::note

If you run into an issue and would like to start over, run:

```sh
ansible-playbook -l sentry playbooks/clean.yml
```

:::

## Configure the sentry node

Login to the remote sentry machine.

### Configure the Heimdall Service

Open for editing `vi ~/.heimdalld/config/config.toml`.

In `config.toml`, change the following:

* `moniker` — any name. Example: `moniker = "my-full-node"`.
* `seeds` — the seed node addresses consisting of a node ID, an IP address, and a port.

  Use the following values:

  ```toml
  seeds="f4f605d60b8ffaaf15240564e58a81103510631c@159.203.9.164:26656,4fb1bc820088764a564d4f66bba1963d47d82329@44.232.55.71:26656,2eadba4be3ce47ac8db0a3538cb923b57b41c927@35.199.4.13:26656,3b23b20017a6f348d329c102ddc0088f0a10a444@35.221.13.28:26656,25f5f65a09c56e9f1d2d90618aa70cd358aa68da@35.230.116.151:26656"
  ```

* `pex` — set the value to `true` to enable the peer exchange. Example: `pex = true`.
* `private_peer_ids` — the node ID of Heimdall set up on the validator machine.

  To get the node ID of Heimdall on the validator machine:

  1. Login to the valdator machine.
  1. Run `heimdalld tendermint show-node-id`.

  Example: `private_peer_ids = "0ee1de0515f577700a6a4b6ad882eff1eb15f066"`.

* `prometheus` — set the value to `true` to enable the Prometheus metrics. Example: `prometheus = true`.
* `max_open_connections` — set the value to `100`. Example: `max_open_connections = 100`.

Save the changes in `config.toml`.

### Configure the Bor Service

Open for editing `vi ~/node/bor/start.sh`.

In `start.sh`, add the boot node addresses consisting of a node ID, an IP address, and a port by adding the following line at the end:

```config
--bootnodes "enode://0cb82b395094ee4a2915e9714894627de9ed8498fb881cec6db7c65e8b9a5bd7f2f25cc84e71e89d0947e51c76e85d0847de848c7782b13c0255247a6758178c@44.232.55.71:30303,enode://88116f4295f5a31538ae409e4d44ad40d22e44ee9342869e7d68bdec55b0f83c1530355ce8b41fbec0928a7d75a5745d528450d30aec92066ab6ba1ee351d710@159.203.9.164:30303,enode://3178257cd1e1ab8f95eeb7cc45e28b6047a0432b2f9412cff1db9bb31426eac30edeb81fedc30b7cd3059f0902b5350f75d1b376d2c632e1b375af0553813e6f@35.221.13.28:30303,enode://16d9a28eadbd247a09ff53b7b1f22231f6deaf10b86d4b23924023aea49bfdd51465b36d79d29be46a5497a96151a1a1ea448f8a8666266284e004306b2afb6e@35.199.4.13:30303,enode://ef271e1c28382daa6ac2d1006dd1924356cfd843dbe88a7397d53396e0741ca1a8da0a113913dee52d9071f0ad8d39e3ce87aa81ebc190776432ee7ddc9d9470@35.230.116.151:30303"
```

Save the changes in `start.sh`.

Open for editing `vi ~/.bor/data/bor/static-nodes.json`.

In `static-nodes.json`, change the following:

* `"<replace with enode://validator_machine_enodeID@validator_machine_ip:30303>"` — the node ID and IP address of Bor set up on the validator machine.

  To get the node ID of Bor on the validator machine:

  1. Login to the valdator machine.
  1. Run `bootnode -nodekey ~/.bor/data/bor/nodekey -writeaddress`.

  Example: `"enode://410e359736bcd3a58181cf55d54d4e0bbd6db2939c5f548426be7d18b8fd755a0ceb730fe5cf7510c6fa6f0870e388277c5f4c717af66d53c440feedffb29b4b@134.209.100.175:30303"`.

Save the changes in `static-nodes.json`.

### Configure firewall

The sentry machine must have the following ports open to the world `0.0.0.0/0`:

* 26656- Your Heimdall service will connect your node to other nodes Heimdall service.

* 30303- Your Bor service will connect your node to other nodes Bor service.

* 22- For the validator to be able to ssh from wherever he/she is.

:::note

However, if they use a vpn connection, they can allow incoming ssh connections only from the vpn ip address

:::

## Start the sentry node

You will first start the Heimdall service. Once the Heimdall service syncs, you will start the Bor service.

:::note

The Heimdall service takes several days to fully sync from scratch.

Alternatively, you can use a maintained snapshot, which will reduce the sync time to a few hours. For detailed instructions, see [Snapshot Instructions for Heimdall and Bor](https://forum.matic.network/t/snapshot-instructions-for-heimdall-and-bor/2278).

For snapshot download links, see [Polygon Chains Snapshots](https://snapshots.matic.today/).

:::

### Start the Heimdall service

The latest version, [Heimdall v.0.2.5](https://github.com/maticnetwork/heimdall/releases/tag/v0.2.5), contains few enhancements such as **Restricting data size in state sync txs to 100kb** and **Removing nonce-check for (new) validator-join**.

Start the Heimdall service:

```sh
sudo service heimdalld start
```

Start the Heimdall rest-server:

```sh
sudo service heimdalld-rest-server start
```

Check the Heimdall service logs:

```sh
journalctl -u heimdalld.service -f
```

:::note

In the logs, you may see the following errors:

* `Stopping peer for error`
* `MConnection flush failed`
* `use of closed network connection`

These mean that one of the nodes on the network refused a connection to your node. You do not need to do anything with these errors. Wait for your node to crawl more nodes on the network.

:::

Check the Heimdall rest-server logs:

```sh
journalctl -u heimdalld-rest-server.service -f
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

Once the Heimdall service is fully synced, start the Bor service.

Start the Bor service:

```sh
sudo service bor start
```

Check the Bor service logs:

```sh
journalctl -u bor.service -f
```

