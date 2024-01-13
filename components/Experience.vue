<script setup>
const canvas = ref(null);
const debug = ref(null);

onMounted(() => {
  const ctx = canvas.value.getContext("2d");
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  const w = canvas.value.width;
  const h = canvas.value.height;
  ctx.lineWidth = 1;
  ctx.lineCap = "round";

  let spawnRadius = w;
  let speed = 5;

  let init = [];
  let maxParts = 200;
  for (let a = 0; a < maxParts; a++) {
    let initX = w / 2 + Math.random() * spawnRadius - spawnRadius / 2;
    let initY = h / 2 + Math.random() * spawnRadius - spawnRadius / 2;

    init.push({
      id: Math.random(),
      x: initX,
      y: initY,
      xs: (initX - w / 2) * speed,
      ys: (initY - h / 2) * speed,
      l: Math.random() * 5,
      lw: Math.random() * 3,
    });
  }

  let particles = [];
  for (let b = 0; b < maxParts; b++) {
    particles[b] = init[b];
  }
  let k = 0;

  function draw() {
    // console.log(speed + " speed " + velocity + " velocity");
    ctx.clearRect(0, 0, w, h);
    for (let c = 0; c < particles.length; c++) {
      let p = particles[c];
      // make it much thinner when it's close to the center
      ctx.lineWidth = p.lw * (2 + Math.abs(p.x - w / 5) / w);
      // ctx.strokeStyle = "rgba(255,255,255," + p.l / 12 + ")";
      ctx.strokeStyle = `rgba(255,255,255,${(p.l / 12).toFixed(2)})`;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      ctx.stroke();
    }
    move();
    if (k >= 0.01) {
      k -= 0.01;
    } else if (k <= 0.01) {
      k += 0.01;
    }

    k = Math.min(Math.max(k, -1), 1);

    requestAnimationFrame(draw);
  }

  function move() {
    for (let b = 0; b < particles.length; b++) {
      speed = 50 / (Math.atan(k + 0.8) + 0.5) + 10 * 8 - k * 68;
      // if (speed != Math.abs(speed)) {
      //   speed = Math.cos(k) * 10;
      // }
      // debug.value = Math.ceil(speed) + " speed";

      let p = particles[b];
      p.xs = (p.x - w / 2) / speed;
      p.ys = (p.y - h / 2) / speed;
      p.x += p.xs;
      p.y += p.ys;

      // if particle position exceeds the canvas
      if (p.x < 0 || p.y < 0 || p.x > w || p.y > h) {
        p.x = w / 2 + Math.random() * spawnRadius - spawnRadius / 2;
        p.y = h / 2 + Math.random() * spawnRadius - spawnRadius / 2;
        p.xs = (p.x - w / 2) / speed;
        p.ys = (p.y - h / 2) / speed;
        const newParticle = init[Math.floor(Math.random() * init.length)];
        particles.push(newParticle);
        particles.splice(b, 1);
      }
    }
  }

  draw();

  let latestKnownScrollY = 0;

  window.addEventListener("scroll", (e) => {
    e.preventDefault();

    const scrollDirection = window.scrollY > latestKnownScrollY ? true : false;
    latestKnownScrollY = window.scrollY;
    if (scrollDirection) {
      k += 0.1;
    } else {
      k -= 0.1;
    }
  });
});
</script>
<template>
  <span class="debug">{{ debug }}</span>
  <div class="projects" ref="projects">
    <canvas ref="canvas" id="canvas" class="particles"></canvas>
  </div>
</template>
<style scoped>
canvas {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.projects {
  position: relative;
  width: 100%;
  height: 400vh;
  -webkit-mask-image: linear-gradient(to bottom, transparent 5%, #000 80%);
}

.debug {
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 24px;
  padding: 16px;
  background: #000;
  z-index: 100;
}
</style>
