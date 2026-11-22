---
title: "Code Is a Commodity Now. Your Business Isn't."
date: 2026-06-29
---

AI is changing one big thing about software: it's pushing the marginal cost of building it toward zero. Foundation models write working code. Open source covers most of the plumbing. Code-gen tools turn a prompt into a feature in minutes. The result is simple to state and hard to overstate: building software is no longer the hard, expensive, defensible thing it used to be.

A few years ago, building an app like Swiggy or Zomato took hundreds of engineers and years of work. That difficulty *was* the advantage. High build cost acted as a moat. If you had the app, you were ahead, because almost no one else could ship one.

That barrier is collapsing. Today one person with the right tools can ship something that looks and works almost as well. So the hard part is no longer building the product. The hard part is everything around it.

## This has happened before

When a layer of the stack gets cheap, value does not disappear. It moves. This is one of the most reliable patterns in tech.

When PC hardware got commoditized, the money moved up to the operating system and software. When cloud made servers cheap and rentable, the advantage moved to the products built on top, and to whoever ran them best. When open source made databases and web servers free, value moved to managed services, distribution, and operations: not the code, but the running of it.

AI is the next turn of this wheel, and it is turning faster than the last ones. The layer being commoditized this time is application code itself. So the value is moving to the layer above the code: the business around it.

If you remember nothing else, remember this. Cheap code does not destroy value. It relocates it.

## Two grocery shops

Picture two grocery shops on the same street. Same products, same prices.

Which one do people go back to?

Not the one that simply "has groceries," because both do. People go back to the shop where the owner is friendly, the shelves are always stocked, the discounts are a little better, checkout is fast, and if something breaks, it gets fixed without a fight.

The products are identical. The *experience* is not. Experience is what builds trust, and trust is what drives retention: customers choosing you again and again.

AI is doing the same thing to software. Once everyone can ship the same features, feature parity becomes the baseline, not the edge. What you build *around* the product starts to matter more than the product.

## A quick what-if

Imagine that 20 years ago, opening a modern supermarket was hard. You needed billing systems, inventory software, suppliers, warehouses, and real expertise. The barrier to entry was high, so just *having* a modern store put you ahead.

Now imagine a company hands everyone a full supermarket setup, for free. Overnight, the barrier to entry drops to near zero. Anyone can open a store that looks just as modern, running the same stack.

What happens? The technology stops being the advantage, because everyone has it. The winner is now whoever *operates* better: better stocked, sharper pricing, faster checkout, problems handled properly.

The advantage shifts from *owning* the shop to *running* it well.

## So is SaaS dead?

No. But the old way of building SaaS is.

The old playbook was simple: ship enough good features and you'd win, because those features took years of engineering competitors couldn't match. The features were the moat.

AI just collapsed that moat. Features are now cheap to replicate. Something you spend three months building can be cloned in a weekend. Defensibility from features alone is over.

The companies that already understood this were winning before AI, and they will win harder now. Salesforce did not beat other CRMs by having the best features. It won on distribution, ecosystem, and lock-in. Stripe did not win payments on novel technology. It won on developer experience, documentation, and trust. Notion is not the only note app. It won on design, community, and brand. In India, dozens of teams could build a food-delivery app, but Swiggy and Zomato won on operations, supply chain, and delivery networks that take years to build and cannot be cloned in a weekend. Dozens of apps could process a UPI payment, but PhonePe and Google Pay won on distribution and habit.

In every one of these cases, the software was copyable. The business was not.

## Where the new moats are

If features are no longer the moat, what is? These are the parts AI cannot copy for you, with how each one actually works.

**Distribution.** Building the product is now easy. Getting it in front of the right users is the hard, valuable part. The team that owns a channel, an audience, a sales motion, or a partner network has something a competitor cannot generate with a prompt. In a world of infinite supply, distribution is the scarce resource.

**Trust and brand.** When ten products do the same thing, people pick the one they believe will not let them down, will keep their data safe, and will still exist next year. Trust is slow to build and fast to lose, which is exactly why it is defensible. A model can clone your features overnight. It cannot clone your reputation.

**Data and feedback loops.** Every real customer interaction teaches you something a competitor starting today does not know: which workflows matter, where users get stuck, what they actually pay for. Feed that back into the product fast enough and you compound. This is the one moat AI makes *stronger*, because the team with the tightest build, measure, learn loop now ships improvements faster than ever.

**Switching costs and workflow fit.** Software that is woven into how a customer operates, their data, their integrations, their daily habits, is painful to rip out even when a cheaper clone appears. The deeper you sit in the workflow, the higher the cost of leaving.

**Speed of execution.** When everyone has the same tools, the edge goes to whoever learns and ships fastest. Not the smartest one-time idea, but the team that runs the loop again and again without losing the thread.

**Community.** A base of users who help each other, create content, and pull new users in is a flywheel a feature list cannot buy. Communities compound, and they do not transfer to a competitor.

## But sometimes code is still a moat

It would be dishonest to say software is never an advantage anymore. There are places where it still is, and they are worth knowing so you can tell the difference.

Code is still a moat when it sits on genuinely hard problems: deep research, novel algorithms, systems that work at extreme scale or low latency, the foundation models themselves. It is a moat when it is backed by proprietary data that competitors cannot get. It is a moat in regulated domains, where compliance, certifications, and approvals are the real barrier and the code is the easy part. And it is a moat where network effects make the product better with every user, so a clone with no users is not actually a clone.

The honest test is this. Can a small, capable team reproduce the core of what you do in a weekend with today's tools? If yes, the code is a commodity and your real moat is elsewhere. If no, ask why not, because that answer is your moat.

## From features to outcomes

Here is the mindset shift under all of this. The old question was "what features can we add." The new question is "what outcome can we reliably deliver."

Customers never wanted software. They wanted the result the software produces: the meal delivered, the payment cleared, the report written, the problem solved. Features were just the means. When the means becomes free, the teams that win are the ones obsessed with the outcome, who use AI as a tool to get the customer to the result faster and more reliably, not as a label to slap on a feature.

"We added AI" is not a strategy. "We get you the outcome better than anyone" is.

## What to do if you're building now

Concretely, if you are starting something today:

-   Pick your distribution before you pick your features. Know how the first thousand users will find you.
-   Go narrow. Own one specific, valuable outcome completely instead of competing on a broad feature list.
-   Instrument retention from day one. Building is cheap now, so the real signal is whether people come back.
-   Get into a real workflow fast, then make yourself hard to remove.
-   Treat every customer interaction as data, and close the feedback loop quickly.
-   Build trust deliberately. Be reliable, be transparent, and be around next year.

## Signs it's already happening

A few indicators that this shift is live, not theoretical:

-   Solo developers are shipping production apps that used to need whole engineering teams.
-   Feature parity that took years now takes weeks.
-   The hard, paid problems have moved from "can you build it" to "can anyone find it, trust it, and stick with it."
-   Investors increasingly fund the distribution and the wedge, not the feature list, because they know the feature list is now copyable.

Outro: AI made the *shop* free. It did not make *running the shop* free. Build cost is no longer the moat. Distribution, trust, retention, workflow fit, speed, and community are. The companies that win from here won't have the most features. They'll have the customers competitors can't pull away. So build the business. The software is just table stakes now.

Signing out - Devansh
