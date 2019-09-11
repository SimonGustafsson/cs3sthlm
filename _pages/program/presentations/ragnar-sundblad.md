---
title: Building a distributed and robust time synchronisation service
permalink: "/program/presentations/ragnar-sundblad/"
layout: presentation
speaker:
- name: Ragnar Sundblad
  role: Time Worker
  work: Indepedant
  image: ragnar-sundblad
id: presentation
published: true
---

Accurate time and synchronisation is essential for our technical infrastructure such as the telephone networks and the power grid. Getting very good time is easy and cheap using GNSS receivers (Global Navigation Satellite Systems, e.g. GPS and Galileo), but these systems suffer from several weaknesses and threats.

Described in this session is a system for distributed time dissemination, with the dual purposes of making time more accessible in a resilient way to increase availability of critical infrastructure when things are not fully normal and operational, and also to be a reliable source of time over the Internet for anyone anywhere.

The system has caesium based atomic clocks to be able to work autonomously within normal specifications for a long time, PTP based distribution on dedicated lines for high accuracy needs, and hardware based NTP servers connected to the public Internet, implemented in FPGA, to be able to handle overload attacks as transparent as possible.