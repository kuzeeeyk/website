<script setup>
import { animate, scroll, inView } from "motion";

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

const cursorStyle = ref({
  position: "fixed",
  top: "-16px",
  left: "-16px",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  background: "#fff",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  transition:
    "width .2s ease, height .2s ease, top .2s ease, left .2s ease, transform .06s ease, opacity .8s ease, filter .1s ease",
  opacity: 0,
  zIndex: 1000,
  mixBlendMode: "difference",
});

const cursor = ref(null);
const dot = ref(null);

const dotStyle = ref({
  position: "fixed",
  top: "-4px",
  left: "-4px",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "#fff",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  transition:
    "width .4s ease, height .4s ease, top .4s ease, left .4s ease, filter .05s ease",
  mixBlendMode: "difference",
  zIndex: 1000,
});

const cursorMove = (e) => {
  cursor.value.style.filter = "none";
  dot.value.style.filter = "none";
  cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursor.value.style.opacity = 1;
  dot.value.style.opacity = 1;
  dot.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
};

const cursorOutOfScreen = (e) => {
  cursor.value.style.filter = "blur(32px)";
  dot.value.style.filter = "blur(4px)";
  cursor.value.style.opacity = 0;
  dot.value.style.opacity = 0;
};

const cursorHover = (e) => {
  cursor.value.style.width = "48px";
  cursor.value.style.height = "48px";
  cursor.value.style.top = "-24px";
  cursor.value.style.left = "-24px";
  dot.value.style.width = "12px";
  dot.value.style.height = "12px";
  dot.value.style.top = "-6px";
  dot.value.style.left = "-6px";
};

const cursorHoverOut = (e) => {
  cursor.value.style.width = "32px";
  cursor.value.style.height = "32px";
  cursor.value.style.top = "-16px";
  cursor.value.style.left = "-16px";
  dot.value.style.width = "8px";
  dot.value.style.height = "8px";
  dot.value.style.top = "-4px";
  dot.value.style.left = "-4px";
};

onMounted(() => {
  document.addEventListener("mousemove", cursorMove);
  document.addEventListener("mouseout", cursorOutOfScreen);
  document.querySelectorAll(".hover").forEach((el) => {
    el.addEventListener("mouseover", cursorHover);
    el.addEventListener("mouseout", cursorHoverOut);
  });
});

onUnmounted(() => {
  document.removeEventListener("mousemove", cursorMove);
  document.removeEventListener("mouseout", cursorOutOfScreen);
  document.querySelectorAll(".hover").forEach((el) => {
    el.removeEventListener("mouseover", cursorHover);
    el.removeEventListener("mouseout", cursorHoverOut);
  });
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
    <div class="cursor" :style="cursorStyle" ref="cursor"></div>
    <div class="dot" :style="dotStyle" ref="dot"></div>
  </div>
</template>
