---
title: How we reverse-engineered multiple industrial radio remote-control systems
permalink: "/program/presentations/stephen-hilt/"
layout: presentation
speaker:
- name: Stephen Hilt
  role: Senior Threat Researcher
  work: Trend Micro
  image: stephen-hilt
id: presentation
published: true
---

In 2018 we disclosed a total of 10 vulnerabilities to 7 independent industrial radio remote-control vendors. Our findings boil down to being able to control any equipment connected via these type of radio remote-control systems. So far, we focused our reports and speaking engagements on reaching out to as many people as possible, to increase awareness about the problem. At this time, we want to share stories about how we were able to perform the research and achieve the results with a globally dispersed team looking at global radio vendors.

This talk will focus on the "backstage" of this research, that is:
* how we started it and why we selected this class of systems
* how we selected the vendors out from our extensive market search
* how are these systems built, and how we figured this out
* for two systems in details, we will describe
	* how to approach them from a reverse-engineering standpoint
	* how to interpret their RF protocol
	* what tools are needed for an in-depth reverse engineering
	* why we needed to come up with our own tools for certain corner cases (e.g., tricky modulation schemes)
* how the disclosure process went
	* what challenges we found along the way
	* what were the vendors' responses (Vendors will not be called out for bad responses by name)
	* what is the status of the vulnerabilities now – lookout on future research trends in this space

While the project was a success the road to get there, was very bumpy due to things that all researchers face. We will also discuss how we overcame some of the obstacles, such as identifying the chips, micro soldering with non-professional equipment, reversing unreliable radio signals caught over the air.

#### Target audience
Technical, with the understanding of embedded systems and sub-GHz radio communication.