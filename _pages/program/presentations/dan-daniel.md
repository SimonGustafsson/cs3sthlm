---
title: Stateful Protocol Hunting
permalink: "/program/presentations/dan-daniel/"
layout: presentation
speaker:
- name: Dan Gunter
  role: Principal Threat Analyst
  work: Dragos Inc
  image: dan-gunter.png
- name: Daniel Michaud-Soucy
  role: Principal Threat Analyst
  work: Dragos Inc
  image: daniel-michaud-soucy.png
id: presentation
---

Over the last decade, two instances of industrial control system (ICS) targeted malware successfully impacted operations. Most recently, CRASHOVERRIDE targeted a Ukrainian transmission substation in December of 2016. In both cases, attackers developed malware that crafted industrial protocol packets to manipulate control systems either by hijacking the legitimate master server or hooking the network stack. Defense against properly crafted packets presents a unique challenge as many existing approaches simply analyze the integrity of a single packet. This talk will focus on what stateful analysis is and how you can add it to your detection or hunting strategy to perform deep protocol analysis. We will cover the steps necessary to begin stateful analysis and dive into thresholds you might set for detection.