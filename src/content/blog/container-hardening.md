---
title: "Container hardening checklist I now use by default"
description: "Practical defaults for reducing attack surface in day-to-day container builds."
summary: "A short baseline checklist for safer container images without slowing delivery."
pubDate: "2026-02-10"
updatedDate: "2026-02-14"
tags:
  - security
  - docker
  - sre
draft: false
---

I used to harden images only on critical services. That approach was inconsistent and caused drift.

Now I start with a single baseline:

- Pin base image tags to immutable digests.
- Drop root whenever possible.
- Keep runtime images minimal and avoid build tools in final layers.
- Remove package manager caches and shell tools that are not required at runtime.
- Add a health endpoint and fail fast on broken startup.

This has reduced noisy scanner findings and made incident reviews easier because the baseline is predictable.
