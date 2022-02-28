let words = `The true state of all things`
  .replaceAll(',', '')
  .replaceAll('.', '')
  .replaceAll(';', '')
  .replaceAll('\n', ' ')
  .split(' ');

let marginX = 36;
let marginY = 36;
let sizeText = 24;
let myFont;
function preload() {
  myFont = loadFont('./StardosStencil-Regular.ttf');
}

function setup() {
  createCanvas(1728, 864, SVG);
  colorMode(RGB, 255, 255, 255);
  strokeWeight(0.1);
  textFont(myFont);
}

function draw() {
  background(255);

  textSize(sizeText);
  noStroke();

  let currentX = 0;
  let currentY = 0;

  console.log(words.length, words.length * 3);

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    let wordWidth = textWidth(word) + marginX;
    if (currentX + wordWidth > width) {
      currentX = 0;
      currentY += sizeText + marginY;
    }
    noFill();
    stroke(255, 0, 0);
    rect(currentX, currentY, wordWidth, sizeText + marginY);

    circle(currentX + wordWidth / 2, currentY + (sizeText + marginY) / 5, 5);

    switch (Math.floor(Math.random() * 10)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        circle(
          currentX + marginX / 4,
          currentY + ((sizeText + marginY) * 4) / 5,
          5
        );
        circle(
          currentX + wordWidth - marginX / 4,
          currentY + ((sizeText + marginY) * 4) / 5,
          5
        );
        break;
      case 5:
      case 6:
      case 7:
        circle(
          currentX + wordWidth / 2,
          currentY + ((sizeText + marginY) * 4) / 5,
          5
        );
        break;
      case 8:
      case 9:
        circle(
          currentX + marginX / 4,
          currentY + ((sizeText + marginY) * 4) / 5,
          5
        );
        circle(
          currentX + wordWidth - marginX / 4,
          currentY + ((sizeText + marginY) * 4) / 5,
          5
        );
        circle(
          currentX + wordWidth / 2,
          currentY + ((sizeText + marginY) * 4) / 5,
          5
        );
        break;
    }

    text(word, currentX + marginX / 2, currentY + marginY);

    currentX += wordWidth;
  }

  noLoop();
}

function mouseClicked() {
  save('mySVG.svg');
}
