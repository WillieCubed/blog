---
title: Clark, We Have a Problem
date: 2019-07-22
tags: ['machine-learning', 'project-update', 'autovlog', 'research', 'kaggle']
canonical_url: false
description: >
  Well, I'm having trouble scaling down my original goal for AutoVlog, an
  end-to-end solution for automatic video editing.
public: true
---

**July 22, 2019, 2:39 PM CDT**

What am I doing today? Well, I'm currently waiting for a convolutional neural
network to train on [Google Colaboratory](https://colab.research.google.com).
At this point, I'm pretty sure the TPU accelerated option is actually slower
than the standard GPU accelerated one, but I don't know why.

In other news, I'm considering (read: am going to) participate in the
[3rd YouTube-8M Video Understanding Challenge](https://www.kaggle.com/c/youtube8m-2019/overview/getting-started).
I think the competition (read: its potential for a $2,500 prize) would motivate
me to learn even quicker about various image recognition techniques. Heck,
I could pay for college (well, some of that) with the prize money.

Oh yes, something about a problem. Well, I'm having trouble scaling down my
original goal for [AutoVlog](https://williecubed.github.io/autovlog-app), an
end-to-end solution for automatic video editing. That's why I am particularly
interested in the YouTube-8M Kaggle challenge: it's a useful dataset with which
I could still do something somewhat novel in the span of a week but could
still turn into a more project that's tangentally related to AutoVlog, perhaps
with transfer learning (with video?) or something else.

ML researchers use common datasets and metrics all the time to compare their
methods of solving a problem. Maybe I should start there instead of coming up
with something completely novel on the first try. Heck, maybe I'll get
recognized by a professor at my own institution or by someone associated with the
[International Conference on Computer Vision](http://iccv2019.thecvf.com/) for
my efforts. in any case, I could really use a CS-related lab in which to work in
the spring, and anything to show for the poster symposium next Friday is better
than nothing.

A more reasonable version of myself would have left more time for the poster
that I'll have to make for this project, but I can put together fairly
exemplary presentation materials given I actually have content to present.

I just don't have any content to present (yet).

After bouncing from [research paper](http://openaccess.thecvf.com/content_CVPR_2019/papers/Fan_Heterogeneous_Memory_Enhanced_Multimodal_Attention_Model_for_Video_Question_Answering_CVPR_2019_paper.pdf)
to [research paper](http://openaccess.thecvf.com/content_CVPR_2019/papers/Wang_Learning_Unsupervised_Video_Object_Segmentation_Through_Visual_Attention_CVPR_2019_paper.pdf),
I still haven't learned much because my mind just can't focus. Granted, a
large part of that was (and still is) the environment in which I place myself,
but I've learned the hard way that research takes time and that I am still a
lowly college freshman (pre-freshman, at that) who wants to change the world
but still doesn't know how to implement a convolutional neural network
from scratch.

Yes, it's incredibly irresponsible of me to be actually starting a project this
late, and I sort of wish the summer research program just told me what project
I was supposed to so I could work within some clearly-defined constraints, but
in academia, and real life for that matter, one has to be self-guided and know
which direction to continue after each step.

In other words, one has to be able to perform backpropagation for himself.

I wish there was some other way for me to break into research without having to
go from zero to ten. It's not like I could clean test tubes like a biochemistry
major (please don't hurt me, I know some of you) and slowly rise through the
ranks until I'm poking at lab rats' vagus nerves to see if they defecate
themselves. With CS, it's more like:

```
Gupta: Could you implement the model proposed by this research paper from scratch
by the end of the week? 
Ivor: What's the model?
Gupta: It's just [GPT-2](https://openai.com/blog/better-language-models/).
Supposedly, it can generate news articles so human like that its researchers
aren't releasing a trained model for it.
Ivor: Give me two days and a gallon of coffee.
```

There's just so much prerequisite knowledge I have to learn before I can create
something genuinely new. If I am to get anywhere in research, I have to be
willing to ask the right questions at the right time to guide myself.

Likewise, I likely didn't give myself enough constraints with AutoVlog. This is
a classic example of feature creep: I went from a simple task - clustering clips
based upon adjacent frames - to a gargantuan list of features - clustering
related clips, video content search, among other things - all within the scope
of three days, and look where I am now.

I should have just stopped myself right at developing one model to do one thing.

In my opinion, creativity comes not necessarily from freedom, but from
restriction. Creativity arises from freedom in a box because there's structure
off which to build.

Right now, my box is less than a week of time and something related to using
video data in a machine learning algorithm.

Okay, enough rambling. Back to work. I need to actually choose and flesh out a
project idea by the end of the hour (now it's 3:19 PM) and come up with a model
architecture by the end of the day (before 9:00 PM).

I'll be painfully slugging along, but thanks for listening.