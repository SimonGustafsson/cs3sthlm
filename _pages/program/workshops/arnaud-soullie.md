---
title: Pentesting Industrial Control Systems
layout: workshop
author: Arnaud Soullié
time: 22-23 October
id: workshop
permalink: "/program/workshops/arnaud-soullie/"
image: arnaud-soullie.png
company: Wavestone
published: true
---

On this intense 2-days training, you will learn everything you need to start pentesting Industrial Control Networks. We will cover the basics to help you understand what are the most common ICS vulnerabilities.

We will then spend some time learning and exploiting Windows & Active Directory weaknesses, as most ICS are controlled by Windows systems. We will cover the most common ICS protocols (Modbus, S7, Profinet, Ethernet/IP, DNP3, OPC…), analyze packet captures and learn how to use these protocols to talk to Programmable Logic Controllers (PLCs).

You will learn how to program a PLC, to better understand how to exploit them. The training will end with an afternoon dedicated to a challenging hands-on exercise: The first CTF in which you capture a real flag! Using your newly acquired skills, you will try to compromise a Windows Active Directory, pivot to an ICS setup to take control of a model train and robotic arms.

#### The detailed outline of the training will be the following:

- Introduction to ICS & common vulnerabilities
- Pentesting Basics & tools [Hands-on]
- Windows basics and pentesting Windows [Hands-on]
- Focus on ICS protocols
- Programming PLCs [Hands-on]
- Pentesting ICS [Hands-on]
- Capture The Flag [Hands-on]

### Detailed content

#### Module 1: Introduction to ICS & common vulnerabilities

For starters, I will introduce the concept of ICS.

The topics will include:
- Vocabulary
- Classic architectures
- ICS components (PLCs, HMI, SCADA, DCS, sensors, RTUs, Historian, etc) and their roles
- OT vs IT

I will also introduce attendees to the most common vulnerabilities in ICS, and describes some of the public attacks:
- Lack of network segmentation / Exposure
- Lack of hardening - ICS protocols insecurity

*This module is not hands-on*


#### Module 2: Pentesting Basics & tools

This module will introduce the concept of penetration test.
I do not intend to spend too much time of the theoretical stuff (how to make
a report, etc etc) since that is not what attendees are looking for.

However, I think a module is required to ensure that everyone shares at least the
basic concepts of penetration testing, in order to understand the rest of the training.
The module will include :
- OSINT for ICS : Where to look to find informations
- Reconnaissance : how to portscan & nessus
- Exploitation : Metasploit basics

Toolz used : nmap, Nessus, Metasploit

Lab setup : Windows Servers and workstations, Metasploitable, Kali Linux

#### Module 3: Windows basics and pentesting Windows
Any ICS now includes, at least in some areas, Windows systems. So I think that some time must be spent on Windows basics.

This module will introduce the following topics: 
- Windows Active Directory
- How to find credentials on Windows systems
- Exploiting and pivoting to gain Domain Admin privileges

A selection of hacking techniques will be applied on lab machines.

#### Module 4: Focus on ICS protocols

This module will introduce the most common ICS protocols: Modbus/TCP, S7, Profinet, DNP3, Ethernet/IP…. Attendees will analyze network captures and be introduced to software libraries/ clients to use these protocols to talk to PLC simulators.

*This module is not hands-on*

#### Module 5: Programming PLCs
In order to have a better understanding of how a PLC works, student will use dedicated software to program a PLC in ladder logic (using trial versions of TIA portal and/or soMachine basic).

Students will then deploy the code to real PLCs.

Toolz used : SoMachine Basic

Lab : Windows virtual machine

#### Module 6: Pentesting ICS
This module will be mostly lab sessions, in order to apply the knowledge learned so far:
- Network capture analysis & replaying packets
- Talking industrial protocols: Modbus, S7
- Additional PLC features: web server, ftp, snmp and how to exploit it

Toolz used : nmap, Nessus, Metasploit

Lab : Windows Servers and workstations, Kali Linux, Siemens and Schneider PLCs

#### Module 7: Capture The Flag

I strongly believe that a good training must include “real-life” examples and labs. I will dedicate the last half-day of the training to a Capture The Flag event. To do so, I will have a specific setup where attendees will be able to use their newly-acquired knowledge on a simulation of a “real-life” system. This will include compromise of Windows host, pivoting to the ICS, understanding the industrial process, and finally capturing a real flag with a robot hand!

This will be an expanded version of the CTF I usually organize during the ICS workshops at conferences.

#### Target audience
This training is aimed at OT professionals willing to understand what are the security issues within ICS, and how
to technically assess the security level of an ICS. It will also be beneficial for IT security professionals wanting to understand the technical specificities of ICS.

#### Key takeaways
The attendees will learn what are the common ICS vulnerabilities, the tools and techniques to assess an ICS (both Windows systems and PLCs), and will practice these techniques during an hands-on Capture The Flag on real hardware.