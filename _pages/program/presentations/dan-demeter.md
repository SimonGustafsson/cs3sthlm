---
title: Back to the IoT Future
permalink: "/program/presentations/dan-demeter/"
layout: presentation
speaker: 
 - name: Dan Demeter
   role: Security Researcher
   work: Kaspersky Labs
   image: dan-demeter.png
id: presentation
---

Introducing the honeypot project, which will be an open source project, allowing anyone to run a small honeypot in their network. The idea of this project is to let anyone clone the git repo and then setup his own IoT honeypot anywhere using Docker virtualization platform. The project will be announced for the first time at your conference, as I'm still polishing right now.

Showing the latest attacks captured by the honeypots that are deployed mostly in Romania, in residential networks. The main assumption is that attackers are actually avoiding honeypots running in main VPS providers ASNs / IP ranges and are actually targeting residential networks. So I did just that: installed honeypots in 5 big Romanian ISPs. They account for more than 80% of all RO residential networks. The moment we installed these honeypots, we started seeing attacks. They were not just a few, so I will discuss about trends: for example how attackers are reacting to publicly released new 0day exploits by improving the attack methods. I will present a comprehensive view and the current attack trends at global scale ( data provided by honeypots installed all around the world) and at a country level (data provided by the honeypots installed in Romanian residential networks).

Once we collected network attacks I started checking the payload or bash commands the attackers were sending. This allowed me to fetch some fresh/interesting samples (this part was not presented at SAS due to time constraints). I will talk about these samples as well. 