---
title: "Infrastructure Maturity Criteria"
description: "A maturity matrix I use to assess where infrastructure stands and where it needs to go, covering ten criteria across five maturity levels from IaC to security."
summary: "Ten criteria across five maturity levels to evaluate infrastructure health and plan improvements."
pubDate: "2026-03-04"
tags:
  - platform-engineering
draft: false
heroImage: "/images/og-post.jpg"
---

Over the years I have seen infrastructure in all states. From teams clicking around in a cloud console with no idea what is running where, to fully automated platforms where engineers ship with confidence and never touch production directly. At some point I started writing down the patterns I kept seeing, and that turned into a maturity matrix I now use to assess where things stand and where they need to go.

The matrix covers ten criteria organized in four groups, each evaluated across five maturity levels. Not every team needs to be at "Advanced" in every area. The goal is to understand where you are, identify the gaps that hurt the most, and build a roadmap that makes sense for your context.

## The five levels

**Early Stages** means things are manual, fragile, or simply missing. **Semi Mature** means the team has started adopting good practices but they are not yet consistent or widespread. **Mature** means the practices are solid, well-documented, and accessible to most engineers. **Advanced** means the organization has optimized, automated, and integrated these practices deeply into its workflows. **Infrastructure in the AI era** means AI agents and models are embedded in infrastructure workflows — generating, reviewing, and operating infrastructure with human oversight.

## Foundation: Infrastructure as Code and automation

Everything starts here. If you cannot recreate your infrastructure reliably, nothing else matters much. In the early stages teams create resources by hand through a web console or CLI. As they mature, `IaC` tools like `Terraform` or `Pulumi` take over and infrastructure becomes partially reproducible. At the mature level all infrastructure is managed by code and is easily replicable across environments.

The automation story follows a similar line. Early in companies, engineers run commands from their laptops. Then CI/CD pipelines take over. Eventually infrastructure changes happen through code and pull requests, and at the most advanced level the `IaC` is modularized, reusable, and includes tests and validations as part of its lifecycle.

## Knowledge and access: who can change what

One of the most overlooked areas is how infrastructure knowledge is distributed. In early stages only infrastructure engineers know what exists in the cloud providers, and details live in knowledge silos. As the organization matures, `IaC` makes the state visible, but only the infra team can interact with it. At the mature level all engineers know how to make infrastructure changes with sufficient documentation and safeguards. The end goal is a self-service system where engineers can release new applications without needing to understand every deployment detail.

Production access follows a related but distinct path. It starts with no restrictions at all, which is terrifying. Then access gets limited to a small group of infrastructure engineers and team leads. At the mature level a zero-trust remote access system (e.g., `Boundary`, `Teleport`) provides just-in-time production access with session recording and audit trails. At the advanced level access is fully integrated with identity providers, features granular `RBAC`, enforces time-limited grants, and maintains comprehensive audit logging.

## Runtime: scalability, resiliency, and releases

These areas describe how the system handles traffic, failure, and change. For scalability the early stage is painful: the system does not scale dynamically and databases cannot handle the increase of traffic and become bottlenecks. Then infrastructure can be scaled on demand but manually. At mature the infrastructure scales with workloads and traffic automatically. The advanced level adds predictive scaling.

Resiliency starts replication, in a single availability zone failure triggers downtime. But if you replicate across several availability zones, hitting downtimes becomes a rarity. Mature systems run on all availability units of the platform. Advanced means deploying across multiple platforms with load balancing or failover between them.

For CI/CD, early stages mean no formal strategy, manual releases, and no automated rollback. Semi mature introduces CI managed by the infra team or developers. At the mature level CD is widely adopted, practices like `GitOps` are part of the stack, and rolling back is easy and accessible. At the advanced level you have fully automated progressive delivery with observability-gated releases: deployments are promoted or rolled back based on `SLI` thresholds via `GitOps`.

## Visibility: observability, costs, and security

These are the "can you see what is happening?" areas. Observability starts with little or no visibility. Then monitoring, metrics, and logs are implemented along with pager integrations and on-call rotations. At mature you have traceability across the system, context-sensitive alerts with well-assessed severity levels. Advanced means `SLIs`, `SLOs`, and `SLAs` are implemented and embraced by the engineering organization, traceability correlates with logs and metrics, and notifications offer predictive behavior.

Cost visibility is often the last thing teams tackle. Early on there is no clear idea where the money is being spent. At semi mature, resources are tagged by team or service with basic cost reporting and spend visibility. At mature, cost optimization, budgets, and alerts per team or project are in place, and `FinOps` practices are adopted as part of the change process. At the advanced level every new infrastructure addition at the cloud provider level can give an estimate of how it will impact the budget.

Security starts with no isolation between environments, everything in a single account, and no secret management. Then environments are properly isolated and secrets management is in place but without granular access. At mature, granularity of access is well defined at all levels, from cloud provider to services like `Kubernetes` with `RBAC`, and secrets management includes well-defined access controls. Advanced means secret management is properly integrated with the services that require them and available with the right level of access to engineers.

