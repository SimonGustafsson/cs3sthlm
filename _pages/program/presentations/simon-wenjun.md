---
title: Threat modeling and attack simulations for enterprise and ICS
permalink: "/program/presentations/simon-wenjun/"
layout: presentation
speaker:
- name: Simon Hacks
  role: Postdoc
  work: KTH
  image: simon-hacks
- name: Wenjun Xiong
  role: PhD Student
  work: KTH
  image: wenjun-xiong
id: presentation
published: true
---

This work concentrates on the cyber security of enterprise and Industrial Control Systems (ICS).

Enterprise systems are growing in complexity, and the adoption of cloud and mobile services has greatly increased attack surfaces. This all has led to fragmentation on the security front. To improve the security of enterprise systems, threat modeling can be applied to proactively deal with security issues from a holistic point of view, and can also be combined with attack simulations to provide quantitative security measurements, which has not been commonly used while shown efficient in some disciplines. 

Hitherto, we have proposed the use of attack simulations based on system architecture models. Our approaches facilitate a model of the system and simulate cyber-attacks in order to identify the greatest weaknesses. This can be imagined as the execution of a great number of parallel virtual penetration tests. Such an attack simulation tool enables the security assessor to focus on the collection of the information about the system required for the simulations.

As the previous approaches rely on a static implementation, we propose the use of the Meta Attack Language (MAL). This framework is built for creating domain-specific languages (DSLs) that define which information about a system is required and specifies the generic attack logic. Since MAL is a meta language (i.e. the set of rules that should be used to create a new DSL), no particular domain of interest is represented, but it can be used to create languages targeting certain domains like enterprise system and ICS.

This work first introduces enterpriseLang - a threat modeling language for enterprise security based on the MITRE ATT&CK Matrix, which can assess the cyber security of enterprise systems from a holistic point of view. This compilable language can automatically visualize possible attack paths an adversary may choose, show the most vulnerable asset, and provide possible mitigations for each attack step intended to counter cyber-attacks. The attack steps representing adversary techniques are captured within the ATT&CK Matrix based on real-world observations. These adversary techniques are categorized by tactics, and are organized with security metrics e.g. platform, permissions required, and mitigations that provide information for threat modeling.

Moreover, this core IT related threat modeling language is complemented by our IcsLang that allows to create and simulate OT specific environments. Similar to enterpriseLang, this language is based on the ICS MITRE ATT&CK Matrix and enriched by real-world observations collected from industry partners in an EU project (EnergyShield). Based on the characteristics of MAL, we will motivate why certain types of attacks are included in our artifact and others not. Mainly, this is based on assumptions, made in the design of MAL and creating a trade-off between level of detail and usability.

To demonstrate the applicability and the integration between the two languages, we present energy domain architecture and simulate well-known attacks e.g. the Ukraine power grid attack scenario to test the languages. These languages can also be re-used by people with less security expertise to automatically assess the security of their specific-enterprise or ICS.