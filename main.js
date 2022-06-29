const canvas = document.getElementById('myCanvas');
canvas.width = 200;

const ctx = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

Animate();

function animate() {
  car.update();
  car.draw(ctx);
  canvas.height = window.innerHeight;
  requestAnimationFrame(animate);
}
