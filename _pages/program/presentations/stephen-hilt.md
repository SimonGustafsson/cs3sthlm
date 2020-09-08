---
title: "Fake Company, Fake Factory but Real Attacks: Stories of a Realistic, High Interaction ICS Honeypot."
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

Deploying honeypots or other deception technology to attract attackers is the to-go approach to discover unknown threats or simply to assess the threat level against a specific target. Over the years, however, attackers have grown accustomed to the presence of honeypots and learned how to get around them. We decided to make one of the most realistic ones created to date, it was so real – it was mistakenly identified as a real production environment by other security researchers!

In this talk we will see how, over the course of a few months, we designed, setup, and built a factory honeypot that was so real that we could have started making products with it. We went as far as creating a fake company including online presence, with a website featuring employee profiles and pictures, phone numbers with auto-responding prompts with extension numbers, postal addresses, etc. Also, we went beyond recording network and host attack traces: We wanted to be able to see the attacker actions as they were happening on the screen, so we created a system to record screencast on demand, when activity is detected on the host.

By attending this talk, you will learn what kind of attacks we’ve recorded, ranging from the initial reconnaissance scans, interactions, frauds, and ransomware infection. Finally, the session will wrap up with some recommendations based on the findings from building and running this honeypot.
