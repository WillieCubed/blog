<template>
  <Layout>
    <div class="container">
      <div class="centered-container">
        <h1>About Me</h1>
        <p>
          TL;DR: I am a computer science undergraduate student who desperately
          wants to do reserch in artificial intelligence, particularly in the
          fields of neuro-symbolic reasoning and multimodal learning. 
        </p>
        <h2>Why I Build</h2>
        <p>
          Debugging code and chuckling at errors have amused me since sophomore
          year of high school and might have been doing so for longer. (Thanks
          Codecademy.)
        </p>
        <p>
          Google holds ultimate responsibility for piquing my interest in the
          field. From a very early age, I understood just how my generation
          would be the first . A friend introduced me to Google products, and
          then Android. This would later convince me that yes, I, some random
          middle-class kid growing up in North Las Vegas (then Converse, Texas)
          that I, as cliche as this sounds, could have a meaningful impact on
          those around me (but notice how I didn't say change the world).
        </p>
        <p>
          Some time in high school (likely sophomore year), I started building
          Android apps. Funnily enough, my first attempt involved the creation
          of a personality-filled AI chatbot that could make me feel less
          isolated as an angsty teenager. Much to my chagrin, my project did not
          progress further than a few ImageViews and TextViews put into a
          RelativeLayout, but I understood one thing: I wanted more.
        </p>
        <p>
          In essence, the question isn't why I program; the question is why I
          build in the first place despite all the setbacks and feelings of
          inadequacy it may bring.
        </p>
        <p>The answer:</p>
        <p>Because helping people with code is fun. </p>
        <p>
          I get the most satisfaction out of building projects I know could have
          a meaningful impact on my and others' lives, even if I never finish
          them in the first place. I'm more of an idealist than I care to admit,
          but there's nothing a little bit of cold, hard code can't fix.
        </p>
        <p>
          With each new skill I learn, whether it's knowing how to use a
          specific feature in the Android SDK or some useful but bloated web
          framework, I possess another tool in my proverbial toolbox of knowledge.
        </p>
        <p>
          So that's why I build: to help myself help others, all while laughing
          at myself for misplacing a semicolon. 
        </p>
        <h2>What I Do</h2>
        <p>
          Firstly, I am a student at <a href="https://utdallas.edu">The
          University of Texas at Dallas</a> studying computer science.
        </p>
        <p>
          At UTD, I am a research assistant at the <a href="https://utdallas.edu/cei/">
          Center for Engineering Innovation</a> working on the 
          <a href="https://www.polycraftworld.com/">Polycraft World</a> team as
          part of SAIL-ON, a DARPA-funded grant for research for open-world
          novelty. Specifically, Polycraft World is now being used as a platform
          for RL research but as an environment that constantly creates new
          scenarios from which an agent can learn in contrast to more standard
          RL environements that use hardcoded
        </p>
        <p>
          I am a technical coordinator on the <a href="https://hackutd.co">HackUTD</a>
          team, a division of the student chapter of the Association for
          Computing Machinery <a href="https://acmutd.co">(ACM)</a> at UTD. My
          role is to maintain the division's website and any technical
          infrastructure needed to host HackUTD such as an application portal and
          a platform for judging.
        </p>
        <p>
          I am also the secretary and a technical coordinator for the Artificial
          Intelligence Society (<a href="https://aisutd.org">AIS</a>) at UTD. As
          secretary, I organize the club's information and, in essence, <s>
          make it universally accessible and useful</s> do houskeeping. As a
          technical coordinator, I organize and present technical workshops
          for various topics in AI, such as using reinforcement learning to play
          Pong.
        </p>
        <h1>Where I Am</h1>
        <p>
          In no particular order, I can be found at the following places for
          the following reasons:
        </p>
        <ul>
          <li>
            My personal website (<a href="https://williecubed.me">williecubed.me</a>)
            to see the perpetually unfinished website containing a holistic
            display of my identity and everything (yes, everything) I work on.
          </li>
          <li>
            My portfolio website (<a href="https://projects.williecubed.me">projects.williecubed.me</a>)
            which is more like a resume or curriculum vitae that summarizes my
            work for, let's say, a potential employer or research advisor (wink
            wink, nudge nudge).
          </li>
          <li>
            My GitHub (<a href="https://github.com/WillieCubed">@WillieCubed</a>)
            for a disappointing list of unfinished projects.
          </li>
          <li>
            Email (<a href="mailto:willie@williecubed.me">willie@williecubed.me</a>)
            for general inquiries.
          </li>
          <li>
            Twitter (<a href="https://twitter.com/WillieCubed">@WillieCubed</a>)
            for some of my musings on AI, CS, and everything in between.
          </li>
          <li>
            Instagram (<a href="https://instagram.com/WillieCubed">@williecubed</a>)
            for the casual, lighthearted adventures of a college student.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Who I Am',
  },
};
</script>

<style lang="scss" scoped>
.centered-container {
  display: block;
  max-width: 768px;
}
.container {
  display: flex;
  justify-content: center;
}
</style>