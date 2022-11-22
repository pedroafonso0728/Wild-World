
function especiesext() {
  seleçao_especiesext.style.display = ""
  seleçao_mural.style.display = "none"
  seleçao_grafico.style.display = "none"
}

function mural() {

  seleçao_especiesext.style.display = "none"
  seleçao_mural.style.display = ""
  seleçao_grafico.style.display = "none"
}

function grafico() {
  seleçao_especiesext.style.display = "none"
  seleçao_mural.style.display = "none"
  seleçao_grafico.style.display = ""
}


var validacao = 0;
var animal_anterior;

function exibir_animal() {
  
  var lista_animais = [leao, araraAzul, ariranha, elefanteAsiatico, micoLeaoDourado,
    tubaraoBaleia, gorilaDaMontanha, tartarugaDeCouro, antilopeSeiga, orangotango,
    rinoceronte, loboGuara, tartarugaMarinha, macacoNarigudo, aguiaCinzenta, oncaPintada, 
    tigre, jiboiaAmarela];

    if (validacao > 0){
      lista_animais[animal_anterior].style.display = "none";
    }

  for (var contador = 0; contador < select_animais.length; contador++) {

    if (select_animais.value == contador) {
      id_texto_boasVindas.style.display = "none"; 
      lista_animais[contador].style.display = "block";
      animal_anterior = contador;
      validacao++
    }
  }
}


// texto.style.display = 'none'
      // leao.style.display = 'block'
      // araraAzul.style.display = 'block'
      // ariranha.style.display = 'block'
      // elefanteAsiatico.style.display = 'block'
      // micoLeaoDourado.style.display = 'block'
      // tubaraoBaleia.style.display = 'block'
      // gorilaDaMontanha.style.display = 'block'
      // tartarugaDeCouro.style.display = 'block'
      // antilopeSeiga.style.display = 'block'
      // orangotango.style.display = 'block'
      // rinoceronte.style.display = 'block'
      // loboGuara.style.display = 'block'
      // tartarugaMarinha.style.display = 'block'
      // macacoNarigudo.style.display = 'block'
      // aguiaCinzenta.style.display = 'block'
      // oncaPintada.style.display = 'block'
      // tigre.style.display = 'block'
      // jiboiaAmarela.style.display = 'block'

//   else if (animais == 'araraAzul') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'block'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'ariranha') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'block'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'elefanteAsiatico') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'block'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'micoLeaoDourado') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'block'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'tubaraoBaleia') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'block'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'gorilaDaMontanha') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'block'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'tartarugaDeCouro') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'block'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'antilopeSeiga') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'block'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'orangotango') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'block'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'rinoceronte') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'block'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'loboGuara') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'block'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'tartarugaMarinha') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'block'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'macacoNarigudo') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'block'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'
//   }

//   else if (animais == 'aguiaCinzenta') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'block'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'

//   }

//   else if (animais == 'oncaPintada') {
//       texto.style.di
//       splay = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'block'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'none'

//   }

//   else if (animais == 'tigre') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'block'
//       jiboiaAmarela.style.display = 'none'
//   }

  // else if (animais == 'jiboiaAmarela') {
//       texto.style.display = 'none'
//       leao.style.display = 'none'
//       araraAzul.style.display = 'none'
//       ariranha.style.display = 'none'
//       elefanteAsiatico.style.display = 'none'
//       micoLeaoDourado.style.display = 'none'
//       tubaraoBaleia.style.display = 'none'
//       gorilaDaMontanha.style.display = 'none'
//       tartarugaDeCouro.style.display = 'none'
//       antilopeSeiga.style.display = 'none'
//       orangotango.style.display = 'none'
//       rinoceronte.style.display = 'none'
//       loboGuara.style.display = 'none'
//       tartarugaMarinha.style.display = 'none'
//       macacoNarigudo.style.display = 'none'
//       aguiaCinzenta.style.display = 'none'
//       oncaPintada.style.display = 'none'
//       tigre.style.display = 'none'
//       jiboiaAmarela.style.display = 'block'

//   }

// }