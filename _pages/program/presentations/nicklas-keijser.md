---
title: SCADApocalypse Now 4.0?
permalink: "/program/presentations/nicklas-keijser/"
layout: presentation
speaker:
- name: Nicklas Keijser
  role: Incident Handler/CSIRT Officer
  work: CERT-SE/MSB
  image: nicklas-keijser
id: presentation
published: true
---

This presentation will discuss the different issues relating to the fact that systems for critical infrastructure and industry are in the midst of a revolution with many technologies that require connectivity, such as Industry 4.0. The presentation will go through a scenario with an industry that has implemented many, if not almost all of the features, of an Industry 4.0 implementation; in which nothing is impossible and there is not a tin foil hat in sight. When the stage is set we will have a more adversarial point of view and go through the new different attack vectors that are introduced as well as how they can be exploited. Finally advice will be provided on how some of the new threats can be mitigated and what to do.

I define Industry 4.0 in three categories, how to connect data, how to process data and how to store data, all in big amounts. My perspective comes from starting my carrier as an system and automation engineer who worked extensively with optimization, building plant simulators and analyzing big amounts of data with neural networks before big data and machine learning were buzzwords, to later move to work with IT security at the Swedish CERT. This gives an unique view of how the industry has evolved and will evolve. This is combined with current work in IT security incidents, related to both ICS and administrative systems, giving a broad perspective of the attacks that are going on today. I will also look at statistical data today, and to what kind of systems and versions, are installed in each layer of the Purdue model.

Below are some of the different subjects that will be discussed during the presentation divided into the three main pillars om Industry 4.0

How to connect data
* How are ICS doing compared to OWASP IoT 2018?
* Can unsigned live on internet?
* Life cycle management with embedded system and what is hidden in there?
* Web servers
* Firmware
* We are halfway between Y2K and Y2K38, whats next?

How to process data
* Outdated operating systems, and the increase of that number with Windows 7 and Windows Server 2008
* DevOps in the world of ICS
* The challenge of aggregation

How to store data
* Can ICS move towards MongoDB, Hadoop and so forth?
* HMI and store process data in the cloud
* The unnoticed dependencies
* New attack vectors such as speculative execution attacks and container break out