let words = `walk time it and of very wish
run person I that in quite ed
play year you but to rather ing
read way he or for the er
learn day they as with more dog
be thing we if on most cat
have man she when at less mom
do world who than from least dad
say life them because by too the
get hand me while about so grandma
make part him where as just aunt
go child one after into enough uncle
know eye her so like indeed seem
take woman us though through still feel
see place something since after almost try
come work nothing until over fairly leave
think week anything whether between really call
look case himself before out pretty ride
want point everything although against even love
give grandpa someone nor during a bit sort of
use number themselves like without a little is
find group everyone once before a lot was
tell problem itself unless under were and
ask fact anyone now around and school
can could would will I food love`
  .replaceAll(',', '')
  .replaceAll('.', '')
  .replaceAll(';', '')
  .replaceAll('\n', ' ')
  .split(' ');

let marginX = 100;
let marginY = 60;
let sizeText = 100;
let circleSize = 10;
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

  noLoop();
}

function mouseClicked() {
  save('mySVG.svg');
}
