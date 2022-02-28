function setup() {
  createCanvas(1728, 864, SVG);
  colorMode(RGB, 255, 255, 255);
  strokeWeight(0.1);
}

function draw() {
  background(255);

  let currentX = 0;
  let currentY = 0;
  let barHeight = 864 / 8;

  noFill();
  stroke(255, 0, 0);

  let circles = 0;

  while (currentY < height) {
    let barWidth = Math.floor(Math.random() * 1000) + 500;

    if (currentX + barWidth > width) {
      rect(currentX, currentY, width, barHeight);
      circle(currentX + (width - currentX) / 6, currentY + barHeight / 2, 10);
      circle(currentX + (width - currentX) / 2, currentY + barHeight / 2, 10);
      circle(
        currentX + ((width - currentX) * 5) / 6,
        currentY + barHeight / 2,
        10
      );

      currentX = 0;
      currentY += barHeight;

      circles += 3;
    }

    rect(currentX, currentY, barWidth, barHeight);
    circle(currentX + barWidth / 6, currentY + barHeight / 2, 10);
    circle(currentX + barWidth / 2, currentY + barHeight / 2, 10);
    circle(currentX + (barWidth * 5) / 6, currentY + barHeight / 2, 10);

    circles += 3;

    currentX += barWidth;
  }

  console.log(circles);
  noLoop();
}

function mouseClicked() {
  save('mySVG.svg');
}
