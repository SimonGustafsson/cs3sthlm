---
title: Attacking PLCs by PLC in deep
permalink: "/program/presentations/cheng-lei/"
layout: presentation
speaker:
- name: Cheng Lei
  role: ICS Security Researcher
  work: NSFOCUS
  image: cheng-lei
id: presentation
---

In the past few years, the attacks to industrial control systems(ICS) has increased year by year. Most of the attacks are exploit of the insecurity of ICS protocols like Stuxnet in 2010, Triton in 2017.

In 2016, Ralf Spenneberg and et al give a presentation named PLC Blaster which demonstrates a worm lives and runs on Siemens S7-1200 PLCs, they use S7commplus protocol to transmit worms in PLCs. In this research, we proposed an attack method that a PLC can attack other different vendors’ PLCs inside the net.

If one PLC is infected, this PLC can scan the whole net to find all kinds of PLCs and send back the information back to a Command &Control server. Then, once received the command from C&C server, this infected PLC can do attacks to other different vendors’ PLCs. Like PLC Blaster, this malware can be spread inside the net.