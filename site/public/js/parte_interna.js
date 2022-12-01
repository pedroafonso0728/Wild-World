
// -----------Deslogar--------------------

function limparSessao() {

  // aguardar();

  sessionStorage.clear();

  // finalizarAguardar();

  window.location = "../login.html";
}
// desloca



// ------------------Painel------------------------------
function leao1() {
  var teste = leao2
  teste.play()
}

function arara1() {
  var teste = arara2
  teste.play()
}

function ariranha1() {
  var teste = ariranha2
  teste.play()
}

function elefante1() {
  var teste = elefante2
  teste.play()
}

function mico1() {
  var teste = mico2
  teste.play()
}

function tubarao1() {
  var teste = tubarao2
  teste.play()
}

function gorila1() {
  var teste = gorila2
  teste.play()
}

function tartacouro1() {
  var teste = tartacouro2
  teste.play()
}

function antilope1() {
  var teste = antilope2
  teste.play()
}

function orangotango1() {
  var teste = orangotango2
  teste.play()
}

function rino1() {
  var teste = rino2
  teste.play()
}

function lobo1() {
  var teste = lobo2
  teste.play()
}

function tartamarinha1() {
  var teste = tartamarinha2
  teste.play()
}

function macaconarigudo1() {
  var teste = macaconarigudo2
  teste.play()
}

function aguia1() {
  var teste = aguia2
  teste.play()
}

function onca1() {
  var teste = onca2
  teste.play()
}

function tigre1() {
  var teste = tigre2
  teste.play()
}

function jiboia1() {
  var teste = jiboia2
  teste.play()
}



function especiesext() {
  seleçao_especiesext.style.display = ""
  seleçao_mural.style.display = "none"
  seleçao_preservacao.style.display = "none"
  seleçao_grafico.style.display = "none"
}

function mural() {

  seleçao_especiesext.style.display = "none"
  seleçao_mural.style.display = ""
  seleçao_preservacao.style.display = "none"
  seleçao_grafico.style.display = "none"
}

function preservacao() {
  seleçao_especiesext.style.display = "none"
  seleçao_mural.style.display = "none"
  seleçao_preservacao.style.display = ""
  seleçao_grafico.style.display = "none"
}

function grafico() {

  seleçao_especiesext.style.display = "none"
  seleçao_mural.style.display = "none"
  seleçao_preservacao.style.display = "none"
  seleçao_grafico.style.display = ""

}

// -------------Cards-------------------------------------//

var animal_anterior = 0;

function exibir_animal() {

  var lista_animais = [leao, araraAzul, ariranha, elefanteAsiatico, micoLeaoDourado,
    tubaraoBaleia, gorilaDaMontanha, tartarugaDeCouro, antilopeSeiga, orangotango,
    rinoceronteNegro, loboGuara, tartarugaMarinha, macacoNarigudo, aguiaCinzenta, oncaPintada,
    tigre, jiboiaAmarela];

  var lista_escolha = ["leao", "araraAzul", "ariranha", "elefanteAsiatico", "micoLeaoDourado",
    "tubaraoBaleia", "gorilaDaMontanha", "tartarugaDeCouro", "antilopeSeiga", "orangotango",
    "rinoceronteNegro", "loboGuara", "tartarugaMarinha", "macacoNarigudo", "aguiaCinzenta", "oncaPintada",
    "tigre", "jiboiaAmarela"];


  // animal_anterior >= 0 vai permitir que a escolha anterior da lista não apareça,
  // assim podendo fazer com que toda a escolha anterior seja (none).
  if (animal_anterior => 0) {
    lista_animais[animal_anterior].style.display = "none";
  }

  for (var contador = 0; contador < 18; contador++) {

    if (select_animais.value == lista_escolha[contador]) {
      id_texto_boasVindas.style.display = "none";

      lista_animais[contador].style.display = "block";
      animal_anterior = contador;
      // Na escolha de outro animal o contador vai parar de rodar pq no for esta < 18(barramento do for)
      // caso ele escolha o numero 5, não tem pq continuar rodando até o 18, posso colocar para para zera até que chegue o animal
      contador = 18;
    }
  }
}

var voto_valido = 'nao';

