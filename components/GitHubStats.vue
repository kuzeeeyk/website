<script setup>
import { ref } from "vue";
import { gsap } from "gsap";

const year = ref(new Date().getFullYear());
const totalCommits = ref(0);
const { data, error, refresh } = useFetch(
  `https://github.com/users/kuzeeeyk/contributions?to=${year.value}-12-31`,
  {
    mode: "no-cors",
    server: true,
  }
);
refresh();
if (data.value) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data.value, "text/html");
  const totalCommitsEl = doc.querySelector("h2.f4.text-normal.mb-2");
  const totalCommitAmount = totalCommitsEl.textContent.trim().split(" ")[0];
  let i = 0;
  const interval = setInterval(() => {
    if (i < totalCommitAmount) {
      totalCommits.value = i;
      i++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

onMounted(() => {
  gsap.to(".underlineSvg", {
    strokeDashoffset: "0",
    opacity: "1",
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: ".github",
      start: "top-=500 top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(".number", {
    opacity: 1,
    y: 0,
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: ".github",
      start: "top-=500 top",
      end: "center top",
      scrub: true,
    },
  });
});
</script>
<template>
  <div class="github">
    <img src="~/assets/grid.png" alt="grid" class="bg" />
    <div class="totalCommits">
      <span>I authored</span>
      <div class="totalCommitsCount">
        <span class="number">{{ totalCommits }}</span>

        <svg
          width="135"
          height="20"
          viewBox="0 0 135 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill underlineSvg"
            d="M4 11.1174C26.0771 5.74644 82.3849 -1.77289 131 11.1174C116.434 9.81532 81.2925 8.96894 57.2581 16"
            stroke="white"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <span>commits in</span>
      <span class="number">{{ new Date().getFullYear() }}</span>
    </div>
  </div>
</template>
<style scoped>
.bg {
  width: 100%;
  position: absolute;
  object-fit: fill;
  bottom: 0;
  z-index: -100;
}

.github {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.github::before {
  content: "";
  position: absolute;
  width: 244px;
  height: 244px;
  background: url("~/assets/github.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  animation: githubLogoGlow 7s infinite;
}

@keyframes githubLogoGlow {
  0% {
    filter: drop-shadow(0 0 0 #ffffff50);
  }

  50% {
    filter: drop-shadow(0 0 64px #fff);
    transform: scale(1.05);
  }

  100% {
    filter: drop-shadow(0 0 0 #ffffff50);
  }
}

.totalCommits {
  mix-blend-mode: lighten;
  display: flex;
  gap: 14px;
  font-size: 64px;
  font-weight: 500;
  color: #858585;
  align-items: center;
}

.totalCommitsCount {
  display: flex;
  flex-direction: column;
}

.totalCommitsCount .number {
  width: 96px;
  text-align: center;
}

@keyframes fillSvg {
  0% {
    stroke-dashoffset: 600;
    opacity: 0;
  }

  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

.totalCommitsCount svg {
  position: absolute;
  width: 92px;
  transform: translateY(64px) translateX(4px);
}

.totalCommitsCount > svg > path {
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  opacity: 1;
  /* animation: fillSvg 3s ease-in-out 3s forwards; */
}

.github .number {
  color: #fff;
  transform: translateY(-8px);
  opacity: 0.4;
}
</style>
