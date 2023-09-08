<script setup>
onMounted(() => {
  const cards = document.querySelectorAll(".techCard");
  const skills = document.querySelector(".skills");
  document.addEventListener("mousemove", (e) => {
    const skillsRect = skills.getBoundingClientRect();
    const x = e.clientX - skillsRect.left;
    const y = e.clientY - skillsRect.top;
    skills.style.setProperty("--mouse-x", x + "px");
    skills.style.setProperty("--mouse-y", y + "px");
    for (let i = 0; i < cards.length; i++) {
      const rect = cards[i].getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cards[i].style.setProperty("--mouse-x", x + "px");
      cards[i].style.setProperty("--mouse-y", y + "px");
    }
  });
});

const lighthen = (color, amount) => {
  let usePound = false;

  if (color[0] == "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

const techs = ref([
  {
    name: "Node",
    icon: "nodejs",
    color: "#152411",
  },
  {
    name: "Vue",
    icon: "vue",
    color: "#11231B",
  },
  {
    name: "Electron",
    icon: "electronjs",
    color: "#092831",
  },
  {
    name: "Javascript",
    icon: "js",
    color: "#353114",
  },
  {
    name: "Prisma",
    icon: "prisma",
    color: "#11374C",
  },
  {
    name: "Nuxt",
    icon: "nuxt",
    color: "#113F2C",
  },
]);

techs.value = techs.value.map((tech) => {
  tech.lightColor = lighthen(tech.color, 30);
  return tech;
});
</script>
<template>
  <div class="skills">
    <span class="title">Technologies I use</span>
    <div class="techCards">
      <div
        v-for="tech in techs"
        class="techCard"
        :style="{ '--color': tech.color, '--light-color': tech.lightColor }"
      >
        <div class="cardContent">
          <div class="iconStroke">
            <div class="icon">
              <img :src="`/techIcons/${tech.icon}.png`" :alt="tech.name" />
            </div>
          </div>
          <span class="name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.techCards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  perspective: 500px;
  transform-style: preserve-3d;
  z-index: 100;
}

.techCard {
  width: 410px;
  height: 162px;
  border-radius: 24px;
  position: relative;
  padding: 1px;
  z-index: 50;
  transition: all 0.5s cubic-bezier(0.15, 0.55, 0.55, 1);
}

.techCard:hover {
  transform: translateY(-3px) translateZ(20px);
}

.techCard:hover .iconStroke {
  transform: rotate(-4deg);
}

.techCard:nth-child(3n):hover {
  box-shadow: -32px 0 8px #09090940;
}

.techCard:nth-child(3n-1):hover {
  box-shadow: 0px 0 8px #09090950;
}

.techCard:nth-child(3n-2):hover {
  box-shadow: 32px 0 8px #09090940;
}

.cardContent {
  display: flex;
  align-items: center;
  padding: 34px;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(to bottom, #111111 0%, #0d0d0d 100%);
  z-index: 100;
}

.name {
  font-size: 36px;
  font-weight: 300;
  color: #ffffffaa;
  margin-left: 16px;
  width: 100%;
  text-align: center;
}

.iconStroke {
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 22px;
  background: radial-gradient(
    300px circle at var(--mouse-x) var(--mouse-y),
    var(--light-color) 0%,
    transparent 200%
  );
  position: relative;
  z-index: 500;
  padding: 2px;
  transition: transform 0.3s cubic-bezier(0.17, 0.55, 0.55, 1);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(to bottom, var(--color) 0%, transparent 150%);
  border-radius: 21px;
}

.techCard:before,
.techCard:after {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  transition: all 0.5s ease-in-out;
  border-radius: 26.2px;
}

.techCard:not(:hover):before {
  opacity: 0;
}

.techCard:before {
  background: radial-gradient(
    200px circle at var(--mouse-x) var(--mouse-y),
    #ffffff05,
    transparent 100%
  );
  z-index: 5;
}

.techCard:after {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    var(--light-color),
    transparent 40%
  );
  /* filter: brightness(2) saturate(0.5); */
  z-index: -1;
  /* box-shadow: inset 0 0 0 1px #ffffff10; */
}

.skills {
  margin: 0 var(--offset);
  margin-top: 256px;
  background: linear-gradient(to bottom, #1b1b1b 0%, #090909 80%);
  height: 1080px;
  display: flex;
  border-radius: 130px 130px 0 0;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 74px 0;
  gap: 86px;
}

.title {
  font-size: 64px;
  font-weight: 500;
  color: #efefef;
}

.skills:before {
  content: "";
  position: absolute;
  top: -1.5px;
  left: -1.5px;
  width: calc(100% + 3px);
  height: calc(100% + 1.5px);
  background: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    #ffffff80 0%,
    #53e58700 50%
  );
  z-index: -50;
  border-radius: 130px 130px 0 0;
}
</style>