function cadastrar() {
  window.onload
  // vareavel global da global
  var id_usuario = sessionStorage.ID_USUARIO;
  // puxando o valor do select
  var animal = select_animais.value;

  if (animal == 'leao' || animal == 'antilopeSeiga' || animal == 'rinoceronteNegro') {
    // savana
    var habitat = 'Savana'
    voto_valido = 'sim';
  } else if (animal == 'araraAzul' || animal == 'elefanteAsiatico' || animal == 'micoLeaoDourado' || animal == 'orangotango' || animal == 'tigre') {
    // floresta
    var habitat = 'Floresta'
    voto_valido = 'sim';
  } else if (animal == 'loboGuara' || animal == 'aguiaCinzenta' || animal == 'jiboiaAmarela') {
    //  cerrado
    var habitat = 'Cerrado'
    voto_valido = 'sim';
  } else if (animal == 'ariranha' || animal == 'oncaPintada' || animal == 'macacoNarigudo') {
    // pantanal
    var habitat = 'Pantanal'
    voto_valido = 'sim';
  } else if (animal == 'tubaraoBaleia' || animal == 'tartarugaDeCouro' || animal == 'tartarugaMarinha') {
    //  mar
    var habitat = 'Mar'
    voto_valido = 'sim';
  } else if (animal == 'gorilaDaMontanha') {
    // montanha
    var habitat = 'Montanhas'
    voto_valido = 'sim';
  }


  // Enviando o valor da nova input
  fetch("/usuarios/cadastro_animal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      animalServer: animal,
      habitatServer: habitat,
      id_server: id_usuario,
    })
  }).then(function (resposta) {

    console.log("resposta: ", resposta);

    if (resposta.ok) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Animal cadastrado!'
      })

    } else {
      throw ("Houve um erro ao tentar realizar o cadastro!");
    }
  }).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });

  return false;
}



// coloca o nome do usuario na tela
b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

let proximaAtualizacao;

window.onload = obterDadosGrafico(), obterHabitats();


// O gráfico é construído com três funções:
// 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gráfico da primeira vez
// 2. plotarGrafico -> Monta o gráfico com os dados trazidos e exibe em tela
// 3. atualizarGrafico -> Atualiza o gráfico, trazendo novamente dados do Banco

