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
  transition: "width .2s ease, height .2s ease, top .2s ease, left .2s ease",
  zIndex: 1000,
  mixBlendMode: "overlay",
});

const cursor = ref(null);

const cursorMove = (e) => {
  cursor.value.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
};

const cursorHover = (e) => {
  cursor.value.style.width = "64px";
  cursor.value.style.height = "64px";
  cursor.value.style.top = "-32px";
  cursor.value.style.left = "-32px";
  cursor.value.style.background = "#fff";
};

const cursorHoverOut = (e) => {
  cursor.value.style.width = "32px";
  cursor.value.style.height = "32px";
  cursor.value.style.top = "-16px";
  cursor.value.style.left = "-16px";
  cursor.value.style.background = "#fff";
};

onMounted(() => {
  cursor.value = document.querySelector(".cursor");
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
</template>