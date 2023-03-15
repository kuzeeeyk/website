<template>
  <div class="projects">
    <img src="~/assets/projects.png" alt="projects" class="bg" />
    <span class="title">Some of my projects</span>
    <div class="cards">
      <div class="project">

      </div>
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
  justify-content: center;
  padding: 64px;
  position: absolute;
}
.title {
  font-size: 64px;
  font-weight: 500;
  color: #858585;
  align-items: center;
}
</style>