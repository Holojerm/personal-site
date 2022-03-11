---
name: Testing Rocketpool
thumbnail: https://pbs.twimg.com/profile_images/1006760935669805056/YsOFyk-p_400x400.jpg
date: 2022-03-08
description: Building a computer to stake Ethereum with Rocketpool's decentralized minipools.
tags: ["ethereum", "staking", "rocketpool"]
---

# Testing Rocketpool

I recently created a [Rocketpool](https://rocketpool.net) node on Ethereum's Prater test network.  If you're interested in learning more about ETH staking, I highly recommend going through this process.  Rocketpool has made a great product.

## Requirements and Priors

In the past, I have created my own computer.  I also have experience using the command line in Linux.  These are important concepts in the process of setting up a staking node.  If they are new to you, take your time and reach out for help if you need to.

To create the staking node, it is important to adhere to the hardware requirements specified by Rocketpool.  This was one of my larger mistakes during the process.  I started out with 4gb of RAM and a 512gb spinning disk harddrive.  The requirements are at least 8gb of RAM and 256gb of SSD memory for the test network.

## Setting up the Node

The main steps in creating a local node are as follows:

- Create the computer with the necessary hardware
- Set up Ubuntu LTS on the machine
- Add SSH from a remote machine to the Ubuntu machine
- Secure the machine
- Download the rocketpool software and Eth clients
- Register the node
- Create a minipool and start staking

One of the roadblocks I had was getting the test ETH and RPL to register the node.  Rocketpool's Discord has a limit of one message every 6 hours for their faucet.  Some members of the community helped expedite this for me.

## Tokenomics

Rocketpool is the first decentralized staking protocol.  The other staking options are running your own node, staking with Lido, or staking with a centralized exchange like Kraken or Coinbase.

To create a minipool, the node operator must put up 16 ETH as well as RPL worth at least 1.6 ETH (10%).  This serves as collateral for the other 16 ETH received from rETH depositors to run the node on the Beacon Chain.

The node operator receives:
- ETH staking rewards on their 16 ETH in the minipool
- ETH commission between 5-20% on the other 16 ETH in the minipool
- RPL staking rewards on their collateral up to 150% (minimum 10%)

*Note: there is discussion of changing the variable commission rate to a fixed rate of 15%.*

## Alternatives

Compared to solo staking a full node, Rocketpool allows a node operator to run 2 minipools with the same 32 ETH in addition to the commision earned.  The caveats are the RPL staking requirement as well as trusting the security of the smart contracts.

I am not fully versed in Lido's tokenomics.  There are claims that it leans more centralized due to the DAO's control of the staked ETH.  As for staking with a central exchange, I come back to the "not your keys, not your coins" mantra.

## Conclusions

Rocketpool is a step in the right direction for staking ETH.  It creates lucrative financial and decentralized incentizes.  It also simplifies the process of running a full node, making ETH staking more accessible to the masses.  While there is a long way to go before anyone can run their own node, Rocketpool is a great product that I look forward to using on Ethereum's mainnet.