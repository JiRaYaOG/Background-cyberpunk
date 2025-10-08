const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height, particles;

function init() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  particles = [];

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.5,
      color: ['#0ff','#ff0','#f0f'][Math.floor(Math.random()*3)],
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if(p.x<0||p.x>width)p.speedX*=-1;
    if(p.y<0||p.y>height)p.speedY*=-1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();