## Infrastructure in the AI era (Imagining the future)

The fifth level reflects a shift that is already underway. AI is not just another tool in the stack — it changes the way infrastructure is written, operated, and reasoned about. `IaC` isn nowadays generated and refactored by AI agents. There is a lot being created in this direction at the moment, so the building blocks are there, but we are not yet in a maturity state and many tools will be created in the future. For now human oversight remains essential, but the shift into going more into AI for infrastructure topics is occurring before our eyes.

## The full matrix

Here is the complete matrix with all ten criteria across the five levels.

| Criteria | Early Stages | Semi Mature | Mature | Advanced | Infrastructure in the AI era |
|---|---|---|---|---|---|
| Recreation of infrastructure | Infrastructure is created and managed by hand through the web console or CLI | Infrastructure is partially managed with `IaC` and easy to reproduce | All infrastructure is managed by code and is easily replicable across environments | Cloud provider resources and other services are tracked by infrastructure as code | |
| Automation of infrastructure management | Infrastructure is created from local devices | Infrastructure is managed through CI/CD pipeline | Automation processes allow infrastructure engineers and software developers to perform infrastructure changes through code and pull requests | Infrastructure is modularized code that can be reused and includes tests and validations in its lifecycle | |
| Decentralization of infrastructure knowledge | Only infrastructure engineers know what exists in the cloud providers; details are distributed in knowledge silos | There is some `IaC` that represents the infrastructure but only infrastructure engineers can interact with it | All engineers can and know how to make infrastructure changes with sufficient documentation and safeguards | New applications are released with a self-service system; engineers don't need to know the internals of how everything is deployed | Engineers interact with infrastructure through AI agents and `MCP` servers that act as knowledge bases of the company's infrastructure |
| Workloads scalability | The system doesn't scale with workloads and traffic dynamically; databases cannot handle the increase of traffic and become bottlenecks | Infrastructure can be scaled on demand but is not an automatic process | Infrastructure scales with the workloads and traffic | The system scales in a predictive way | |
| Observability | There is little or no visibility on what happens within the systems | Monitoring is in place with at least metrics and logs implemented; pagers are integrated with on-call rotations well defined | Traceability is implemented and available through all the system; notifications and alerts are context-sensitive with well-assessed severity | `SLIs`, `SLOs`, and `SLAs` are implemented and embraced; traceability correlates with logs and metrics; notifications offer predictive behavior | Engineers query and correlate observability data through AI agents; tools like the `Datadog` `MCP` server enable natural language access to metrics, logs, and traces |
| Production access management | Production access is not restricted at any level | Production access is only available to a small group of infrastructure engineers and team leads | A zero-trust remote access system (e.g., `Boundary`, `Teleport`) provides just-in-time access with session recording and audit trails | Access is fully integrated with identity providers, features granular `RBAC`, enforces time-limited grants, and maintains comprehensive audit logging | |
| Resiliency | Infrastructure runs without replication; a single availability unit failure triggers downtime; services cannot be easily updated during working hours | Infrastructure runs in replication on several availability units; services can be deployed with no downtime | Infrastructure runs on all availability units of the platform; services can be released with advanced strategies such as canary | Infrastructure is deployed across several platforms with load balancing or failover; releases rely on observability tools as criteria to keep or rollback | |
| Costs of infrastructure | There is no clear differentiator or idea where the money is being spent | Resources are tagged by team or service with basic cost reporting and spend visibility | Cost optimization, budgets, and alerts per team or project; `FinOps` practices adopted as part of the change process | Every new infrastructure addition at the cloud provider level can give an estimate of how it will impact the budget | |
| Security | No isolation of environments; all environments co-exist in a single account; no secret management in place | Isolation between environments is properly managed; secrets management is in place but without granular access | Granularity of access is well defined at all levels from cloud provider to `Kubernetes` with `RBAC`; secrets management has well-defined granularity | Secret management is well defined and properly integrated with services that require them; available with the right level of access to engineers | AI models like `Claude` are used to review `IAM` policies, scan infrastructure configurations, and identify security risks; security analysis becomes conversational and accessible to all engineers |
| CI/CD | No formal CI/CD strategy; releases are done manually with no automated rollback | CI is implemented but managed only by the infrastructure team or by developers | CD is widely implemented; easy to trace what changes were deployed when; `GitOps` is part of the stack; rolling back is easy and accessible | Fully automated progressive delivery with observability-gated releases; deployments promoted or rolled back based on `SLI` thresholds via `GitOps` | |

## How I use this

I don't use this matrix as a checklist to max out every area. Instead, it's a conversation tool. When I join a new team or start an infrastructure review, I walk through these areas with the engineers and leads to understand where we stand. That gives us a shared picture of the current state and makes it much easier to prioritize. Sometimes "Semi Mature" in a given area is perfectly fine for the stage the company is in, and the investment is better spent elsewhere.

The real value is in identifying the gaps that are actively causing pain and turning those into a roadmap with clear milestones.

Cheers!
