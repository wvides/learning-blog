---
title: "AI Foundations, Part 2: Context Windows"
description: "What context windows are, why they matter, and how they shape the way we interact with and build on top of large language models."
summary: "Understanding the memory limits of LLMs and why context windows change everything."
pubDate: "2026-03-01"
tags:
  - ai
  - ai-agents
heroLayout: "wide"
draft: false
---

After writing about tokens in Part 1, context windows felt like the natural next step. Tokens are the units, but the context window is what determines how many of those units a model can work with at once. Once I understood this, a lot of things about LLM behavior started to click.

In this post I'll cover what a context window is, why its size matters, and what happens when you hit its limits. I won't get into the technical details of attention mechanisms or memory architectures — that's a deeper topic for another time.

## What is a context window?

A context window is the total number of tokens an LLM can process in a single interaction. That includes everything: the system prompt, the conversation history, your latest message, and the model's response. All of it has to fit inside the window.

Think of it like a desk. You can only spread out so many papers before things start falling off the edges. The context window is the size of that desk. A bigger desk means you can have more documents in front of you at the same time. A smaller one means you need to be selective about what stays.

## Why the size matters

Different models have different context window sizes, and the differences are significant:

- Early GPT-3 models had a context window of around `4,096` tokens
- GPT-4 initially offered `8,192` and `32,768` token variants
- Claude and newer models now support `100,000` to `200,000` tokens
- Some recent models push past `1,000,000` tokens

To put that in perspective, `4,096` tokens is roughly 3,000 words — about 6 pages of text. `200,000` tokens is closer to a full novel. That's a massive difference in how much information a model can consider at once.

This directly affects what you can do. With a small context window, you might only fit a short conversation. With a large one, you can feed in an entire codebase, a long document, or hours of conversation history.

## What happens when you exceed it

Here's something I initially didn't think about: the context window is a hard limit. When the combined input and output tokens exceed it, the model can't just "remember harder." Older parts of the conversation get dropped.

This means that in a long conversation, the model might forget what you told it 20 messages ago. It's not being careless — it literally doesn't have access to that information anymore because it fell outside the window.

This is why you sometimes see an LLM contradict itself in a long chat, or ask you something you already answered. It's not a bug in the usual sense. It's a consequence of the context window being full and earlier context being truncated.

## How this shapes real usage

Understanding context windows changed how I think about a few things:

- **Prompt design matters.** If your system prompt is 2,000 tokens long and your context window is 4,096, you've already used almost half your space before the conversation even starts.
- **Conversation management is a real concern.** Applications that use LLMs need strategies for what to keep and what to drop as conversations grow. Some summarize older messages, others use sliding windows.
- **RAG exists partly because of this.** Retrieval-Augmented Generation (which I'll cover in a future post) is one answer to the problem of needing more information than fits in the window. Instead of stuffing everything in, you retrieve only the relevant pieces.
- **Cost is tied to tokens.** Most API pricing is per-token. A larger context window means potentially more tokens per request, which means higher costs. There's a real tradeoff between context richness and expense.

## The "lost in the middle" problem

One thing I found surprising: even when information fits inside the context window, models don't treat all positions equally. Research has shown that LLMs tend to pay more attention to the beginning and end of the context, and can miss or underweight information buried in the middle.

This is sometimes called the "lost in the middle" effect. It means that just fitting everything into the window isn't enough — where you place important information can affect how well the model uses it. Putting key instructions at the start or end of a prompt tends to work better than hiding them in a long middle section.

## Wrapping up

Context windows define the working memory of an LLM. They set the boundary for how much a model can see, reason about, and respond to in a single pass. Understanding this has been helpful for me both as a user of these tools and as someone learning to build on top of them.

Next, I want to dig into RAG — the pattern that helps work around context window limits by pulling in the right information at the right time.

Cheers!
