---
title: Applying the Consequence-driven Cyber-informed Engineering method on a Facility for a Successful Attack
permalink: "/program/presentations/andreas-jens/"
layout: presentation
speaker:
- name: Andreas Erdich
  role: Hardware Engineer
  work: BSI
  image: andreas-erdich
- name: Jens Wiesner
  role: Dipl. Phys.
  work: BSI
  image: jens-wiesner
id: presentation
published: true
---

Tactics, techniques, and procedures are the sophisticated intelligence information. Threat intelligence agencies using this approach attribute attacks to a specific “group”. This is also a valid approach to defend yourself against these attack groups. However, if you want to defend against an unknown attacker – especially in OT-infrastructures – it seems more suitable starting by the consequences of a cyber attack you want to avoid and the possible paths leading to it. Critical functions can be identified by applying the Consequence-driven Cyber-informed Engineering (CCE) method. Compromising specific devices or applications may provide an easy way to achieve the consequence the attacker is up to. This is demonstrated at a real test facility containing over 60 devices, which regulate a physical process.

This presentation illustrates the application of CCE for an attack on a facility. First, the goal of the attack is specified, which would be the sabotage of the facility in this case. After that, possible paths achieving this goal are determined. The easiest path in this case is an attack manipulating the communication between a HMI and PLC using a common but proprietary protocol. Finally, countermeasures from the IT security standards such as “IT-Grundschutz” and ISO/IEC 62443 are applied which hamper a successful attack.

Using the CCE method and a security standard, the presentation starts and ends on a high level. This is interesting for middle management, which want to improve their security. Furthermore, the technical illustration executing a possible attack is interesting for the appropriate audience, which is also present at the conference. During the work, a dissector in Wireshark for the protocol was implemented. Consequently, the communication between the devices can be illustrated in more detail explaining the performed attack. As a result of the technical and high level illustration, the contribution of the BSI outline a cyber attack for both groups.

The key take away are the dissector for the protocol and the applied CCE method. Later can be used for risk assessment.