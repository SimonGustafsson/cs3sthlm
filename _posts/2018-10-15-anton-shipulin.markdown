---
title: Anton Shipulin - Kaspersky Lab
date: 2018-10-15 04:00:00
categories:
- blog
layout: blog
author: CS3STHLM Crew
pdf:
- 
published: true
permalink: /blog/anton-shipulin/
---
*This is a blog post with Anton Shipulin, a global presales manager at Kaspersky Lab.*

<h1 class="blog-title" itemprop="name headline">{{ page.title }}</h1>

#### What is your name, where do you work and what is your profession?
 
My name is Anton Shipulin I work for Kaspersky Lab at the headquarter, as a global presales manager in Kaspersky Industrial CyberSecurity (KICS) business development team. I am responsible for various things like promoting our technologies and expertise, market, technologies, and research intelligence, advising product development, building and improving presale processes and resources, heading Kaspersky ICS conference program committee, and many others. 

Besides that, I am a co-founder of international Russian-speaking ICS Cyber Security community [RUSCADASEC](https://www.ruscadasec.com/) and Industrial Cybersecurity Center (CCI) coordinator for Russia. All of these is because I have been a big fan of industrial cyber security topic for about 10 years and keen to help people to increase industrial cybersecurity posture.
 
#### Have you been to CS3sthlm (4SICS) before? Have you been to Stockholm before?

No! It is my first time at CS3sthlm and in Sweden! I am very excited to come this year as I’ve been following the conference for years and believe it is one of the best ICS security conferences, and doubly happy to be here with our Kaspersky ICS team as a sponsor to share our industrial cybersecurity expertise! Thank you for the long-standing quality! 
 
#### This area, protection of critical infrastructure, what makes it so interesting do you think?

What amazed me when I was studying cybersecurity at the university was how close had become a physical and cyber world. That pushing a button remotely you can negatively impact the physical process. Years have passed since then and we see that those worlds have become even closer, big cyber-physical incidents happened, lots of researchers are done every year all over the world proving that despite specific of ICS and processes, they can be hacked with sufficient resources. It scares
 
#### What will you present or demo in the ICS Security Lab?

We will bring two demo modes to the lab: Gasoil discharge rail tank stand and Anomaly detection on the IoT stand, and our industrial cybersecurity researchers who want to look at and evaluate the security posture of the presented industrial equipment in the Lab and test possible cyber-physical attack scenarios.

Gasoil discharge rail tank stand shows several targeted attack scenarios that could happen to industrial infrastructure on an example of oil and gas industry. The model represents a rail tank discharge rack that is used for offloading of oil into storage tanks. The sample attack scenarios (including «Process STOP», «Buffer tank overflow» and «Impacting pump operation») demonstrate how hypothetical hacker can impact or sabotage the operation of the rail tank discharge process. At the stand (comprising of an industrial programmable logic controller, physical process representation and two industrial workstations protected by Kaspersky Industrial Cybersecurity) you can see sequential stages of cyberattack, possible outcome and counteracting reaction of protection mechanisms based on Kaspersky Industrial Cybersecurity.

![alt text]({{ site.baseurl }}/assets/news/anton-shipulin/image-01.png)
![alt text]({{ site.baseurl }}/assets/news/anton-shipulin/image-02.png)

Anomaly detection on the IoT stand simulates attempted attacks on typical elements of IoT infrastructure, such as gateways and devices (e.g. an IP camera), which are connected to a local network. IoT devices such as various controllers, sensors, cameras, are widely used in industrial organizations to collect and analyze data about manufacturing processes and to automate procedures. On the stand, you can see how IoT devices (an IP camera in this case) can be easily manipulated by an intruder. The intruder steals video data from the camera by creating a second video stream that is then connected to a criminal’s notebook. IoT gateways can be vulnerable to attempts to run a malicious code on them and to illegitimately change the firmware. These scenarios can be stopped with the Kaspersky IoT Security solution. The solution consists of several components, including Machine Learning Anomaly Detection that reveals anomalies in devices behavior; Linux Application Control (LAC), that blocks the launch of suspicious code that are not in the secure “White List”. This is accomplished via a connection to Kaspersky Lab intelligence services through the Kaspersky Security Network - ensuring a fast response. A program called Secure Boot blocks the launch of illegitimate software; and another solution, Secure Update, prevents a device from being updated with illegitimate version of software.

#### Will there be any new products or services that you are rolling out?

On Gasoil discharge oil tank demo we show how our solution - Kaspersky Industrial Cybersecurity – reacts on the different ICS attacks. Basically, Kaspersky Industrial CyberSecurity is a portfolio of technologies and services designed to protect operational technology layers and elements of industrial enterprises – including SCADA servers, HMIs, engineering workstations, PLCs, network connections – without impacting on operational continuity and the consistency of industrial process. I would give a more detailed an overview of our approach to  Industrial Cybersecurity at the expo talk.

#### There has been some publication about the Kaspersky secure ICS operating system. What is the current status of that?
 
It is not only an operating system. Kaspersky Lab provides three closely related technologies: KasperskyOS, Kaspersky Security System for Linux and Kaspersky Secure Hypervisor. All these solutions have outstanding security capabilities due to dedicated security engine - Kaspersky Security System, capable to specify diverse security properties in a higher level way.

KasperskyOS has already been successfully used in network appliances and other specialized solutions, and the major features of upcoming release are hard real-time support and support of CODESYS PLC runtime from 3S company, thus making KasperskyOS an ideal platform for PLC, where security matters.

To harden existing Linux-based PLCs, there is a Kaspersky Security System for Linux - a product, based on the security engine and Linux containers technology. It allows to isolate components of different trust levels and enforce specified security properties. As an example of a solution based on this technology, there is an Embedded Security Shield from BE.Services, providing protected version of CODESYS runtime, which was separated into two parts (communication and core), and flexible and secure way to operate the PLC, constraining undesired behavior.
As to Kaspersky Secure Hypervisor (KSH), it is a type 2 virtualization solution, which uses KasperskyOS as a host operating system and provides extended set of security services and guaranties. KSH enables seamless integration of COTS products, like SCADA, available at the market, with the security hardening mechanisms implemented in KasperskyOS. Practical use cases include access control for HW peripherals, additional independent authentication procedures, control and authorization of guest user and SW operations in accordance with security policies, defined for the solution as a whole, secure boot, update and audit available out of the box and many others. It should be specially noted, that KSH makes possible to harden the solution with a strong, state of the art cryptography implemented at the level of KasperskyOS, and it does not require any modifications of guest software at all. Along with the mentioned above KSH provides easy to use and transparent way to implement Trusted Execution Environment (TEE) that is also a high demand feature. Currently Kaspersky Lab has successful experience in combining the KSH technology both with other company products like KICS, and with third-party solutions like PcVue SCADA from ARC Informatique.
Besides direct application to ICS solutions and products, KasperskyOS may be used to support ICS infrastructure in networking equipment - to secure communications, as well as Kaspersky Secure Hypervisor may be used for hardening of other ICS infrastructure components like DB servers.

The plans for the nearest future include extending the set of supported usage scenarios and further integration with Kaspersky Lab services and technologies, like Kaspersky Security Network (KSN), Kaspersky Security Center (KSC) and many others.

#### What is the current state of ICS security in the markets where Kaspersky is operating? Are the customers well aware of the threats? Do they have good protection in place?

Good question, to find an answer to that, besides all of our projects at our client's facilities, we conduct global researches, surveying people, analyzing data from our endpoints and networks sensors. We publish those reports regularly. Readers can find the latest version here [The State of Industrial Cybersecurity 2018](https://ics.kaspersky.com/the-state-of-industrial-cybersecurity-2018/) and here [Threat landscape for industrial automation systems: H1 2018](https://ics-cert.kaspersky.com/reports/2018/09/06/threat-landscape-for-industrial-automation-systems-h1-2018/). Some highlights from them are on the pictures below. Our practice with our clients mostly proves it

![alt text]({{ site.baseurl }}/assets/news/anton-shipulin/image-03.png)
![alt text]({{ site.baseurl }}/assets/news/anton-shipulin/image-04.png)

#### Will the attendees be able to test, test drive, hack or play with any of the devices and demos that you will have on display?
 
Absolutely, our equipment described above will be open for exploring and researching during the conference in the Lab for the attendees, and our Kaspersky Industrial Cybersecurity security solutions will be connected to the lab network to analyse process traffic and attacks and demonstrate security capabilities.

#### Kaspersky have launched an ICS CERT. How long have it existed, what are the objectives with that, and is it working on any interesting projects?
 
Kaspersky Lab ICS CERT is a research and awareness project launched by Kaspersky Lab at the end of 2016. The main objectives are to share KL expert knowledge on cyber threats affecting industrial organizations, to continuously identify major cybersecurity weaknesses and bottlenecks in ICS products and technologies and to coordinate community efforts to eliminate them. 
Since the launch of the project, KL ICS CERT experts have found and reported more than 165 0-day Vulnerabilities in various ICS, IoT, Automotive vendors’ products, and technologies wide-spread in the industry, some affecting hundreds of products on the market. KL ICS CERT researchers keep their eye on cyberattack campaigns, targeting industrial organizations in various countries all over the globe, notifying subscribers of the threat discovered.  Security analysts are working with various international regulation bodies to bring Kaspersky Lab threat landscape knowledge and security expertise for the benefit of the new standards and recommendations being developed. KL ICS CERT experts provide awareness trainings for OT personnel and extensive deep dive expert-level exercises for IT security specialists as their way to share KL expertise and knowledge on how to make industrial enterprises more secure.
 
#### What do you see as the biggest challenges in the ICS security area?

There are lots of challenges we all know due to increasing connectivity everything to everything and amounts of data in the industrial systems, as result people have to process lots of information simultaneously. But people are not perfect at big (including security) data processing, they fail every time due to violations, mistakes, fatigue, losing vigilance. Therefore I see a lack of maturity and automation cybersecurity processes as the biggest problem in the ICS security. That is what we all should work on!

 
#### What are you looking forward to with this years CS3sthlm?

Showcase and share our expertise, meet and discuss with world class experts, learn new stuff and get new ideas, learn how to make great ICS security conference to use it to make our Kaspersky ICS security conference better!
 
#### What would be you advice to our readers and attendees?

Never stop learning, stay open-minded, strengthen the global ICS security community with your expertise! Keep [ or start ] attending the great CS4STHLM event, and do come to meet our Kaspersky Industrial CyberSecurity team all over the conference!
 
Follow us
Kaspersky ICS Team: [@KasperskyICS](https://twitter.com/KasperskyICS)
Anton Shipulin: [@Shipulin_Anton](https://twitter.com/shipulin_anton)