// Esta função *obterDadosGrafico* busca os últimos dados inseridos em tabela de medidas.
// para, quando carregar o gráfico da primeira vez, já trazer com vários dados.
// A função *obterDadosGrafico* também invoca a função *plotarGrafico*

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function obterDadosGrafico() {

  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/ultimas`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
        resposta.reverse();

        plotarGrafico(resposta);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {
  console.log('iniciando plotagem do gráfico...');

  // Criando estrutura para plotar gráfico - labels
  let labels = ["Gráfico animais"];

  // Criando estrutura para plotar gráfico - dados

  // Repitindo para mostrar os dados de cada animal separadamente
  let dados = {
    labels: labels,
    datasets: [{
      label: 'Leão',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Arara azul',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Ariranha',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Elefante asiático',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Mico leão dourado',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Tubarao baleia',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'GorilaDa  das montanhas',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Tartaruga de couro',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Antilope seiga',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Orangotango',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Rinoceronte negro',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: ' Lobo guará',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Tartaruga marinha',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Macaco narigudo',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Águia cinzenta',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Onça pintada',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: ' Tigre siberiano',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }, {
      label: 'Jiboia amarela',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 215, 0)',
      backgroundColor: 'rgb(255, 215, 0)',
      // tension: 0.1
    }
    ]
  };
  // fim da repetição


  console.log('----------------------------------------------')
  console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
  console.log(resposta)

  // Inserindo valores recebidos em estrutura para plotar o gráfico
  for (i = 0; i < resposta.length; i++) {
    var registro = resposta[i];
    dados.datasets[0].data.push(registro.leao);
    dados.datasets[1].data.push(registro.araraAzul);
    dados.datasets[2].data.push(registro.ariranha);
    dados.datasets[3].data.push(registro.elefanteAsiatico);
    dados.datasets[4].data.push(registro.micoLeaoDourado);
    dados.datasets[5].data.push(registro.tubaraoBaleia);
    dados.datasets[6].data.push(registro.gorilaDaMontanha);
    dados.datasets[7].data.push(registro.tartarugaDeCouro);
    dados.datasets[8].data.push(registro.antilopeSeiga);
    dados.datasets[9].data.push(registro.orangotango);
    dados.datasets[10].data.push(registro.rinoceronteNegro);
    dados.datasets[11].data.push(registro.loboGuara);
    dados.datasets[12].data.push(registro.tartarugaMarinha);
    dados.datasets[13].data.push(registro.macacoNarigudo);
    dados.datasets[14].data.push(registro.aguiaCinzenta);
    dados.datasets[15].data.push(registro.oncaPintada);
    dados.datasets[16].data.push(registro.tigre);
    dados.datasets[17].data.push(registro.jiboiaAmarela);
  }

  console.log('----------------------------------------------')
  console.log('O gráfico será plotado com os respectivos valores:')
  console.log('Labels:')
  console.log(labels)
  console.log('Dados:')
  console.log(dados.datasets)
  console.log('----------------------------------------------')

  // Criando estrutura para plotar gráfico - config
  const config1 = {
    type: 'bar',
    data: dados,
    options: {
      // plugins:{
      // legend: {
      // display: false
      // }
      // }
    }
  };

  // Adicionando gráfico criado em div na tela
  let myChart = new Chart(
    document.getElementById('myChart1'),
    config1
  );

  setTimeout(() => atualizarGrafico(dados, myChart), 2000);
}


// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGrafico(dados, myChart) {

  fetch(`/medidas/tempo-real`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (novoRegistro) {

        console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
        console.log(`Dados atuais do gráfico:`);
        console.log(dados);


        if (voto_valido == 'nao') {

        } else {
          // tirando e colocando valores no gráfico
          voto_valido = 'nao'

          dados.datasets[0].data.shift();  // apagar o primeiro de umidade
          dados.datasets[0].data.push(novoRegistro[0].leao); // incluir uma nova medida de umidade

          dados.datasets[1].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[1].data.push(novoRegistro[0].araraAzul); // incluir uma nova medida de temperatura

          dados.datasets[2].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[2].data.push(novoRegistro[0].ariranha);

          dados.datasets[3].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[3].data.push(novoRegistro[0].elefanteAsiatico);

          dados.datasets[4].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[4].data.push(novoRegistro[0].micoLeaoDourado);

          dados.datasets[5].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[5].data.push(novoRegistro[0].tubaraoBaleia);

          dados.datasets[6].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[6].data.push(novoRegistro[0].gorilaDaMontanha);

          dados.datasets[7].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[7].data.push(novoRegistro[0].tartarugaDeCouro);

          dados.datasets[8].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[8].data.push(novoRegistro[0].antilopeSeiga);

          dados.datasets[9].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[9].data.push(novoRegistro[0].orangotango);

          dados.datasets[10].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[10].data.push(novoRegistro[0].rinoceronteNegro);

          dados.datasets[11].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[11].data.push(novoRegistro[0].loboGuara);

          dados.datasets[12].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[12].data.push(novoRegistro[0].tartarugaMarinha);

          dados.datasets[13].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[13].data.push(novoRegistro[0].macacoNarigudo);

          dados.datasets[14].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[14].data.push(novoRegistro[0].aguiaCinzenta);

          dados.datasets[15].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[15].data.push(novoRegistro[0].oncaPintada);

          dados.datasets[16].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[16].data.push(novoRegistro[0].tigre);

          dados.datasets[17].data.shift();  // apagar o primeiro de temperatura
          dados.datasets[17].data.push(novoRegistro[0].jiboiaAmarela);
          myChart.update();
        }




        // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
        proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, myChart), 2000);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
      // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
      proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, myChart), 2000);
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

// --------graficos, tela grafico---------------------------------------------


function obterHabitats() {

  if (proximaAtualizacao != undefined) {
    clearTimeout(proximaAtualizacao);
  }

  fetch(`/medidas/habitats`, { cache: 'no-store' }).then(function (response) {
    if (response.ok) {
      response.json().then(function (resposta) {
        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
        resposta.reverse();

        plotarGraficoHabitat(resposta);
      });
    } else {
      console.error('Nenhum dado encontrado ou erro na API');
    }
  })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

// Fetch trás a resposta(dados do banco).
function plotarGraficoHabitat(resposta) {
  var somaTotal = 0;
  // Vai rodar até a quantidade de posições(5).
  // For que junta todos os valores de cada posição e de cada habitat em uma só vareavel.
  for (var i = 0; i < resposta.length; i++) {
    somaTotal += resposta[i].quantidade;
    // Vai devolver o total de cada habitat somado todos em uma unica vareavel.
  }

  var porcentagensHabitat = [];
  for (var i = 0; i < resposta.length; i++) {
    porcentagensHabitat.push(( resposta[i].quantidade / somaTotal * 100.00))

  }

  const labels2 = [
    resposta[5].habitat,
    resposta[4].habitat,
    resposta[3].habitat,
    resposta[2].habitat,
    resposta[1].habitat,
    resposta[0].habitat
  ];

  const data2 = {
    labels: labels2,
    datasets: [{
      label: 'Porcentagem de habitats escolhidos',
      backgroundColor: 'rgb(244, 196, 48)',
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: ["yellow", "red", "green"],
      data: [porcentagensHabitat[5].toFixed(1), porcentagensHabitat[4].toFixed(1),
      porcentagensHabitat[3].toFixed(1), porcentagensHabitat[2].toFixed(1),
      porcentagensHabitat[1].toFixed(1), porcentagensHabitat[0].toFixed(1)],
    },
    ]
  };

  const config2 = {
    type: 'pie',
    data: data2,
    options: {}
  };

  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config2
  );

  const labels = [
    resposta[5].habitat,
    resposta[4].habitat,
    resposta[3].habitat,
    resposta[2].habitat,
    resposta[1].habitat,
    resposta[0].habitat
  ];

  resposta[5].habitat,
    resposta[4].habitat,
    resposta[3].habitat,
    resposta[2].habitat,
    resposta[1].habitat,
    resposta[0].habitat



  const data = {
    labels: labels,
    datasets: [{
      label: 'Porcentagem de habitats escolhidos',
      backgroundColor: 'rgb(244, 196, 48)',
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: ["yellow", "red", "green"],
      data: [porcentagensHabitat[5].toFixed(1), porcentagensHabitat[4].toFixed(1),
      porcentagensHabitat[3].toFixed(1), porcentagensHabitat[2].toFixed(1),
      porcentagensHabitat[1].toFixed(1), porcentagensHabitat[0].toFixed(1)],
    },
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

}

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