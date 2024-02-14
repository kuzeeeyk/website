<script setup>
const topOffset = ref(0);
const calcualteTopOffset = () => {
  topOffset.value = (window.innerWidth / 16) * 8.426;
  console.log(topOffset.value);
};
onMounted(() => {
  calcualteTopOffset();
  window.addEventListener("resize", calcualteTopOffset);
});
</script>
<template>
  <div class="reposMore">
    <a
      class="more hover"
      :style="{ marginTop: `${topOffset}px` }"
      href="https://github.com/kuzeeeyk"
      target="_blank"
    >
      <svg
        width="335"
        height="276"
        viewBox="0 0 335 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="arrow"
      >
        <path
          d="M333.705 258.041C334.981 256.984 335.158 255.093 334.101 253.817L316.875 233.026C315.818 231.751 313.926 231.573 312.651 232.63C311.375 233.688 311.198 235.579 312.255 236.855L327.567 255.335L309.086 270.647C307.811 271.705 307.633 273.596 308.69 274.872C309.747 276.147 311.639 276.325 312.915 275.268L333.705 258.041ZM0.941318 1.91244C27.1559 84.0199 63.4748 143.997 116.6 185.579C169.71 227.148 239.284 250.071 331.511 258.718L332.071 252.744C240.507 244.16 172.186 221.467 120.298 180.854C68.4248 140.253 32.6433 81.4801 6.65707 0.0875631L0.941318 1.91244Z"
          fill="url(#paint0_linear_316_6)"
          fill-opacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_316_6"
            x1="331.791"
            y1="263"
            x2="185.291"
            y2="214.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      see more on github
      <svg
        width="12"
        height="19"
        viewBox="0 0 12 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="rightArrow"
      >
        <path d="M1 1L10 9.5L1 18" stroke="white" stroke-width="2" />
      </svg>
    </a>
  </div>
</template>
<style scoped>
.reposMore {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.more {
  font-size: 30px;
  font-weight: 400;
  padding: 24px 96px;
  padding-left: 118px;
  border-radius: 0 0 20px 20px;
  border-top: none;
  background: #090909;
  text-decoration: none;
  color: #ffffff80;
  position: relative;
}

.more:before {
  content: "";
  position: absolute;
  top: 0;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 1px);
  background: linear-gradient(180deg, #aaaaaa00 0%, #aaaaaa80 100%);
  border-radius: 0 0 20px 20px;
  z-index: -1;
}

.more:hover > .rightArrow {
  transform: translateX(12px);
}

.more:hover > .arrow {
  transform: translate(-120%, -87%) rotate(-3deg);
}

.more > .rightArrow {
  opacity: 0.5;
  width: 10px;
  margin-left: 12px;
  transition: transform 0.8s;
}

.arrow {
  transform-origin: right top;
  -webkit-mask-image: linear-gradient(to bottom, #00000000 82%, #000000 100%);
  position: absolute;
  z-index: 10;
  transform: translate(-120%, -87%) rotate(4deg);
  transition: 0.4s cubic-bezier(0.17, 0.55, 0.55, 1);
  pointer-events: none;
}
</style>
