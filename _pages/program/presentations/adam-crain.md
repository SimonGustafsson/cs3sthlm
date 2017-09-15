---
title: Secure SCADA Protocol for the 21st Century (SSP21)
permalink: "/program/presentations/adam-crain/"
layout: presentation
speaker: 
 - name: Adam Crain
   role: Software Engineer
   work: Automatak
   image: adam-crain.png
id: presentation
---

Most SCADA protocols have no security, but will continue to be used in ICS for many years to come. The recent “Industroyer” malware has underscored this lack of endpoint security in most industrial networks. Defense-in-depth must now include components cryptographically proving their identity to their network peers to increase difficulty for attackers, especially automated malware.

SSP21 is an open source development effort to create a modern secure encapsulation layer specifically for industrial control system protocols.  SSP21 is intended to fill a technology gap where existing technologies like TLS are not applicable, namely for serial communication channels and endpoints with limited bandwidth and/or processing capabilities.

Our specification includes a production-ready reference implementation that has been developed iteratively alongside the specification.  We see this iterative process of design, implementation, and testing as crucial to creation of good standards. The reference implementation also include a proxy 

This presentation will cover the following topics:

- SSP21 modes of operation (pre-shared public key vs PKI)
- Improvements vs TLS/x509 in ICS
- Key differences between SSP21 and past efforts to create secure SCADA protocols/wrappers
- Details of the SSP21 secure encapsulation layer
	- Modern cryptographic primitives
	- Authenticated ECDH key agreement
	- Time-protected authenticated sessions
	- The “industrial certificate format (ICF)”
- Key management in SSP21 systems, including revocation schemes
- Results from laboratory testing at San Diego Gas & Electric
- SSP21 public release status
- Progress with industry partners and vendors

SSP21 is sponsored by California Energy Systems for the 21st Century (CES21).
