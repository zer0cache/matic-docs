---
id: full-node-binaries
title: Run a full node with Binaries
description: Deploy a Full Polygon Node using binaries.
keywords:
  - docs
  - matic
  - polygon
  - node
  - binaries
  - deploy
  - full node
  - run
image: https://matic.network/banners/matic-network-16x9.png
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'Polygon-Mainnet', value: 'mainnet', },
    { label: 'Mumbai-Testnet', value: 'mumbai', },
  ]
}>

<TabItem value="mainnet">

This section guides you through starting and running a full node on a binary. For the system requirements, see the [Minimum Technical Requirements](technical-requirements) guide.

:::note

Steps in this guide involve waiting for the Heimdall and Bor services to fully sync. This process takes several days to complete.

Alternatively, you can use a maintained snapshot, which will reduce the sync time to a few hours. For detailed instructions, see [<ins>Snapshot Instructions for Heimdall and Bor</ins>](https://forum.polygon.technology/t/snapshot-instructions-for-heimdall-and-bor/9233).

For snapshot download links, see the [<ins>Polygon Chains Snapshots</ins>](https://snapshots.matic.today/) page.

:::


## **Prerequisites**

- Minimum hardware requirements: 
    - 4-8+ core CPU 
    - 16-32GB RAM
    - 2TB+ SSD free storage space
- Build-essential packages
- Golang version 1.18+

## **Overview**

- Prepare the machine
- Install Heimdall and Bor binaries on the full node machine
- Set up Heimdall and Bor services on the full node machine
- Configure the full node machine
- Start the full node machine
- Check node health with the community

:::note
You have to follow the exact outlined sequence of actions, otherwise you will run into issues.
:::

### **Install `build-essential`**

This is **required** for your full node. In order to install, run the below command:

```bash
sudo apt-get install build-essential
```

### **Install GO**

This is also **required** for running your full node. Installing **v1.18 or above** is recommended.

```bash
wget https://raw.githubusercontent.com/maticnetwork/node-ansible/master/go-install.sh
bash go-install.sh
sudo ln -nfs ~/.go/bin/go /usr/bin/go
```

## **Install Binaries**

### **Heimdall**

This is **required** to setup your full node.

Install the latest version of Heimdall and related services. Make sure you checkout the correct [release version](https://github.com/maticnetwork/heimdall/releases). Note that the latest version, [Heimdall v.0.2.11](https://github.com/maticnetwork/heimdall/releases/tag/v0.2.11), contains enhancements such as:
1. Restricting data size in state sync txs to:
    * **30Kb** when represented in **bytes**
    * **60Kb** when represented as **string**
2. Increasing the **delay time** between the contract events of different validators to ensure that the mempool doesn't get filled very quickly in case of a burst of events which can hamper the progress of the chain.

The following example shows how the data size is restricted:

```
Data - "abcd1234"
Length in string format - 8
Hex Byte representation - [171 205 18 52]
Length in byte format - 4
```

To install **Heimdall**, run the below commands:

```bash
cd ~/
git clone https://github.com/maticnetwork/heimdall
cd heimdall

# Checkout to a proper version
# For e.g: git checkout v0.2.11-mainnet
git checkout <TAG OR BRANCH>
make install
```

That will install the `heimdalld` and `heimdallcli` binaries. Verify that everything is OK:

```bash
heimdalld version --long
```

### **Bor**

This is **required** to setup your full node.

Install the latest version of Bor. Make sure you checkout the correct [released version](https://github.com/maticnetwork/bor/releases) via Git.

```bash
cd ~/
git clone https://github.com/maticnetwork/bor
cd bor

# Checkout to a proper version
# For eg: git checkout 0.2.16
git checkout <TAG OR BRANCH>
make bor-all
sudo ln -nfs ~/bor/build/bin/bor /usr/bin/bor
sudo ln -nfs ~/bor/build/bin/bootnode /usr/bin/bootnode
```

That will install the `bor` binary and `bootnode` binaries. Verify that everything is OK:

```bash
bor version
```

## **Configure Node Files**

### **Fetch launch repo**

```bash
cd ~/
git clone https://github.com/maticnetwork/launch
```

### **Configure launch directory**

To set up the network directory, the network name and type of node are required.

**Available networks**: `mainnet-v1`

**Node type**: `sentry`

```bash
cd ~/
mkdir -p node
cp -rf launch/<network-name>/sentry/<node-type>/* ~/node

# To setup sentry node for Polygon mainnet, use:
# cp -rf launch/mainnet-v1/sentry/sentry/* ~/node
```

### **Configure network directories**

**Heimdall data setup**

```bash
cd ~/node/heimdall
bash setup.sh
```

**Bor data setup**

```bash
cd ~/node/bor
bash setup.sh
```

## **Configure Service Files**

Download **service.sh** file.

```bash
cd ~/node
wget https://raw.githubusercontent.com/maticnetwork/launch/master/<network-name>/service.sh

# To setup sentry node for mainnet (mainnet-v1)
# wget https://raw.githubusercontent.com/maticnetwork/launch/master/mainnet-v1/service.sh
```

Generate the **metadata** file:

```bash
sudo mkdir -p /etc/matic
sudo chmod -R 777 /etc/matic/
touch /etc/matic/metadata
```

Generate services files and copy them into system directory:

```bash
cd ~/node
bash service.sh
sudo cp *.service /etc/systemd/system/
```



## **Setup Config Files**

- Log in to the remote machine / VM
- You will need to add a few details in the `config.toml` file. To open and edit the `config.toml` file, run the following command: `vi ~/.heimdalld/config/config.toml`.

    In the config file, you will have to change `Moniker` and add `seeds` information:

    ```jsx
    moniker=<enter unique identifier>
    {/* For example, moniker=my-sentry-node */}

    seeds="f4f605d60b8ffaaf15240564e58a81103510631c@159.203.9.164:26656,4fb1bc820088764a564d4f66bba1963d47d82329@44.232.55.71:26656"
    ```

    - Change the value of **Pex** to `true`
    - Change the value of **Prometheus** to `true`
    - Set the `max_open_connections` value to `100`

  Make sure you **keep the proper formatting** when you make the above changes.

- Next you need to make changes in the `start.sh` file for Bor. Add the following flag in `vi ~/node/bor/start.sh` to the `bor` start params:

  ```bash
  --bootnodes "enode://0cb82b395094ee4a2915e9714894627de9ed8498fb881cec6db7c65e8b9a5bd7f2f25cc84e71e89d0947e51c76e85d0847de848c7782b13c0255247a6758178c@44.232.55.71:30303,enode://88116f4295f5a31538ae409e4d44ad40d22e44ee9342869e7d68bdec55b0f83c1530355ce8b41fbec0928a7d75a5745d528450d30aec92066ab6ba1ee351d710@159.203.9.164:30303"
  ```

- To enable **Archive** mode, you can add the following flags in the `start.sh` file:

  ```jsx
  --gcmode 'archive' \
  --ws --ws.port 8546 --ws.addr 0.0.0.0 --ws.origins '*' \
  ```

## **Start Services**

Run these commands on your Sentry Node:

**To Start Heimdall Service**

```bash
sudo service heimdalld start
```

**To Start Heimdall Rest-server**

```bash
sudo service heimdalld-rest-server start
```

You can check logs for Heimdall and Rest-server here:

- Heimdall &rarr; `journalctl -u heimdalld.service -f`
- Heimdall Rest Server &rarr; `journalctl -u heimdalld-rest-server.service -f`

Now, you need to make sure that **Heimdall is synced** completely, and then only start Bor. If you start Bor without Heimdall syncing completely, you will run into issues frequently.

**To check if Heimdall is synced;**
  1. On the remote machine/VM, run `curl localhost:26657/status`
  2. In the output, `catching_up` value should be `false`

Once Heimdall is synced, run the below command:

```bash
sudo service bor start
```

You can check Bor logs by running `journalctl -u bor.service -f`




</TabItem>

<TabItem value="mumbai">

This section guides you through starting and running a full node on a binary. For the system requirements, see here [Minimum Technical Requirements](http://localhost:3000/docs/develop/network-details/technical-requirements).

:::note

Steps in this guide involve waiting for the Heimdall and Bor services to fully sync. This process takes several days to complete.

Alternatively, you can use a maintained snapshot, which will reduce the sync time to a few hours. For detailed instructions, see [<ins>Snapshot Instructions for Heimdall and Bor</ins>](https://forum.polygon.technology/t/snapshot-instructions-for-heimdall-and-bor/9233).

For snapshot download links, see [<ins>Polygon Chains Snapshots</ins>](https://snapshots.matic.today/).

:::


## **Prerequisites**

- Minimum hardware requirements: 4-8+ core CPU , 16-32GB RAM, 2TB+ SSD free storage space
- Build-essential packages
- Golang version 1.18+

<!-- ### To install

```bash wget https://gist.githubusercontent.com/ssandeep/a6c7197811c83c71e5fead841bab396c/raw/go-install.sh
```

```bash
go-install.sh
```

```bash
sudo ln -nfs ~/.go/bin/go /usr/bin/go
``` -->

<!-- RabbitMQ installed on both the Full Node machines. See Downloading and Installing RabbitMQ. -->

## **Overview**

- Prepare the machine
- Install Heimdall and Bor binaries on the full node machine
- Set up Heimdall and Bor services on the full node machine
- Configure the full node machine
- Start the full node machine
- Check node health with the community

:::note
You have to follow the exact outlined sequence of actions, otherwise you will run into issues.
:::

### **Install `build-essential`**

This is **required** for your full node. In order to install, run the following command:

```bash
sudo apt-get install build-essential
```

### **Install Go**

This is also **required** for running your full node. Installing Go **v1.18 or above** is recommended.

```bash
wget https://raw.githubusercontent.com/maticnetwork/node-ansible/master/go-install.sh
bash go-install.sh
sudo ln -nfs ~/.go/bin/go /usr/bin/go
```

> Note: Go version 1.18 is recommended

### **Install RabbitMQ**

RabbitMQ is a message-queueing software (also known as a message broker or queue manager), where queues are defined for applications to transfer messages.

A helper service called `bridge` is embedded into the Heimdall codebase, which requires `rabbit-mq` to queue transactions to multiple networks. Installing it should be pretty straightforward.

**Checkout the download instructions here: [https://www.rabbitmq.com/download.html](https://www.rabbitmq.com/download.html)**

To start a RabbitMQ node, run:

```bash
rabbitmq-server
```

## **Install Binaries**

### **Heimdall**

This is **required** to setup your full node.

Install the latest version of Heimdall. Make sure you git checkout to the correct [release version](https://github.com/maticnetwork/heimdall/releases).

```bash
cd ~/
git clone https://github.com/maticnetwork/heimdall
cd heimdall

# Checkout to a proper version
# For e.g: git checkout v0.2.1-mumbai
git checkout <TAG OR BRANCH>
make install
```

That will install the `heimdalld` and `heimdallcli` binaries. Verify that everything is OK:

```bash
heimdalld version --long
```

### **Bor**

This is **required** to setup your full node.

Install the latest version of Bor. Make sure you git checkout to the correct [released version](https://github.com/maticnetwork/bor/releases).

```bash
cd ~/
git clone https://github.com/maticnetwork/bor
cd bor

# Checkout to a proper version
# For eg: git checkout v0.2.16

git checkout <TAG OR BRANCH>
make bor-all
sudo ln -nfs ~/bor/build/bin/bor /usr/bin/bor
sudo ln -nfs ~/bor/build/bin/bootnode /usr/bin/bootnode
```

This will install the `bor` and `bootnode` binaries. Verify the installation by checking the Bor version on your machine:

```bash
bor version
```

## **Setup Node Files**

### **Fetch launch repo**

```bash
cd ~/
git clone https://github.com/maticnetwork/launch
```

### **Setup launch directory**

To set up the network directory, the network name and type of node are required.

**Available networks**: `mainnet-v1` and `testnet-v4`

**Node type**: `sentry`

```bash
cd ~/
mkdir -p node
cp -rf launch/<network-name>/sentry/<node-type>/* ~/node

# To setup sentry node for mumbai (testnet-v4) testnet, use:
# cp -rf launch/testnet-v4/sentry/sentry/* ~/node
```

### **Configure network directories**

**Heimdall data setup**

```bash
cd ~/node/heimdall
bash setup.sh
```

**Bor data setup**

```bash
cd ~/node/bor
bash setup.sh
```

## **Configure Service Files**

Download **service.sh** file

```bash
cd ~/node
wget https://raw.githubusercontent.com/maticnetwork/launch/master/<network-name>/service.sh

# To setup sentry node for mumbai (testnet-v4) testnet
# wget https://raw.githubusercontent.com/maticnetwork/launch/master/testnet-v4/service.sh
```

Generate the **metadata** file:
```bash
sudo mkdir -p /etc/matic
sudo chmod -R 777 /etc/matic/
touch /etc/matic/metadata
```

Generate services files and copy them into system directory:

```bash
cd ~/node
bash service.sh
sudo cp *.service /etc/systemd/system/
```

## **Setup Config Files**

- Configure the following flags in `~/.heimdalld/config/config.toml`:
  ```jsx
  moniker=<enter unique identifier>

  seeds="4cd60c1d76e44b05f7dfd8bab3f447b119e87042@54.147.31.250:26656,b18bbe1f3d8576f4b73d9b18976e71c65e839149@34.226.134.117:26656"
  ```
- Configure the following in `~/.heimdalld/config/heimdall-config.toml`:

    ```jsx
    eth_rpc_url=<insert Infura or any full node RPC URL to Goerli>
    ```

- Add the following flag in `~/node/bor/start.sh` to the `bor` start parameters:

```bash
--bootnodes "enode://320553cda00dfc003f499a3ce9598029f364fbb3ed1222fdc20a94d97dcc4d8ba0cd0bfa996579dcc6d17a534741fb0a5da303a90579431259150de66b597251@54.147.31.250:30303"
```

## **Start Services**

Run the full Heimdall node with the following commands:

```bash
sudo service heimdalld start
sudo service heimdalld-rest-server start
```

To check if Heimdall is synced

1. On the remote machine/VM, run `curl localhost:26657/status`
2. In the output, `catching_up` value should be `false`

Once Heimdall is synced, start Bor:

```bash
sudo service bor start
```

## **Logs**

Logs can be managed by the `journalctl` linux tool. Here is a tutorial for advanced usage: [How To Use Journalctl to View and Manipulate Systemd Logs](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs).

**Check Heimdall node logs**

```bash
journalctl -u heimdalld.service -f
```

**Check Heimdall Rest-server logs**

```bash
journalctl -u heimdalld-rest-server.service -f
```

**Check Bor Rest-server logs**

```bash
journalctl -u bor.service -f
```

## **Ports and Firewall Setup**

Open ports 22, 26656 and 30303 to world (0.0.0.0/0) on sentry node firewall.

You can use VPN to restrict access for port 22 as per your requirement and security guidelines.


</TabItem>

</Tabs>
