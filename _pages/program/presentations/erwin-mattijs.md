---
title: "It WISN't Me: Attacking Industrial Wireless Mesh Networks (part II)"
permalink: "/program/presentations/erwin-mattijs/"
layout: presentation
speaker:
- name: Erwin Paternotte
  role: Lead Security Consultant
  work: Nixu
  image: erwin-paternotte
- name: Mattijs van Ommeren
  role: Lead Consultant
  work: Nixu
  image: mattijs-van-ommeren
id: presentation
published: true
---

Wireless sensor networks are commonly thought of as IoT devices communicating using familiar short­range wireless protocols like Zigbee, MiWi, Thread and OpenWSN. A lesser known fact is that about a decade ago, two industrial wireless protocols (WirelessHART and ISA100.11a) have been designed for industrial applications, which are based on the common IEEE 802.15.4 RF standard. These Wireless Industrial Sensor Networks (WISN) are used in process field device networks to monitor temperature, pressure, levels, flow or vibrations. The petrochemical industry uses WISN in oil and gas fields and plants around the world.

Both IEC ratified standards have been commonly praised by the ICS industry for their security features, including strong encryption on multiple layers within the protocol stack, resistance to RF interference, and replay protection. While the standards in general look safe on paper, there are potential interesting attack vectors that require verification. However, security research so far has not yielded any significant results beyond basic attack vectors. Often these attacks have only been theorized, and not (publically) demonstrated. In addition, vendor implementations have not been thoroughly tested for security by independent third parties, due to protocol complexity and the lack of proper (hardware/software) tools. We strongly believe in Wright's principle, "Security does not improve until practical tools for exploration of the attack surface are made available."

This presentation will fill this gap by providing the necessary building blocks to perform more in depth security analysis of WISN, and provide tools to perform practical attacks against these wireless networks in order to verify resistance to real world attacks.

#### Type of presentation:

Presentation, including demonstrations of the attacks

Aim of the presentation:
* No expensive equipment is required to sniff and interact with WISN technology allowing a larger group of security researchers to assess the security of these critical infrastructure components.
* Asset owners should familiarize themselves with risks involved when using WISN technologies in industrial environments. The configuration of existing installations could be verified to further improve the security.
* Asset owners are advised to be reluctant in applying WSN technology for control and functional safety applications, as this seems to be trending at the moment.

Target audience: technical specialists and asset owners of OT environments