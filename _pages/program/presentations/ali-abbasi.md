---
title: Configurable Code-Reuse Attacks Mitigation for COTS Programmable Logic Controller Binaries
permalink: "/program/presentations/ali-abbasi/"
layout: presentation
speaker: 
 - name: Ali Abbasi
   role: Ph.D. candidate
   work: University of Twente, Netherlands
   image: ali-abbasi.png
id: presentation
---

PLCs are playing a major role in critical infrastructures. Similar to
other computer systems PLCs are vulnerable to code-reuse attacks.
Compromising these devices in a critical environment constitute a
significant security and safety risk.

Code-reuse mitigations previously suggested for general-purpose
computers. However, there are specific PLC specific constraints that
were never addressed in other code-reuse mitigation systems in
general-purpose computers.

Firstly, PLCs are embedded systems that are extremely heterogeneous
concerning the processing power. Secondly, the PLC vendors tend to
procure third party software only available in Commercial Off-The-Shelf
(COTS) binary form. Finally, one cannot rely on the presence of any
particular hardware, hardware-facilitated functionality or
hardware-specific features for a memory corruption mitigation approach
in the PLCs.


In this presentation, we introduce an open source code-reuse mitigation
system for PLC binaries. Our system addresses the performance diversity
(the first constraint) of the PLCs by providing configurable protection
policies, that can be tailored to the specific system. Also, our system
protects COTS binaries (second constraint) without relying on the
control-flow graph and can work with hardware-agnostic cryptographically
secure shadow stack.


To the best of our knowledge, no memory corruption mitigation approach
for embedded systems in general and specifically for the PLCs, addresses
all limitations mentioned above.

For evaluation of our work, we choose ARM since it is a common
architecture in the PLCs. Our evaluation shows that our code-reuse
mitigation system provides its protection with a limited performance
overhead for COTS binaries of the PLC.