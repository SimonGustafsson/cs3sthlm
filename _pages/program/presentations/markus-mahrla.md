---
title: Fuzz Testing IEC 61850
permalink: "/program/presentations/markus-mahrla/"
layout: presentation
speaker:
- name: Markus Mahrla
  role: Security Consultant
  work: GAI NetConsult GmbH
  image: markus-mahrla
id: presentation
published: true
---

During implementation of protocols in a communication stack usually only positive testing is performed to verify the conformance to the standard, especially for ICS protocols. Negative testing as part of the development process is often not applied. Therefore, it remains unknown how the stack or entire component is reacting on invalid, random or unexpected data. This talk will introduce robustness tests on IEC 61850, an ICS protocol that is used in digital substation communication. IEC 61850 is a modern and highly complex protocol stack and therefore provides a high attack surface.

The talk contains an introduction on IEC 61850 and describes the fuzzing approach together with details on how these tests are performed using a mutation-based fuzzer utilizing the XML based “Packet Description Markup Language” (PDML). It will also provide insights of difficulties encountered by performing those tests and how they have been circumvented. The audience will also learn what kind of attack vectors arise from those
vulnerabilities.

As part of the talk, anonymized fuzzing results are presented from day-to-day ICS security audits as well as a live demonstration of the fuzzer is given.

This talk will provide in depth technical details and is primarily meant for security professionals in the area of industrial control systems and substation automation.