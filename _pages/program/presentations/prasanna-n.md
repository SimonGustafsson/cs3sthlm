---
title: CVSS for ICS; Gauging a tennis game with number of goals
permalink: "/program/presentations/prasanna-n/"
layout: presentation
speaker:
- name: Prasanna N
  role: R&D Engineer
  work: ABB GISPL
  image: prasanna-n
id: presentation
published: true
---

Patching known security vulnerabilities is one of the most essential task in any OT security program. Utilities having large number of patches to be applied in various cyber assets, use CVSS (Common Vulnerability Scoring System) metrics of the vulnerabilities to prioritize in applying patches. This prioritization however doesn’t serve well the purpose of patching at all times, particularly in OT industry; the reason being that CVSS has not been designed with OT security in mind. A low scored vulnerability that left unpatched can bring in high-risk to the OT environment. Environmental metrics have also similar challenges. Moreover, finding a single scoring system that fits every utility doesn’t seems to be realistic; at least in near future. Hence, there is clearly a need for a better approach to prioritize among various patches, that should take the cyber-physical impact on OT also into account.

This presentation illustrates a few examples of vulnerabilities and their respective CVSS score, in order to understand why these may fail to reveal the real impact to the ICS environment. Also, exhibits a possible better approach for prioritizing patch irrespective of the vendor provided score. For each asset in an OT ecosystem that has a specified functionality, the top priority would be to secure the functionality. For example, the functionality could be that a controller sending critical command to the field device or a HMI which displays the actual field data. This approach serves the purpose of securing the functionality of the OT system rather than focusing on confidentiality, integrity and availability.