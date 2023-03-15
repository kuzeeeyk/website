<script setup>
const { data: activity, refresh, error } = await useFetch("/api/listeningActivity", { method: "GET" }).catch((err) => console.log(err));
onMounted(() => {
  setInterval(() => {
    if (document && !document.hidden) refresh();
  }, 5000);
});
</script>
<template>
  <div class="intro">
    <div class="spotify">
      <svg class="spotifyIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 168 168">
        <path fill="#1ED760" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z" />
      </svg>
      <div class="spotifyText" v-if="activity?.track">
        <span class="songStatus">Listening to</span>
        <a class="song" :href="activity.track.url" target="_blank">{{ activity.track.name }}</a>
        <span class="songStatus">by</span>
        <a class="song" :href="activity.artist.url" target="_blank">{{ activity.artist.name }}</a>
      </div>
      <div class="spotifyText" v-else>
        <span class="songStatus">Not listening to anything right now</span>
      </div>
    </div>
    <div class="about">
      <div>
        <span class="line">Self-taught front-end</span>
        <span class="line">developer based in</span>
        <span class="line">Ankara, Turkiye.</span>
      </div>
      
      <svg width="24" height="295" viewBox="0 0 24 295" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.9393 294.061C11.5251 294.646 12.4749 294.646 13.0606 294.061L22.6066 284.515C23.1924 283.929 23.1924 282.979 22.6066 282.393C22.0208 281.808 21.0711 281.808 20.4853 282.393L12 290.879L3.51471 282.393C2.92892 281.808 1.97917 281.808 1.39339 282.393C0.807599 282.979 0.807599 283.929 1.39339 284.515L10.9393 294.061ZM10.5 -6.55671e-08L10.5 293L13.5 293L13.5 6.55671e-08L10.5 -6.55671e-08Z"
          fill="url(#paint0_linear_2_59)" />
        <defs>
          <linearGradient id="paint0_linear_2_59" x1="12" y1="293" x2="12" y2="0" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  </div>
</template>
<style scoped>
.intro {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  background: url("~/assets/glow.png");
  background-size: cover;
  background-position: center;
  padding: var(--offset);
  gap: 16px;
  z-index: -100;
}

.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 80px;
  font-weight: 500;
  line-height: 1.05;
}

.line {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.spotify {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px;
  border: 1.25px solid #53E587;
  width: fit-content;
  border-radius: 128px;
}

.spotifyText > *::selection {
  background: #53E587;
  color: #0b3018;
}

.spotifyText {
  padding: 0 18px;
  font-weight: 300;
  display: flex;
  gap: 5px;
}

.songStatus {
  color: #a5a5a5;
}

.song {
  color: #53E587;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.song:hover {
  color: #7affa9;
  text-decoration: underline;
}

.spotifyIcon {
  width: 20px;
  height: 20px;
}
</style>