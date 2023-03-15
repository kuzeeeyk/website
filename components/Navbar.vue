<template>
  <div class="navbar">
    <span class="navbarTitle">Kuzey Kurtuluş</span>
    <div class="navbarLinks">
      <span class="navbarLink hover" onclick="alert('about')">About</span>
      <span class="navbarLink hover" onclick="alert('projects')">Projects</span>
      <span class="navbarLink hover" onclick="alert('contact')">Contact</span>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: var(--offset);
  position: fixed;
  z-index: 1000;
  width: 100%;
}

.navbar::before {
  content: "";
  pointer-events: none;
  position: absolute;
  top: -42px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 1000;
  backdrop-filter: blur(4vh);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to top,
    transparent 0%,
    #000000 80%
  );
  transition: 1s;
}

.navbarTitle {
  font-size: 28px;
  font-weight: 300;
  text-shadow: 0 0 64px #000000;
  user-select: none;
  z-index: 1000;
}

.navbarLinks {
  display: flex;
  flex-direction: row;
  gap: 24px;
  font-size: 20px;
  font-weight: 300;
  z-index: 1000;
}

.navbarLink {
  color: #a5a5a5;
  cursor: pointer;
  transition: .2s;
}

.navbarLink:hover {
  color: #fff;
}
</style>