---
title: Automotive DoIP and forensic analysis for automotive systems
permalink: "/program/presentations/christopher-kevin/"
layout: presentation
speaker:
- name: Christopher Corbett
  role: Junior Incident Responder
  work: Audi
  image: christopher-corbett
- name: Kevin Gomez Buquerin
  role: Junior Incident Responder
  work: Audi
  image: kevin-gomez-buquerin
id: presentation
published: true
---

The automobile industry is changing and new fields such as autonomous driving, battery enhancements and infrastructure or advanced mobility services are under development. As a side effect the interconnection of vehicles increases with numerous new protocols and technologies introduced to enable these scenarios, which also attract the attention of security researchers and hackers. Therefore, more focus on security practices is necessary.

One of these new technologies is Automotive Ethernet. It not only affects the in-vehicle network with enhanced bandwidth and protocol versatility, but also enables the connection of the vehicle to existing external network infrastructures. This can be accomplished by the Diagnostic over Internet Protocol (DoIP) which is used for diagnostic communication over the Onboard Diagnostic (OBD) interface.

Therefore potential unsafe or even unknown functionality is exposed to the outside world which, until now, was a private point to point connection between the diagnostic equipment and the vehicle. Moreover the diagnostic interface is commonly used to modify vehicles like enabling/disabling software features or update firmware. With an increasing proportion of software as a product features and at the same time raising attractiveness for malicious activities (e.g. fraud, attacks, manipulation) by attackers. The Original Equipment Manufacturers (OEM) are faced with new challenges in the domain of evidence preservation and reconciliation. Especially with the ISO21434 and UNECE on the horizon.

We examined possible scenarios that range from information gathering to malicious activities with focus on the vehicle and infrastructure. At the same time we approached the idea of what forensic evidence such activities might leave behind and how state-of-the-art technology helps preserving evidence. We therefore analysed the protocol specification and developed software according to our scenarios for evaluation. Furthermore, we studied existing forensic investigation approaches in the IT and SCADA domains and their feasibility with the DoIP protocol, as being the central point of communication with the in-vehicle network from outside the vehicle.

In this presentation we present our approach on the analysis of the protocol, the scenarios we derived and the tools we used for evaluation. This also includes the applicability check of the diagnostic interface for forensic investigation as well as discussion to provide these forensic investigations for court relevant incidents.