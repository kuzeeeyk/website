<script setup>
const { data: flexberryReposData } = await useFetch(
  "https://api.github.com/orgs/FlexberryLauncher/repos",
  { method: "GET" }
).catch((err) => console.log(err));
const { data: personalReposData } = await useFetch(
  "https://api.github.com/users/kuzeeeyk/repos",
  { method: "GET" }
).catch((err) => console.log(err));

const repoData = ref([
  {
    user: "FlexberryLauncher",
    name: "website",
    stars: flexberryReposData?.value?.find((repo) => repo.name == "website")
      ?.stargazers_count,
  },
  {
    user: "FlexberryLauncher",
    name: "launcher",
    stars: flexberryReposData?.value?.find((repo) => repo.name == "launcher")
      ?.stargazers_count,
  },
  {
    user: "kuzeeeyk",
    name: "website",
    stars: personalReposData?.value?.find((repo) => repo.name == "website")
      ?.stargazers_count,
  },
]);

onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    const x = e.pageX / window.innerWidth;
    const y = e.pageY / window.innerHeight;
    const cards = document.querySelectorAll(".project");
    cards.forEach((card, i) => {
      i++;
      let cardRotation = i % 2 == 0 ? (i + 1) * 1.5 : (i + 1) * -1.5;
      card.style.transform = `translate(-${x * (i == 2 ? 2 : 1) * 10}px, -${
        y * (i == 2 ? 2 : 1) * 10
      }px) rotate(${cardRotation}deg)`;
    });
  });
});
</script>
<template>
  <div class="projects">
    <img src="~/assets/projects.png" alt="projects" class="bg" />
    <span class="title">Some of my repository</span>
    <div class="cards">
      <a
        class="project hover"
        v-for="repo in repoData"
        :href="`https://github.com/${repo.user}/${repo.name}`"
        target="_blank"
      >
        <div class="content hover">
          <span class="name">{{ repo.name }}</span>
          <span class="user">{{ repo.user }}</span>
        </div>
        <div class="stars">
          <span class="starCount">{{ repo.stars }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="star"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>
<style scoped>
.bg {
  width: 100%;
  position: absolute;
  object-fit: fill;
  z-index: -100;
  top: 0;
}

.projects {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  position: absolute;
}

.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 128px;
  height: 100%;
}

.project {
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 64px;
  align-items: center;
  background-color: #00000030;
  backdrop-filter: blur(12px);
  position: absolute;
  border-radius: 36px;
  border: 1px solid #666666;
  z-index: 100;
  transform: rotate(2deg);
  transition: 0.5s ease-in-out border, 0.2s ease-in-out rotate, 0.1s transform,
    0.3s ease-in-out box-shadow;
  text-decoration: none;
}

.project:nth-child(1) {
  transform: rotate(-4deg);
  margin-top: -320px;
  margin-left: -600px;
}

.project:nth-child(2) {
  margin-top: 30px;
  margin-left: 3px;
}

.project:nth-child(3) {
  transform: rotate(-6deg);
  margin-top: 230px;
  margin-left: 380px;
  z-index: 50;
}

.project:hover {
  background-color: #00000050;
  /* rotate: 4deg!important; */
  border: 1px solid #ffffff;
  cursor: pointer;
  box-shadow: 0 0 24px 0 #ffffff30;
}

.project:nth-child(1):hover,
.project:nth-child(3):hover {
  rotate: 4.2deg !important;
}

.project:nth-child(2):hover {
  rotate: -3.8deg !important;
}

.title {
  font-size: 76px;
  font-weight: 500;
  color: #858585;
  align-items: center;
}

.star {
  width: 27px;
}

.stars {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: flex-end;
  color: #fbff32;
  font-size: 36px;
}

.content {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #ffffff;
  gap: -8px;
}

.name {
  font-size: 64px;
  font-weight: 500;
  opacity: 0.8;
  transition: 0.2s ease-in-out opacity;
}

.project:hover .name {
  opacity: 1;
  text-shadow: 0 0 24px #ffffff30;
}

.user {
  font-size: 40px;
  font-weight: 400;
  opacity: 0.4;
}
</style>
