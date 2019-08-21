---
title: Layered Blueprints – an ontology and method for (talking about) engineering OT Security
permalink: "/program/presentations/sarah-fluchs/"
layout: presentation
speaker:
- name: Sarah Fluchs
  role: Security Consultant
  work: admeritia GmbH
  image: sarah-fluchs
id: presentation
published: true
---

The session will propose an OT security engineering thought model which empowers automation engineers to take responsibility for their own systems’ security in a technically sound, systematic, and pragmatic way.

The thought model consists of four layers: The function layer includes analyzing and use case-based modelling of functional requirements an OT network and its elements need to fulfill. Proper operation of these use cases is taken as security objective. The risk layer takes the identified use cases and for derivation and evaluation of “abuse cases” forming threat scenarios. The third layer is about identifying security requirements, which are state of the art, compliant with necessary standards, and taking into account the organization’s existing processes. The uppermost layer deals with implementing these systematically derived security requirements.

Taking into account that in plant engineering and operation security requirements are never in focus, but always need to be wrapped around plant functionality and plant operators’ busy workdays, security engineering desperately needs to be efficient.

Also, when security by design is to be taken seriously, security engineering must be integrated in the existing plant engineering process, making use of tools and data formats engineers use anyway.

For these reasons, the presentation does not stop at introducing the thought model but shows how this thought model can be transferred into a machine-readable representation – a data model. The data model is not meant to take decisions away from automation engineers by boasting AI capabilities, but is designed to facilitate a more informed, smoother security engineering process.

The data model poses two advantages within the security engineering process:

First, it simplifies creating and visualizing network models and use cases, which serve as input for the outlined security engineering process.

Second, it sets the basis for (partly) automating the implementation of security solutions, by defining security characteristics of modelled entities which may result from the security engineering process. This also includes the opportunity to make configuration management “security-sensitive” by adding information like security requirements a certain configuration fulfills and risks a certain configuration mitigates.

The presentation outlines how existing tools may assist during the security engineering process: Asset discovery and inventory tools can provide the basis for network and use case modelling. Configuration management tools may help to roll out and maintain security-relevant configurations.

Still, many plant operators, integrators, and vendors are understandably reluctant to become dependable on such rather expensive tools.

Therefore, the presented data model aims at making use of efficiency gains that existing network inventory and configuration management tools promise without becoming too dependable on a certain tool vendor’s product. In order to achieve that, it makes use of well-established, non-proprietary description languages and data formats like AutomationML, OWL, and OPC UA. Thus, the proposed data model may serve as an open interface between existing, proprietary asset inventory and configuration management tools and the security engineering process.