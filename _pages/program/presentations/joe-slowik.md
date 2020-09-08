---
title: So You Want to Take Down the Electric Grid - or You Want to Defend It
permalink: "/program/presentations/joe-slowik/"
layout: presentation
speaker:
- name: Joe Slowik
  role: Adversary Hunter
  work: Dragos
  image: joe-slowik
id: presentation
published: true
---

Media hype concerning attacks on ""the grid"" abound - but just what would be necessary to achieve an at-scale disruption of electric utility operations in Europe or North America? This presentation will explore this issue focusing first on events that actually brought grid operations to their knees: the 2003 Italian/Swiss, US/Canada, and Denmark/Sweden blackouts; and the 2006 European blackout event. Based on these events (which were not cyber in origin), we will explore grid resiliency and how interconnections, inter-dependencies, and N-1 (sometimes also phrased as N+1) resiliency come into play for maintaining power operations.

Based on this discussion, we will then explore how a sufficiently patient, motivated, and resourceful attacker could either produce or take advantage of conditions to actually create large-scale outage events. The focus here is not on relatively short, geographically limited disruptions in service (such as 2015 and 2016 Ukraine), but rather potentially long-term or physically disruptive (or destructive events) across large regions. To explore this, we will discuss chaining cyber impacts with environmental or operational variability, and how potential attackers could utilize manufactured grid-level disturbances to produce negative outcomes. Specifically, this discussion will look at two frequency deviation events (one in Europe, one in the United States) in 2019 as actual examples of conditions that could be leveraged to achieve wider disruption.


Finally, this presentation will conclude with what actions asset owners, operators, and defenders can take to either detect or mitigate such events. First and foremost - greater visibility into operations and communications is necessary to both identify potential attackers as they move toward their objectives and what operational changes or alterations might take place when attackers initiate effects. However, this comes with an important caveat: in systems such as electric utility operations, no provider - from the municipal distribution authority through the multinational utility operator - is isolated and alone. Thus, truly identifying grid-scale attack attempts requires greater, faster communication and coordination among all stakeholders involved in an operational area. While truly grid-scale events induced via cyber remain theoretical at this time, adversaries are investing in the capabilities necessary to make such effects possible. Defenders will only be able to counter such moves through a combination of enhanced visibility, improved reaction time, and sharing information as quickly as possible with partner organizations.


Outline:

What constitutes an “electric grid attack” via cyber?

Deny, degrade, disrupt, destroy.

Noticeable, tangible impact on the generation, transmission, or distribution of electric power.

Only known examples to date: 2015 and 2016 Ukraine events.

Media reporting and popular conception over-inflates idea of “attack”:

Russian-linked intrusions into European and US electric utilities.

DPRK-linked intrusions in the US and India.

Lookback phishing campaign in the US.

All are concerning, all may lead to a future attack - but none are at this level yet.

What does it take to actually “take down” an electric grid?

Note: impacting a single site is easy - system-wide effects are not.

Induce stress or identify periods where N+1 reliability is eliminated.

Time attacks/disturbances to coincide with stress or lost reliability/resiliency.

Overall grid stress enables impact to propagate across assets leading to greater impacts.

This type of effect has been seen, but in the form of natural/accidental disturbances:

2003 US Northeast Blackout

2003 Italian/Swiss Blackout

2003 Denmark/Sweden Blackout

2006 EU Power Event

What we observe in all of these events:

Stressed grid position to start (maintenance, high demand, adverse weather).

Single event introduces additional stress beyond grid resiliency.

Equipment and sites work to “self-protect” resulting in cascading effects across wide regions.

So - how do you deliberately take down the electric grid?

If you are patient and flexible in timing, wait for bad things to happen and take advantage of them.

Storms, high demand, unexpected downtime/maintenance all can significantly reduce N-1 reliability.

Once exogenous conditions remove resiliency, attackers can strike to create potential cascading effects.

A denial of service or removal from service now has significant consequences, such that past events that resiliency could compensate for are now quite serious:

Metcalf substation physical attack.

2015/2016 Ukraine events.

If on a deadline or need to act at a specific time, things get more complex.

Pre-positioning and capability development in advance are necessary.

However, opportunities exist for inducing grid-wide instability with interesting consequences.

Example: 2019 frequency disturbances in EU and US (neither of which has been explained as of this writing)

Inducing frequency swings at even a single generating site within an interconnect introduces instability the ‘grid’ needs to react to - if capabilities are already implanted at protective relays or similar systems at other locations, this instability can propagate to begin causing grid-wide disturbances.

How does one defend ‘the grid’ in these situations?

First: no site is an ‘island’, or we’re all in this together.

Recognizing interdependencies is critical to understanding the potential problem set.

Interdependencies are both lateral (other utilities) and upstream/downstream (e.g., increasing use of gas in North America means pipeline disruptions could cause significant generation outages quite quickly).

Second, after recognizing interdependencies and the resulting potential attack paths, begin to formulate potential plans for communication and coordination.

The small municipal power plant may be irrelevant in the “big picture”, but by virtue of being hooked up to the wider grid can still serve as an injection point for instability or disruption.

Identify mechanisms to share relevant operational and security information quickly and between the proper parties.

Third, such relationships and communication paths must be formalized and potentially built into dedicated systems for monitoring, defense, and alerting.

ISACs and similar entities provide a very early stage for this sort of development.

More mature is the US example of the joint government/utility/security vendor Neighborhood Keeper project."
