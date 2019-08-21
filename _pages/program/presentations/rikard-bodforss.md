---
title: "Ultra responsible disclosure – or how to deal with a 0-day in critical infrastructure"
permalink: "/program/presentations/rikard-bodforss/"
layout: presentation
speaker:
- name: Rikard Bodforss
  role: CEO & Senior Partner
  work: Bodforss Consulting AB
  image: rikard-bodforss
id: presentation
published: true
---

My presentation will touch on a few moral dilemmas that you face when you discover a critical vulnerability in ICS/SCADA environments. I will also discuss how my discovery was handled by the system supplier and how things could have played out differently. Another key take-away is how you as an asset owner can act to mitigate, and live with, a known serious vulnerability in your critical infrastructure. A problem that my customer and I had to face for over four years. The presentation will be of interest to suppliers, asset owners, and security researchers alike.

The story begins several years ago when I stumbled upon what I suspected was a remote authentication bypass in a component in a SCADA system. I came in very late in the project and was hired as a consultant to replace the IT representative of my customer at a system SAT, since he was going on parental leave. We did a few crude tests and verified that we could bypass authentication and asked the supplier to fix the problem. A few months later they came back with a new version that allegedly was flawless. I was asked to verify the fix and was handed the system on virtual machines.

Using passive methods (mainly Wireshark) I discovered that the problem was far worse than we initially suspected. The security architecture was something from the 80’s and I was able to reverse engineer the protocol and make the system hand over the keys to the kingdom... We went back with this information to the supplier and they tried to downplay the problem. It was hard to exploit and required deep technical skills etc... I got upset and wrote a 30 line POC in python that owned the system and sent them a screenshot.

My customer wanted to tell their colleagues within Swedish national critical infrastructure, and I was on my way to Stockholm to inform Svenska kraftnät’s security manager. That’s when the lawyers came. We discussed the handling of the information intensely over a few weeks, but finally my customer decided that the information was classified, and I had to cancel my trip.

Now my customer (where I also was employed a few years during this debacle) finally has received a new product to replace the broken system (not really a new product, just more lipstick on the same pig, but with a new fancy name). The problem seems like it is handled, and I think it is time to tell the story.

I will end my presentation with a demo of my tool for testing for this vulnerability. At least I hope to have something that could be called a tool at the time of the presentation, otherwise I’ll demo my POC code which is spectacular enough.

The presentation is not deeply technical but will sometimes drop down on the wire and take a cursory glance at protocols. The main focus is on disclosure, risk management, and how suppliers not should handle vulnerability reports. And, as a serial crowd pleaser, I will throw in a demonstration to boot.