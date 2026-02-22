---
title: "AI Foundations, Part 1: Tokens"
description: "Sharing a little on my journey to learn more about how modern AI systems and agents are built and how they work"
summary: "Sharing a little on my journey to learn more about how modern AI systems and agents are built and how they work"
pubDate: "2026-02-22"
updatedDate: "2026-02-22"
tags:
  - ai
  - ai-agents
draft: false
heroImage: "/images/og-post.jpg"
---

In the past few days I have been diving into the world of AI and I have to say that I am fascinated by what I have learned so far. I have spent only a few hours on these topics and I already found areas I find very interesting and will be digging deeper in the next few days/weeks.

There are so many concepts everyone talks about in the era of modern AI, but I guess many like me just assume we understand what they mean, or they seem to be clear enough. Once I dug a little deeper, I realized there is much more. In some cases, I had misunderstandings of what these concepts really are.

Some of the topics I learned about this weekend are the following:

- Tokens
- Context window
- RAG
- LLM architectures
- Agents

And just to be clear, this is what I spent a couple hours learning about. There is way more on the topic, and I'm planning to write about it as I learn more.


In this post, I will talk only about tokens.

Tokens are the smallest units of text that an AI model can understand and process. They can be words, parts of words, or even combinations of them.

Something you might notice when interacting with LLMs is that the number of tokens sent and received for the same phrase can vary depending on the model you are using. Each model tokenizes, or breaks, text and words in different ways. Let's use an example to understand this better.


For this example, we will assume one tokenization approach. This can be very different for each model/tokenizer; for example, the tokenizer for GPT-4 is different from the tokenizer for Claude, and so on.

So for the words, `"Hello, how is it going?"` an LLM could break it into tokens like this:

- `"Hello"` - 1 token
- `,` - 1 token
- `" how"` - 1 token
- `" is"` - 1 token
- `" it"` - 1 token
- `" going"` - 1 token
- `?` - 1 token

Which means that the sentence "Hello, how is it going?" is made up of 7 tokens. There are two things to note here.

- The comma and the question mark are their own tokens.
- Did you notice? The tokens `" how"`, `" is"`, `" it"`, and `" going"` include the space before the word. This is by design in many tokenizers and it helps the model understand a little bit of context. The word `" Hello"` is different from `"Hello"`: one is at the beginning of the sentence and the other is not. This is a piece of context that is useful for the LLM.


Each tokenizer for each model breaks words in different ways, for example, the word `antigravity` could be broken into `anti` and `gravity` or `anti` `grav` `ity` or `ant` `ig` `rav` `ity` depending on the tokenizer, or even `antigravity` as a single token.

LLMs break the text they receive into tokens before processing it, and they also break the text they generate into tokens as a response.

So that's it, this is a brief intro to tokens. I hope you enjoyed it and learned something new. I know I did. This topic is important because it lays the foundation for understanding context windows and RAG better.


Cheers!
