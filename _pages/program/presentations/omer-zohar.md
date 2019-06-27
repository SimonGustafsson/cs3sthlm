---
title: "Unblockable Chains - Is Blockchain the ultimate malicious infrastructure?"
permalink: "/program/presentations/omer-zohar/"
layout: presentation
speaker:
- name: Omer Zohar
  role: Independant Researcher
  work: Independant
  image: omer-zohar
id: presentation
published: false
---

In this principal research, we investigate the possibilities blockchain technologies pose as an infrastructure for malicious operations. We will demonstrate a POC of a fully functional C&C infrastructure on top of the Ethereum network - the second largest public blockchain which also acts as a distributed computing platform featuring a smart contract functionality.

As Blockchain technologies gain more traction in recent years, it brings promise of creating a decentralized, distributed and transparent economy which aim to disrupt our current centric organizational structures and reduce middlemen.
Notoriously, crypto coins have been the currency of choice on the dark web for conducting illegal transactions. But what about the underlying technology, the Blockchain? Could a distributed, public, popular, global ledger be [ab]used as the infrastructure for the ultimate command and control mechanism? 

Managing a botnet is a problem in distributed computing. Once infected, a host must be able to discover, reach and maintain communication with its operator over long periods. Over the years much effort has been made to perfect these capabilities to avoiding detection, maintain anonymity and resist take downs. From plain old HTTP requests, through DIY TCP protocols and encryption, up to fancy P2P networks, DGAs, Fast Flux and cloud service use. While all these techniques have varying degree of resilience and covertness, all are vulnerable to take down once network topology has been determined. Can blockchain turn this around?

In this talk, which will include many code examples and a live demo, we will discuss:

* How can the blockchain solves the 'first contact' problem?
* How to cope with the fact that all data, code and transactions are publicly visible on the blockchain?
* What is the footprint of running a blockchain node on the client and how to minimize resources?
* Cost analysis: Is it feasible financially to run a botnet at scale on top of a blockchain?
* Is it takedown resilient? Can an adversary interrupt or take over the network? Or cause its resources (ether) to deplete? What are the design pitfalls to mitigate such concerns?
* What information will be revealed to someone tracking the bot? how do you deal with it?
* Does it scale? 

Finally, we will try to offer possible mitigations and detection methods.

All code in this project is be available as Open source.