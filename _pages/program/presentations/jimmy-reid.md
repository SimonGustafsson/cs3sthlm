---
title: "Broken Rungs: A look at popular ladder logic runtime privileges"
permalink: "/program/presentations/jimmy-reid/"
layout: presentation
speaker:
- name: Jimmy Wylie
  role: Senior Adversary Hunter
  work: Dragos Inc.
  image: jimmy-wylie
- name: Reid Wightman
  role: Senior Vulnerability Researcher
  work: Dragos Inc.
  image: reid-wightman
id: presentation
published: true
---

The TRISIS/TRITON/HatMan malware represents the first time that a rootkit was used against a programmable logic controller. In this talk, we will dive deep into several major PLC brands and ask the questions: Could TRISIS happen here? And if so, how easy or difficult would it be for an attacker to have the same effect?

The talk will detail the ladder logic programming and compilation systems from several vendors, and provide results of testing for ladder logic privileges and privilege escalation issues. This will include, where possible, reviewing the CPU used in each PLC, showing what security features the CPU has, and finally showing results of loading weaponized ladder logic into the PLC for execution. This will also cover in some limited depth the ladder logic transfer protocol used by each controller.

#### Target audience ­
Technical researchers, low­level engineers for vendors, and low­level protocol analysis

#### Key takeaways

* For end users, they should walk away with questions to ask their vendors. For PLCs vendors, they should ask, 'Is this type of attack in your threat model, and how are you dealing with it?'. For their security vendors, they should ask, 'Are you able to carve logic updates and perform any level of analysis on them in your security system?'
* For vendors, they key takeaway should be: This type of attack should be in your threat model.
* For security researchers and vendors, the key takeaway should be: We should research tools to monitor and prevent malicious logic updates. This might require more research into static code analysis, and will likely require some cooperation from the vendors.