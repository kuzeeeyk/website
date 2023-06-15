<script setup>
import { animate, scroll, inView } from "motion";

inView(".animate", ({ target }) => {
  animate(target, {
    opacity: ["0", "1"],
    translateY: ["-84px", "0px"],
  }, { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
});
</script>
<template>
  <div>
    <Navbar />
    <Intro />
    <NuxtJS />
    <GitHubStats />
    <Projects />
    <ProjectsMore />
    <Skills />
    <Cursor />
  </div>
</template>