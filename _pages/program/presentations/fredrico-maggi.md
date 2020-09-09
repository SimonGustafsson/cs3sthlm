---
title: Hidden Attack Surfaces of Modern Industrial Automation Systems
permalink: "/program/presentations/fredrico-maggi/"
layout: presentation
speaker:
- name: Fredrico Maggi
  role: Senior Researcher
  work: Trend Micro
  image: fredrico-maggi
id: presentation
published: true
---

Last year we performed a security analysis on a testbed smart manufacturing system using a variety of ""unconventional"" attack vectors. Striving to think very much outside the box, we wanted to understand which overlooked conditions and attacker capabilities make certain attacks possible, and their consequences.

Through concrete PoCs, we'll describe what unconventional attack vectors and very creative attackers can achieve, as well as how they can be stopped by current security solutions.

We'll first show how a remote attacker can indirectly compromise an engineering workstation to backdoor the automation logic of an industrial robot. Then, we'll reveal how the attack has been carried out via a malicious software extension that targets the simulation and offline programming (OLP) platform. The attendees will learn that such malicious extensions have full capabilities on the target system, but we'll explain what they are and how they can be stopped.

Our second entry point is an industry-grade embedded device. These devices, often dubbed as ""IIoT devices"" offer great programming flexibility—compared to, say, PLCs—at the price of more responsibility for the programmers. The proliferation of customizable IIoT devices along with the many 3rd-party development libraries are the perfect target for software supply-chain attacks. We'll show how we trojanized a simple temperature-measurement library to implement an ARP-based DoS attack, along with inaccurate temperature data-points, which can cause cascade effects down the data-processing pipeline. We'll argue that detecting violations in the software supply-chain is hard in large, distributed enterprises, but their effects can be mitigated with proper network partitioning.

The last step of our security analysis focused on lateral movements to complex, programmable machines such as industrial robots. We observe that, movement-instructions aside, industrial robot programming languages have statements, loops, conditions, network sockets, serial communication, etc. With access to low-level system resources like files, network, memory, and peripherals, task programs are a powerful, overlooked payload. Not only we show that task programs are susceptible to input-validation vulnerabilities, we also show that they're rich enough to implement malware-like functionalities, given that the runtime environment provides no resource isolation. As a result, task programs have unmediated access to the entire system.

We'll share cases of vulnerable and malicious task programs, and how to discover such patterns, including some vulnerabilities we found in real-world code.

We conclude by discussing the remediation steps that can be adopted by developers and vendors to mitigate our findings in the medium and long term.

### Takeaways:
- Learn that programming environments for industrial automation are extensible with plug-in systems (like many other software applications), which could be the weak entry point that can be exploited by using plug-ins as an attack vector.
- Learn that the proliferation of customizable IIoT is creating the demand for faster (and more accessible) firmware development, which in turns makes 3rd-party development libraries an attractive target.
- Learn that the languages used to program industrial robots, and possibly other machines, include features that can allow writing and hiding malicious or vulnerable code.
- Understand why it’s essential to always contextualize attack vectors and vulnerabilities within the entire system: there are so many protection layers and humans in the loop, that could easily prevent a concrete attack from happening, without the need of complex defense solutions."
