let doSave = true;
let words =
  `I me you he him she her it we us you they them am and but while though
I me you he him she her it we us you they them am and but while though
I me you he him she her it we us you they them am and but while though
I me you he him she her it we us you they them am and but while though
I me you he him she her it we us you they them am and but while though`
    .replaceAll(',', '')
    .replaceAll('.', '')
    .replaceAll(';', '')
    .replaceAll('\n', ' ')
    .split(' ');

let marginX = 100;
let marginY = 55;
let sizeText = 100;
let circleSize = 10;
let myFont;
function preload() {
  myFont = loadFont('./StardosStencil-Regular.ttf');
}

function setup() {
  createCanvas(1728, 1296, SVG);
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

  let file = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    let wordWidth = textWidth(word) + marginX;
    if (currentX + wordWidth > width) {
      currentX = 0;
      currentY += sizeText + marginY;
      if (currentY + sizeText + marginY > height) {
        if (doSave) save(`${file++}.svg`);
        background(255);
        currentY = 0;
      }
    }
    noFill();
    stroke(255, 0, 0);
    rect(currentX, currentY, wordWidth, sizeText + marginY);

    circle(
      currentX + wordWidth / 2,
      currentY + (sizeText + marginY) / 5,
      circleSize
    );

    switch (Math.floor(Math.random() * 10)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        circle(
          currentX + marginX / 4,
          currentY + ((sizeText + marginY) * 4) / 5,
          circleSize
        );
        circle(
          currentX + wordWidth - marginX / 4,
          currentY + ((sizeText + marginY) * 4) / 5,
          circleSize
        );
        break;
      case 5:
      case 6:
      case 7:
        circle(
          currentX + wordWidth / 2,
          currentY + ((sizeText + marginY) * 4) / 5,
          circleSize
        );
        break;
      case 8:
      case 9:
        circle(
          currentX + marginX / 4,
          currentY + ((sizeText + marginY) * 4) / 5,
          circleSize
        );
        circle(
          currentX + wordWidth - marginX / 4,
          currentY + ((sizeText + marginY) * 4) / 5,
          circleSize
        );
        circle(
          currentX + wordWidth / 2,
          currentY + ((sizeText + marginY) * 4) / 5,
          circleSize
        );
        break;
    }

    text(word, currentX + marginX / 2, currentY + (marginY * 6) / 3.15);

    currentX += wordWidth;
  }

  if (doSave) save(`${file++}.svg`);

  noLoop();
}

function mouseClicked() {
  save('1.svg');
  save('2.svg');
}
