<script setup>
import { animate, inView } from "motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// text of gsap
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
inView(".animate", ({ target }) => {
  animate(
    target,
    {
      opacity: ["0", "1"],
      translateY: ["-84px", "0px"],
    },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});
</script>
<template>
  <Navbar />
  <Intro />
  <NuxtJS />
  <GitHubStats />
  <Projects />
  <ProjectsMore />
  <Skills />
  <Experience />
</template>
