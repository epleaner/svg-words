let words;

let marginX = 100;
let marginY = 55;
let sizeText = 100;
let circleSize = 10;
let myFont;
let wordInput, button, download;
let widthInput, heightInput;
let generated = false;

function preload() {
  myFont = loadFont('./StardosStencil-Regular.ttf');
}

function setup() {
  createCanvas(window.width, window.height, SVG);
  colorMode(RGB, 255, 255, 255);
  strokeWeight(0.1);
  textFont(myFont);

  button = createButton('generate');
  button.mousePressed(generate);

  wordInput = createInput('');
  widthInput = createInput('');
  heightInput = createInput('');

  let widthLabel = createElement('span', 'canvas width').position(0, 0);
  widthInput.position(0, widthLabel.y + widthLabel.height);

  createElement('span', 'canvas height').position(
    widthInput.x + widthInput.width,
    0
  );
  heightInput.position(widthInput.x + widthInput.width, widthInput.y);

  let wordLabel = createElement('span', 'words').position(
    0,
    heightInput.y + heightInput.height + 10
  );
  wordInput.position(0, wordLabel.y + wordLabel.height);
  button.position(wordInput.x + wordInput.width + 5, wordInput.y);
}

function generate() {
  let width = widthInput.value();
  let height = heightInput.value();
  if (!width.length || isNaN(widthInput.value())) width = 1000;
  else width = parseInt(width);

  if (!height.length || isNaN(heightInput.value())) height = 1000;
  else height = parseInt(height);

  resizeCanvas(width, height);

  words = wordInput
    .value()
    .replaceAll(',', '')
    .replaceAll('.', '')
    .replaceAll(';', '')
    .replaceAll('\n', ' ')
    .split(' ');

  generated = true;
  drawWords();
}

function draw() {}

function drawWords() {
  background(255);

  if (!generated) return;

  textSize(sizeText);
  noStroke();

  let currentX = 0;
  let currentY = wordInput.y + wordInput.height;

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

  download = createButton('download');
  download.mousePressed(downloadWords);
  download.position(button.x + button.width + 5, button.y);

  noLoop();
}

function downloadWords() {
  background(255);

  if (!generated) return;

  textSize(sizeText);
  noStroke();

  let currentX = 0;
  let currentY = wordInput.y + wordInput.height;

  let file = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    let wordWidth = textWidth(word) + marginX;
    if (currentX + wordWidth > width) {
      currentX = 0;
      currentY += sizeText + marginY;
      if (currentY + sizeText + marginY > height) {
        save(`${file++}.svg`);
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

  save(`${file++}.svg`);

  noLoop();
}

function mouseClicked() {}
