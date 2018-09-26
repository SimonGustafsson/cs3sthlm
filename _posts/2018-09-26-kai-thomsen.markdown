---
title: Kai Thomsen - Senior Incident Responder
date: 2018-09-26 04:00:00 Z
categories:
- blog
layout: blog
author: CS3STHLM Crew
pdf:
- 
published: true
permalink: /blog/kai-thomsen/
---

*This is a blog post with Kai Thomsen, a senior incident responder at AUDI AG.*

<h1 class="blog-title" itemprop="name headline">{{ page.title }}</h1>

#### What is your day job, where are you working and what do you do? 
I am a senior Incident Responder at AUDI AG. My office is in Ingolstadt at Audi’s headquarters, but takes me where ever we have to investigate. Currently we a building up a joint Enterprise/ICS/Car cyber defense team. This means learning about and integrating three sometimes very different mindsets. Quite a challenge, but I’m convinced that we won’t be very successful without these integrated teams. I also teach for SANS in the ICS curriculum. And since we are a small team, I get to teach all over the world, which is at the same time interesting and challenging considering all the different countries and cultures I get to teach in.

#### For how long have you worked in the field? 
Computers and hacking have been kind of my thing since I was thirteen. After university, in 2001, when I finally had to get a real job, I got started as a network admin tasked with passive security (firewalls, IDSses, etc.) and then moved on to what nowadays is called active defense, mainly Network Security Monitoring and Incident Response. When Stuxnet hit in 2010 and caused a lot of headache for us at the company I was working at back then I started to focus more on ICS security. 

#### You give classes as a technical trainer for ICS/SCADA security, do you see a lot of interest in these issues? 
I teach the "ICS Active Defense and Incident Response" course at SANS (ICS515). And we have definitely seen interest increasing in this and other ICS courses over the last year. When I look at the current threat landscape, this was absolutely necessary. We need a lot more knowledgable and capable active defenders to secure our critical infrastructures and industries.

#### Have you ever destroyed a car, or something physical, as part of what you do in your day work? 
Well, yes, but keep in mind, I am an incident responder, not I researcher so my main mantra especially in ICS/SCADA environments is to always put safety and reliability of operations first. But as probably anyone who as worked on many incidents I have my own stories to tell about devices and thus evidence I destroyed because of a stupid mistake I made.  With regard to what you are probably more interested in, do I crash vehicles with my mad cyber skills, that’s a) not how this works and b) the job of our dedicated Car/IT Security team.

#### What is the hype in relation to cyber security and vehicles? 
In my opinion the hype is in the way current research gets reported vs. what current threats against vehicles actually are. Most organized crime around vehicles is about stealing vehicles or spare parts. Of course this is not as sexy for a story than say hackers taking over autonomous vehicles. If you’d like to get my full view on this, come to my talk ;-)
What is the biggest challenges to automotive area with regards to security? I think the biggest challenge is software developers and automotive engineers understanding each other’s development processes and constraints. And learning to understand their different culture and language. Without these basics we’ll have a very hard time coping with the paradigm shifts currently happening in the automotive industry.

#### Is car theft the biggest risk, or do you see other aspects worse risks for vehicles & cyber security? 
As of now I’d say yes, definitely. As cars get more functionality that can be activated via software and we see an increase of managed vehicle fleets versus privately owned cars threats will probably diversify somewhat more. Criminals will always be where the most money can be made with the least risk, at least we can be sure of that ;-)

#### What is the least known aspects of cyber security in the automative industry? 
We have been at some aspects of this a lot longer than many folks in the cyber security community might think and this has to do with all the immobilizer technology put into cars over the past 10-15 years and criminals finding ways around that. Also most discussions around fixing security problems in vehicles with quick patches over the air often don’t reflect how much testing has to go into any change you make to anything safety related in a vehicle. Also, like most ICS systems, we should keep in mind that there are (and there probably should be some more) failsafes that cannot be overridden by software.

#### How will the creation of smart cities have an impact on smart cars, with regards to security? 
Absolutely. It’s the complexity of networks and the questions of trust all over again. But on a much larger scale than the Internet and with larger time constraints on both ways. By that I mean, your car and the traffic light you’re about to be at in 5 seconds won’t have the time to establish trust via something like a CRL. But also, that traffic light will be there for more than twenty years. And your car has a lifetime of about 10-15 years. Lots of interesting questions waiting for answers when it comes to smart cities…

#### In general, do you think that we will ever see things like NotPetya, ransomware infecting cars? 
I can certainly imagine wormable vulnerabilities in parts of vehicle infrastructure that heavily relies on software. EV charging infrastructure, I’m looking at you ;-) But I am still optimistic enough that we’ll finally start learning from mistakes in other fields and will succeed in implementing more resilient architectures in vehicles and smart traffic infrastructures.

#### What will be the biggest take away for the audience from your presentation at CS3sthlm? 
That although there are some hard questions waiting to be answered we do know the basics of how to do this right. These are not new and sexy things and they take some effort, but it’s certainly doable. Also, we are still very early on in this particular race. So there is still time to learn from other fields and do some things better. 