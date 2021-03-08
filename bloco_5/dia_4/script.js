// gera uma cor aleatória em hexadecimal
// code by girol
// https://gist.github.com/girol/4a606d5cc6286ce1e9755faa3b7746df
function gera_cor(){
  var hexadecimais = '0123456789ABCDEF';
  var cor = '#';

  // Pega um número aleatório no array acima
  for (var i = 0; i < 6; i++ ) {
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

createColorsBlocks();