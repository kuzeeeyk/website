<script setup>
import { animate, scroll, ScrollOffset } from "motion";

import { gsap } from "gsap";

onMounted(() => {
  const container = document.querySelector(".meshRect");
  const offset = getComputedStyle(document.documentElement).getPropertyValue(
    "--offset"
  );

  gsap.to(container, {
    minWidth: "150vw",
    fontSize: "76px",
    borderRadius: "0px",
    padding: "0%",
    backgroundSize: "500%",
    backgroundPosition: "75% 100%",
    boxShadow: "0px 0px 48px #ad4ba410",
    fontWeight: "550",
    scale: 0.8,
    perspective: "1000px",
    ease: "sine.out",
    scrollTrigger: {
      trigger: ".stickyWrapper",
      start: "top center",
      end: "center-=500 top",
      scrub: true,
    },
  });
});
</script>
<template>
  <div class="stickyWrapper">
    <div class="nuxt" id="nuxtContainer">
      <div class="meshRect">
        <div class="rectContent">
          <span class="line 1st">I enjoy making websites</span>
          <span class="line">using power of NuxtJS</span>
        </div>

        <svg
          class="nuxtLogo"
          width="109"
          height="73"
          viewBox="0 0 109 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.15 73H101.67C102.957 73.0001 104.221 72.6629 105.336 72.0222C106.45 71.3813 107.376 70.4597 108.019 69.3499C108.662 68.2399 109.001 66.981 109 65.6996C108.999 64.4182 108.66 63.1596 108.016 62.0502L80.8038 15.1218C80.1605 14.0122 79.2354 13.0907 78.121 12.45C77.0067 11.8095 75.7426 11.4721 74.4558 11.4721C73.1692 11.4721 71.905 11.8095 70.7908 12.45C69.6764 13.0907 68.7511 14.0122 68.108 15.1218L61.15 27.1291L47.5459 3.64915C46.9022 2.53967 45.9766 1.61829 44.862 0.977713C43.7473 0.337259 42.483 0 41.1961 0C39.9091 0 38.6449 0.337259 37.5303 0.977713C36.4156 1.61829 35.4899 2.53967 34.8462 3.64915L0.984208 62.0502C0.340011 63.1596 0.000560666 64.4182 6.93941e-07 65.6996C-0.000559278 66.981 0.33779 68.2399 0.981018 69.3499C1.62425 70.4597 2.54967 71.3813 3.66422 72.0222C4.77875 72.6629 6.04312 73.0001 7.33013 73H32.7652C42.8428 73 50.2747 68.5926 55.3885 59.994L67.8039 38.586L74.4539 27.1291L94.4118 61.5431H67.8039L61.15 73ZM32.3505 61.5313L14.6001 61.5273L41.2079 15.6446L54.4843 38.586L45.5952 53.9196C42.1991 59.4986 38.341 61.5313 32.3505 61.5313Z"
            fill="black"
          />
        </svg>
      </div>
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
  overflow: hidden;
  position: sticky;
  top: 0;
}

.stickyWrapper {
  height: 300vh;
}

.meshRect {
  width: 100%;
  height: 100vh;
  background: url("~/assets/mesh.png");
  background-size: 110vw;
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
  opacity: 0.6;
  position: relative;
  width: 90px;
  height: 90px;
  left: 50%;
  transform: translate(-50%, calc(-50% - 90px));
}
</style>
