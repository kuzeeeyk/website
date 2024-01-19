<script setup>
import { gsap } from "gsap";

const name = ref(null);
const first = ref(null);
const greeting = ref(null);
const second = ref(null);
const ageProgress = ref(null);

const birthDate = new Date("2 Dec 2007");
const age = ref(new Date(new Date() - birthDate).getUTCFullYear() - 1970);

onMounted(() => {
  // window.addEventListener("scroll", (e) => {
  //   if (!name.value?.style) return;
  //   const scroll = window.scrollY;
  //   if (scroll > 850) {
  //     second.value.style.opacity = 1;
  //     second.value.style.background = "#fff";
  //     return;
  //   }
  //   second.value.style.opacity = 0;
  //   second.value.style.background = "transparent";
  //   const greetingOpacity = 1 - scroll / 200;
  //   const letterSpacing = 0 + Math.pow(scroll / 2, 0.9);
  //   const scale = 1 + Math.pow(scroll / 120, 2);
  //   greeting.value.style.opacity = greetingOpacity;
  //   greeting.value.style.transform = `scale(${scale})`;
  //   name.value.style.letterSpacing = `${letterSpacing}px`;
  //   name.value.style.transform = `scale(${scale}) translateX(${
  //     scroll / 5.4
  //   }px) translateY(${-scroll / 16}px)`;
  // });
  gsap.to(name.value, {
    letterSpacing: "100px",
    scale: 65,
    translateY: "-1300%",
    translateX: "300%",
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: first.value,
      start: "top top",
      end: "bottom-=300 top",
      scrub: true,
    },
  });

  gsap.to(greeting.value, {
    opacity: 0,
    scale: 0.4,
    ease: "power4.out",
    scrollTrigger: {
      trigger: first.value,
      start: "top top",
      end: "center top",
      scrub: true,
    },
  });

  gsap.to(second.value, {
    opacity: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: second.value,
      start: "top-=400 top",
      end: "bottom-=1000 top",
      scrub: true,
    },
  });

  gsap.to(".line", {
    opacity: 1,
    filter: "blur(-2px)",
    stagger: 0.4,
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: second.value,
      start: "top-=600 top",
      end: "bottom-=600 top",
      scrub: true,
    },
  });

  gsap.to(ageProgress.value, {
    opacity: 1,
    top: "-20%",
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: second.value,
      start: "top+=200 top",
      end: "bottom-=600 top",
      scrub: true,
    },
  });

  gsap.to(".age-2", {
    opacity: 1,
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: second.value,
      start: "top+=200 top",
      end: "bottom-=600 top",
      scrub: true,
    },
  });
});
</script>
<template>
  <div class="intro">
    <div class="wrapper">
      <div class="first" ref="first">
        <span class="greeting" ref="greeting">Hello, i'm</span>
        <span class="name" ref="name">KUZEY</span>
      </div>
    </div>
    <div class="wrapper" data-scroll>
      <div class="about" ref="second">
        <div class="lines">
          <div class="line">
            <span
              >I am Kuzey, {{ age.toString().slice(0, 1) }} &nbsp;&nbsp; years
              old self-taught web</span
            >
            <div class="age" ref="ageProgress">
              <span v-for="i in 3" :key="i" :class="`age-${i}`">
                {{ +age.toString().slice(1, 2) + i - 1 }}
              </span>
            </div>
          </div>
          <div class="line">
            <span>developer and UI designer from Turkiye</span>
            <img src="~/assets/turkish-flag.png" alt="Turkish Flag" />
          </div>
          <div class="line">
            <span>I’m into web design & development for 4 years</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.age {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 344px;
  align-items: center;
  /* top: -10%; */
  top: 0%;
  -webkit-mask-image: linear-gradient(
    to top,
    transparent 0%,
    transparent 50%,
    #fff 60%
  );
}

.age-2 {
  opacity: 0;
}

.age span {
  line-height: 0.9;
}
.line {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 64px;
  line-height: 60px;
  font-weight: 500;
  color: #090909;
  margin-bottom: 24px;
  transition: 0.3s;
  opacity: 0;
  filter: "blur(20px)";
}
.line img {
  width: 48px;
  height: 48px;
  margin-left: 12px;
  pointer-events: none;
}
.intro {
  height: 300vh;
  top: 0;
}

.wrapper {
  height: 120vh;
  width: 100%;
  top: 0;
  position: sticky;
}

.first {
  position: relative;
  height: 100vh;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.about {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #090909;
  background: #fff;
  opacity: 0;
  transition: 0.3s;
}

.greeting {
  font-size: 48px;
  line-height: 48px;
  font-weight: 400;
  color: #ffffff80;
  letter-spacing: 0;
}

.name {
  line-height: 1;
  font-size: 256px;
  font-weight: 800;
  color: #fff;
  margin-left: -7px;
  margin-bottom: 48px;
  height: 256px !important;
}
</style>
