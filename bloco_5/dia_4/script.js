let paragraph = document.querySelector('.paragraph');
let currentTextSize = parseFloat(
  window.getComputedStyle(paragraph, null).getPropertyValue('font-size')
);
let currentLineSize = parseFloat(
  window.getComputedStyle(paragraph, null).getPropertyValue('line-height')
);

// gera uma cor aleatória em hexadecimal
// code by girol
// https://gist.github.com/girol/4a606d5cc6286ce1e9755faa3b7746df
function gera_cor() {
  var hexadecimais = '0123456789ABCDEF';
  var cor = '#';

  // Pega um número aleatório no array acima
  for (var i = 0; i < 6; i++) {
    //E concatena à variável cor
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function createColorsBlocks() {
  for (let i = 0; i < 5; i += 1) {
    let divColorBg = document.createElement('div');
    let divColorTx = document.createElement('div');
    divColorBg.className = 'color';
    divColorTx.className = 'color';
    divColorBg.style.backgroundColor = gera_cor();
    divColorTx.style.backgroundColor = gera_cor();
    document.querySelector('.background-color').appendChild(divColorBg);
    document.querySelector('.text-color').appendChild(divColorTx);
  }
}

function decrementFontSize() {
    currentTextSize -= 1;
    document.querySelector('.current-value-font').innerHTML = currentTextSize;
    document.querySelector('.paragraph').style.fontSize = currentTextSize + 'px';
}

function incrementFontSize() {
    currentTextSize += 1;
    document.querySelector('.current-value-font').innerHTML = currentTextSize;
    document.querySelector('.paragraph').style.fontSize = currentTextSize + 'px';
}

function decrementLineHeight() {
  currentLineSize -= 1;
  document.querySelector('.current-value-font').innerHTML = currentLineSize;
  document.querySelector('.paragraph').style.fontSize = currentLineSize + 'px';
}

function incrementLineHeight() {
  currentLineSize += 1;
  document.querySelector('.current-value-line').innerHTML = currentLineSize;
  document.querySelector('.paragraph').style.lineHeight = currentLineSize + 'px';
}


function changeFontSize() {
  let button1 = document.getElementById('button1');
  let button2 = document.getElementById('button2');
  document.querySelector('.current-value-font').innerHTML = currentTextSize;
  button1.addEventListener('click', decrementFontSize);
  button2.addEventListener('click', incrementFontSize);
}

function changeLineHeight() {
  let button1 = document.getElementById('button1');
  let button2 = document.getElementById('button2');
  document.querySelector('.current-value-line').innerHTML = currentLineSize;
  button1.addEventListener('click', decrementLineHeight);
  button2.addEventListener('click', incrementLineHeight);
}

createColorsBlocks();
changeFontSize();
changeLineHeight();
