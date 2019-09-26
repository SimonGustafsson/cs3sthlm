---
title: When will my PLC support Mirai?  The security economics of large-scale attacks against ICS
permalink: "/program/presentations/mike-dodson/"
layout: presentation
speaker:
- name: Mike Dodson
  role: PhD Student
  work: University of Cambridge
  image: mike-dodson
id: presentation
published: true
---

## [Research in progress]

Since 2011, capable and respected researchers have pronounced impending doom after documenting the tens of thousands of Internet-connected Industrial Control Systems (ICS) and automation systems.  Catastrophic failure of physical systems were postulated, along with crippling ransomware epidemics; after Mirai and ASIC-resistant cryptocurrencies hit the street, researchers also predicted Internet-connected ICS would be used to host DDoS botnets and crypto miners.  With tools like Shodan and Censys to find devices at scale, and open-source libraries to support communication with any ICS protocol imaginable, why haven’t we seen a golden age of scaled ICS attacks?

This talk explores the security economics arguments for why cybercriminals largely ignore ICS devices, and the coming changes to the industrial landscape that may shift criminal focus from IoT to ICS (or, more accurately, the changes that will blur the distinction between the two domains).  I will also discuss the usable security arguments that undergird users’ decisions to connect their ICS devices directly to the Internet.

I will start by presenting a longitudinal study of Internet-connected ICS.  We’ve fingerprinted and tracked thousands of individual devices over a four year period to identify user behaviours, track population stability, and infer patch cadence (to nobody’s surprise, there is not a lot of patching going on).  I’ll show that there is a large, stable, unpatched population of devices with open protocol ports, ripe for exploitation; this includes even the newest hardware and software combinations from reputable manufacturers.

Then, I’ll try to demonstrate that nobody really cares.  I’ll walk through static analysis of hundreds of gigabytes of malware samples, an assessment of hundreds of thousands of stateful honeypot interactions, and a search through 60 million hacker forum posts to show there is neither the interest in nor competence to attack these Internet-connected devices at-scale.  I’ll discuss the security economics argument for why cybercriminals largely ignore this domain, and how expected changes to the Industrial landscape in the immediate future could bring ICS to their attention.

In anticipation of the correct and inevitable objection that ICS devices should never be directly connected to the Internet, I’ll close with a discussion of usable security, looking at default configurations and user motivations in an effort to explain the current state of Internet-connected affairs and why we should only expect this Internet-connected population to grow.

#### Target audience:
This is a non-technical talk of interest (hopefully) to those including cybercrime in their threat model; specifically, vendors and security professionals concerned about how small-to-medium sized enterprises (SMEs) are going to handle Industry 4.0.  SMEs aren’t the only problem, but they’re the largest category of identifiable offenders.

#### Key takeaways:
1. There is a large, stable, unpatched population of vulnerable, Internet-connected ICS devices.  This population is growing.  Without intervention, the growth rate is expected to increase based on pressures to make more devices connectable as we digitise manufacturing and industry.
2. The existing population size and heterogeneity, the cost to develop and deploy an attack, the difficulty in monetising an attack, and the existence of softer targets currently make Internet-connected ICS devices an unattractive target for large-scale attacks.
3. The growing Internet-connected ICS device population, predicted market dominance of a limited number of hardware and software frameworks, and improvements to IoT security blur the distinction between IoT and ICS from an attacker perspective, opening ICS devices to the types of scaled attacks we’ve seen against IoT.
4. Your threat model doesn’t need to include Mirai today, but it might tomorrow.