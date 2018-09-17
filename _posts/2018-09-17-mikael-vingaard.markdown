---
title: Mikael Vingaard - The Expert on ICS Honeypots
date: 2018-09-17 04:00:00 Z
categories:
- blog
layout: blog
author: CS3STHLM Crew
pdf:
- 
published: true
permalink: /blog/mikael-vingaard/
---

*This is a blog post with Mikael Vingaard, the expert on ICS Honeypot that will give the 2-day training session during the CS3sthlm conference week. Last year it was a 1 day course, but we decided to extend it so that more could be covered during class. Below you will find an interview we did with Mike as he was preparing for the class.*

<h1 class="blog-title" itemprop="name headline">{{ page.title }}</h1>

#### What is your background, with regards to security, the energy system and honeypots?

For the last 15 years, I have been working as Pentester, Auditor, BC-manager and IT-security "jack of all trade" like malware tracking and alerting via malware sinkholes.

Four years ago I switched from IT security to OT Security and needed to learn a lot of stuff in a very short timespan. As I didn't have a power substation or water treatment plant for my private disposal (who has that :-) I had to learn a lot on 'arcane' ICS protocols like Modbus, IEC104, S7comm, DNP3 in some other way, hence honeypot seemed like an interesting way forward. To sum it all up - I needed to build something to simulate these protocols. 

I found a low interaction honeypot and started to learn about it. After a while I put an ICS honeypot on the Internet, and it was attacked right away! I was hooked and the rest is history - today I manage one of the largest privately owned honeypot networks (120+ sensors) deployed all over the world!

#### Honeypots, aren’t they just tools for researchers? Or can they be used in a real environment?

They can be both! During my two-day training at CS3sthlm in October we will touch both types of usage. Depending on your goals and scope, it is two different deployment approaches - they can (read should!) be used as a important layer in our "defense in depth" strategies. Internally deployed honeypots can provide an effective "close-to-zero-false-positives" warning system - with a minimal maintained profile - and should be used in most ICS networks. My newest honeypot project Defenica works as a very, very convincing deception ICS device, built on purpose to emulate for example a PLC or HMI system.

#### What is the most interesting results or effects you have seen with your honeypots?

That is when I find zero-days targeting my honeypot networks!  Normal reasoning would say that no real attackers would "burn" a zero-day on unsolicited ICS equipment... but some times they do!

My latest published Moxa vulnerability (CVE-2018-10632) [https://ics-cert.us-cert.gov/advisories/ICSA-18-200-04](https://ics-cert.us-cert.gov/advisories/ICSA-18-200-04) was built on the research found in the network traffic aimed at one of my honeypots!

My 2 day workshop would provide a walk-through on that case, to enable my students to be inspired to do similar zero-day research activities. 


#### High interaction honeypots or low interaction honeypots, what is that, and what do you think about it?

Honeypots can be either low, medium or high interaction. Low interaction honeypots are very easy to spot as a fake system if the attacker is skilled, but a high interaction honeypot, to a very large extent, has the same feel and look as the device/system that you are emulating.

During my learning curve I started with typical low interactions honeypots, but today I use only medium/high interaction honeypots. During the workshop we will deploy and work with low, medium and high interaction honeypots -- in combination with real ICS/SCADA equipment!


#### During your time running honeypots, what is the most surprising thing you have encountered or seen?

When moving from low to high interactions honeypots a whole new world of enriched data emerged! Suddenly I found that I was able to detect and track various attacker groups during their campaign. Often one IP address attacks a honeypot, and they do some stuff and then seem to stop and go away. A while later a new IP adress comes along and continues the work that the first IP started! 

Having deployed a considerably number of honeypots globally, I have been able to see patterns, as well as map various activities to a specific group of attackers, previously hidden. 

#### Can an attacker easily see the difference between a real system and a fake one, the honeypot?

No!

In my class I will share my hard-earned knowledge on how to setup honeypots that an attacker cannot differentiate from a real device!

#### How would you differentiate the honeypot in comparison with an IDS or an IPS? What are the advantages?

Traditional IDS/IPS systems are often signature based, hence they will alert you whenever something match a known "signature". If the activities/signatures from the attacker are not known in advance, no alert will be triggered. 

As the honeypot is a fake unit, there should never be any reason to communicate with the device - so any and all traffic/alerts to or from it should be investigated by the SOC/Blue team. 

#### Is there anything that you can catch, or detect, or do with an honeypot that one cannot do with an IDS, IPS or firewall?

Yes. 

A typical IDS system is designed for operating in environment with traditional IT systems, not OT/ICS equipment. Putting an IDS system to alert on 'anomaly stuff ' e.g. old network protocols in an OT industrial network will fire a lots of alerts and make the security monitor system to light up as a over-charged Christmas three - that not a good way to avoid the alert fatigue that so many SOC/SAC teams are currently suffering from...

As highlighted earlier, a significant advantage of using honeypot technology is the (almost) zero-false positive alerts. 

#### Is the honeypot a protection or a detection mechanism?

Very good questions, Robert! I would say that a honeypot typically and *primarily* is a detection mechanism to alert you that something is out of order. But based on the deployment options it can actually be both!


#### Having honeypots in a ICS/SCADA environment, what is the most
important things to think about?

1. To know what  to achieve from the deployment
2. How to make the honeypot ’believable'
3. Not introducing new risks for the company

All this, and more, is what we will learn on the first day of the workshop!

#### If a honeypot actually is being attacked, what is the first thing you should do as the owner of the honeypot?

First: be really happy that it's a honeypot and not the real equipment the attacker are trying to hack :-) 

Secondly: initiate your incident response (IR) process and start to observe the attacker in order to find the best possible time to kick them out of the environment.  

And - if done properly in the IR phase, be sure to gather knowledge of the TTP' of the attackers. 

#### What will your students learn at the training?

My students will learn how to plan, build, deploy and manage different types of honeypots. We will deploy the honeypots on the Internet and see various probes and attacks.

On the second day we will build a dedicated network with real ICS/SCADA equipment and learn how to move from low to high interactions honeypots. Lots of fun stuff to do with this equipment!
 

#### Any last final words of advice you would like to give?

If you don't already have honeypots in your arsenal of security tools you are missing out on a very interesting technology that can be effective, with zero false positives. If you never have worked with honeypots, please come and join the technical training! 

A great bonus of taking the honeypot class is that you also will get a view on the strange and 'arcane' protocols that lives in most industrial networks!
