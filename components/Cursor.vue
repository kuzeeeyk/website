<script setup>
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
  transition: "width .2s ease, height .2s ease, top .2s ease, left .2s ease, transform .06s ease, opacity .8s ease",
  opacity: 0,
  zIndex: 1000,
  mixBlendMode: "overlay",
});

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
  transition: "width .4s ease, height .4s ease, top .4s ease, left .4s ease",
  zIndex: 1000
});

const cursor = ref(null);
const dot = ref(null);

const cursorMove = (e) => {
  cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursor.value.style.opacity = 1;
  dot.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
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
  cursor.value = document.querySelector(".cursor");
  dot.value = document.querySelector(".dot");
  document.addEventListener("mousemove", cursorMove);
  document.querySelectorAll(".hover").forEach((el) => {
    el.addEventListener("mouseover", cursorHover);
    el.addEventListener("mouseout", cursorHoverOut);
  });
});

onUnmounted(() => {
  document.removeEventListener("mousemove", cursorMove);
  document.querySelectorAll(".hover").forEach((el) => {
    el.removeEventListener("mouseover", cursorHover);
    el.removeEventListener("mouseout", cursorHoverOut);
  });
});
</script>
<template>
  <div class="cursor" :style="cursorStyle"></div>
  <div class="dot" :style="dotStyle"></div>
</template>