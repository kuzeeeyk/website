<script setup>
import { animate, scroll, ScrollOffset } from "motion";

onMounted(() => {
  const container = document.querySelector(".meshRect");
  const offset = getComputedStyle(document.documentElement).getPropertyValue("--offset");
  scroll(animate(
    container,
    {
      minWidth: ["100%", `calc(100% + (${offset} * 2) + 32px)`],
      fontSize: ["100px", "76px"],
      borderRadius: ["48px", "0px"],
      padding: ["var(--offset)", "0%"],
      backgroundSize: ["100%", "256%"],
      backgroundPosition: ["0% 0%", "75% 100%"],
      boxShadow: ["0px 0px 32px #cb7584", "0px 0px 48px #ad4ba410"],
      fontWeight: ["500", "550"],
      perspective: ["0px", "1000px"],
    }
  ), {
    target: document.querySelector("#nuxtContainer"),
    offset: ["start center", "center start"]
  });
})
</script>
<template>
  <div class="nuxt" id="nuxtContainer">
    <div class="meshRect">
      <div class="rectContent">
        <span class="line animate">I enjoy making websites</span>
        <span class="line animate">using power of NuxtJS</span>
      </div>
      <svg class="nuxtLogo" width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style="mix-blend-mode:overlay">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z"
            fill="black" />
          <path
            d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z"
            fill="black" />
        </g>
      </svg>
    </div>
  </div>
</template>
<style scoped>
.nuxt {
  padding: var(--offset);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.meshRect {
  width: 100%;
  height: 100%;
  background: url("~/assets/mesh.png");
  background-size: cover;
  background-position: center;
  border-radius: 48px;
  position: relative;
  font-size: 100px;
  font-weight: 500;
}

.rectContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.rectContent .line {
  mix-blend-mode: overlay;
  color: black;
}

.nuxtLogo {
  mix-blend-mode: overlay;
  opacity: .6;
  position: relative;
  width: 90px;
  height: 90px;
  left: 50%;
  transform: translate(-50%, calc(-50% - 90px));
}</style>