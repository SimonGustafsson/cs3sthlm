---
title: "Bug hunting in cloud connected ICS devices: Getting root from the cloud"
permalink: "/program/presentations/kelly-leuschner/"
layout: presentation
speaker:
- name: Kelly Leaschner
  role: Security Researcher
  work: Cisco Talos
  image: kelly-leuschner
id: presentation
published: true
---

As more and more devices are becoming cloud connected it is important to understand how this attack surface is different from traditional socket based server applications. There is no open port listening with a cloud connected application so there is additional work required in order to just get the application to accept attacker controlled data. This talk will walk through the initial steps necessary to even begin vulnerability research of the application. Cloud based control of physical devices has some security benefits compared to traditional socket programming but, at the end of the day there is an application running on a device that acts on messages from the cloud. This means that there is opportunity for bugs and vulnerabilities in the software responsible for handling cloud messages. This talk will describe changes in research methodology that are necessary for performing vulnerability research on a cloud connected application. Zero-day vulnerabilities found in a cloud connected application on a popular industrial controller will be covered in depth. These vulnerabilities will be demonstrated live by impersonating the industrial vendor cloud application, resulting in getting root from the cloud.

## Outline
- Introduction

### Moving to the cloud
1. Software stack, traditional vs. cloud connected
2. Additional security benefits of cloud applications
	* Libraries provided which include:
	* Authentication enabled by default (most times)
	* Encryption enabled by default (most times)
3. Where are vulnerabilities most likely to be found?
	* In the actual handling of the message data, and the actions taken as a result Vendor code
4. Challenges for Vulnerability research
	* Researcher doesn't have access to application running in the cloud at least not source access
	* Authentication and encryption makes it difficult to MITM to observe traffic for research
	* Pre-work is necessary to even begin learning about the data format
	* Which is what we will go into next

### Intro to the industrial controller
1. Azure IoT Hub client
	* MQTT based protocol
	* JSON data format
	* We will need to learn the exact format through research
2. Azure IoT Hub
	* Running the industrial vendor cloud application

### Protocol Overview
1. MQTT Overview
	* Publish / Subscribe protocol
	* Client
	* Broker
	* Cloud Application
2. MQTT Topics
	* Format
	* Examples
	* Wildcards

### Research Methodology
1. Changes to Research Approach
	* Can't connect to a port and start sending data
	* If you're lucky you might have access to both applications and could capture data between them
	* Options
	* Configure the device to connect to a real cloud instance that you control
	* Stand up a “local” server pretending to be the cloud
2. Test Setup - Real cloud instance
	* In this scenario the researcher must have access to configure connection properties with the cloud
3. Test Setup - Local MQTT broker
	* In this scenario the researcher must have the ability to add a root certificate to the device. (will probably require root)


### Industrial controller vulnerabilities
1. Supported messages
	* Discuss device specific messages
2. Discuss vulnerable message structure
3. Outline of vulnerable process
	* Discuss steps involved
4. Vulnerability explanations
	* Discuss specific vulnerabilities
5. DEMO (live)
	* Code Execution from the cloud

### Conclusion
1. Mitigations / Lessons Learned
	* Discuss mistakes to avoid when developing a cloud application
	* Discuss ways to mitigate with existing industrial control devices
2. Review - Research Pre-work
	* Impersonating the cloud application
	* Local vs. Real Cloud instance
	* Learning the topic format
	* For both publish and subscribe
	* Learning the data format
	* Finding the data parsing code
	* From there it's business as usual for vulnerability research

### Target audience
Familiarity with programming and common bug classes

### Audience expectations
Detailed description of vulnerability research methodology relating to cloud connected ICS devices.

Description of an attack chain combining multiple zero day vulnerabilities to gain root access to a cloud connected controller.

### Audience takeaway
Cloud connectivity provides many benefits to Industrial automation, but it also provides additional attack surface. Vendors should be mindful of untrusted data even if it comes from a cloud application.
