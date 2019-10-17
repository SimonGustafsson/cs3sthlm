---
title: Secure your MES - the bridge between IT and OT
permalink: "/program/presentations/khalid-ansari/"
layout: presentation
speaker:
- name: Khalid Ansari
  role: Automation & MES Engineer
  work: Qatar Aluminium Ltd
  image: khalid-ansari
id: presentation
published: true
---

The presentation will be geared towards asset-owners, primarily from the manufacturing sector. However, other industries may also benefit. I intend to present how we, as an asset-owner, are approaching the challenge of securing our Manufacturing Execution Systems (MES). I will briefly discuss what an MES system is and why do most manufacturing industries need it.

An MES system bridges IT and OT networks -- it interfaces with ERP on the IT side and Automation layer (PLCs, etc.) on the OT side. And also interfaces with Laboratory and other systems at the same level. I will briefly go into the reasons why the MES needs to talk to both IT and OT.  And how it is the air-gap myth-buster!

As an MES is exposed to the IT side, and hence indirectly to the Internet, it is critical we secure it. I will discuss how careful network segmentation will help in this cause.

OPC is a common protocol used by most MES systems for interfacing with various Automation systems. I will discuss our attempts at securing our legacy OPC-DA communication interfaces, and how we migrated to and are securing our current OPC-UA interfaces.  Will go into security features afforded by the OPC-UA specification and how just moving to OPC-UA does not guarantee security.

In addition, I will present other security controls that may be deployed to increase security posture of a MES system.

Finally, I will end the presentation with the argument for absolute need for developing strong and verifiable disaster recovery plans (DR) and business continuity plans (BCP) for when MES goes down. And what would such a BCP typically comprise of.