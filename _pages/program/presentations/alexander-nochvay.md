---
title: The fall of CODESYS
permalink: "/program/presentations/alexander-nochvay/"
layout: presentation
speaker:
- name: Alexander Nochvay
  role: Security Researcher
  work: Kaspersky
  image: alexander-nochvay
id: presentation
published: true
---

In the talk, we will discuss our research on the network communication of industrial devices that have Codesys Runtime installed on them. Codesys Runtime is an example of software designed to resolve the issue of industrial device unification and interaction.

Codesys Runtime installation has already been adapted for over 350 devices designed for all types of industrial applications. CoDeSys developers have made it easy for vendors to build Codesys Runtime into their devices to enable users of these devices to program them using the CoDeSys programming environment. As a result of this, the
number of adapted devices is set to grow further.

A flaw or vulnerability identified in a core networking component on a device is highly likely to be reproduced on other devices, even though these devices may be based on completely different hardware. It should also be kept in mind that, since the software is designed for industrial applications, devices running it will be united into an integrated network infrastructure. And since no documentation on the protocol is available, monitoring network activity between devices is not an option. Putting these three factors together, we can see that the exploitation of a vulnerability in Codesys Runtime could lead to an attack on an integrated network of devices running Codesys Runtime, a situation not unlike a "Die Hard" scenario.

In the talk, we will analyze the proprietary network protocol, look at the fields used, describe the protocol’s functionality and how the packets received are handled on the client side. We will also discuss the difficulties that we faced in our research and demonstrate both the architecture­related vulnerabilities in the protocol itself and the vulnerabilities in the request handlers used by it.