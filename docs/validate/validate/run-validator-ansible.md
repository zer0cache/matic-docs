---
id: run-validator-ansible
title: Overview
description: Use Ansible to set up your validator node on the Polygon Network.
keywords:
  - docs
  - matic
  - polygon
  - ansible
  - node
  - validator
  - sentry
image: https://matic.network/banners/matic-network-16x9.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This section guides you through starting and running the validator node through an Ansible playbook.

For the system requirements, see [Validator Node System Requirements](https://docs.polygon.technology/docs/validate/validate/validator-node-system-requirements).

If you would like to start and run the validator node from binaries, see [Run a Validator Node from Binaries](https://docs.polygon.technology/docs/validate/validate/run-validator-binaries).

:::note

Steps in this guide involve waiting for the Heimdall and Bor services to fully sync. This process takes several days to complete.

Alternatively, you can use a maintained snapshot, which will reduce the sync time to a few hours. For detailed instructions, see [Snapshot Instructions for Heimdall and Bor](https://forum.matic.network/t/snapshot-instructions-for-heimdall-and-bor/2278).

For snapshot download links, see [Polygon Chains Snapshots](https://snapshots.matic.today/).

There is limited space for accepting new validators. New validators can only join the active set when a currently active validator unbonds.

:::

## Prerequisites

* Three machines — one local machine on which you will run the Ansible playbook; two remote machines — one [sentry](/docs/validate/glossary#sentry) and one [validator](/docs/validate/glossary#validator).
* On the local machine, [Ansible](https://www.ansible.com/) installed.
* On the local machine, [Python 3.x](https://www.python.org/downloads/) installed.
* On the remote machines, make sure Go is *not* installed.
* On the remote machines, your local machine's SSH public key is on the remote machines to let Ansible connect to them.


## Overview

To get to a running validator node, do the following:

1. Have the three machines prepared.
1. Set up a sentry node through Ansible.
1. Set up a validator node through Ansible.
1. Configure the sentry node.
1. Start the sentry node.
1. Configure the validator node.
1. Set the owner and signer keys.
1. Start the validator node.
1. Check node health with the community.

:::note

You must follow the exact outlined sequence of actions, otherwise you will run into issues.

For example, a sentry node must always be set up before the validator node.

:::