
// ---------login------------------------------
function entrar() {
    // aguardar();
  
    var emailVar = email2.value;
    var senhaVar = senha2.value;
  
    if (emailVar == "" || senhaVar == "") {

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
        icon: 'error',
        title: 'Todos os campos em branco'
      })
        // cardErro.style.display = "block"
        // mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }
  
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
  
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
  
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
            title: 'Bora mergulhar!'
          })

            console.log(resposta);
  
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
  
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;
  
                setTimeout(function () {
                    window.location = "./bla.html";
                }, 1000); // apenas para exibir o loading
  
            });
  
        } else {
  
            console.log("Houve um erro ao tentar realizar o login!");
  
            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }
  
    }).catch(function (erro) {
        console.log(erro);
    })
  
    return false;
  }
  
  
  function cadastrar() {
    aguardar();
  
    //Recupere o valor da nova input pelo nome do id
    // Agora v?? para o m??todo fetch logo abaixo
    var nomeVar = nome.value;
    var emailVar = email2.value;
    var senhaVar = senha2.value;
    var confirmacaoSenhaVar = confirmaSenha.value;
  
    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
  
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }
  
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora v?? para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
  
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
            cardErro.style.display = "block";
  
            mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
            setTimeout(() => {
                window.location = "login.html";
            }, "2000")
            
            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });
  
    return false;
  }
  
  function sumirMensagem() {
    cardErro.style.display = "none"
  }
  
  
  function validarEmail() {
      const email = document.getElementById("email");
    
      msgErro.innerHTML = ``;
    
      //Verificar se o email est?? dentro do intervalo de 6 e 85
      if (email2.value.length < 6 || email2.value.length > 85) {
        msgErro.innerHTML = `<span style='color:red'>Seu email deve ter mais de 6 letras e no m??ximo 85</span>`;
        return false;
      }
        //Verificar se o email n??o contem nenhum caracter especial que n??o ?? aceito
        else if (email2.value.indexOf("!") >= 0 ||email2.value.indexOf("#") >= 0 ||email2.value.indexOf("$") >= 0 ||email2.value.indexOf("%") >= 0 ||email2.value.indexOf("&") >= 0 ||email2.value.indexOf("*") >= 0 ||email2.value.indexOf("(") >= 0 ||email2.value.indexOf(")") >= 0 ||email2.value.indexOf("-") >= 0 ||email2.value.indexOf("_") >= 0 ||email2.value.indexOf("=") >= 0 ||email2.value.indexOf("+") >= 0 ||email2.value.indexOf("'") >= 0 ||email2.value.indexOf("??") >= 0 ||email2.value.indexOf("`") >= 0 ||email2.value.indexOf("{") >= 0 ||email2.value.indexOf("[") >= 0 ||email2.value.indexOf("}") >= 0 ||email2.value.indexOf("]") >= 0 ||email2.value.indexOf("~") >= 0 ||email2.value.indexOf("^") >= 0 ||email2.value.indexOf("?") >= 0 ||email2.value.indexOf("/") >= 0 ||email2.value.indexOf(";") >= 0 ||email2.value.indexOf(":") >= 0 ||email2.value.indexOf(">") >= 0 ||email2.value.indexOf("<") >= 0 ||email2.value.indexOf(",") >= 0 ||email2.value.indexOf("|") >= 0 ||email2.value.indexOf('"') >= 0 ||email2.value.indexOf(" ") >= 0 ||email2.value.indexOf("??") >= 0 ||email2.value.indexOf("??") >= 0) {
          msgErro.innerHTML = `<span style='color:red'>Seu email s?? pode conter letras, n??meros e (.)</span>`;
          return false;
        }
    
        //Verificar se o dominio do email ?? v??lido
        else if (email2.value.indexOf("@") == 0 || email2.value.endsWith("@gmail.com") == false &&email2.value.endsWith("@sptech.school") == false &&email2.value.endsWith("@bandtec.com.br") == false &&email2.value.endsWith("@outlook.com") == false &&email2.value.endsWith("@outlook.com.br") == false &&email2.value.endsWith("@hotmail.com") == false &&email2.value.endsWith("@yahoo.com") == false
        ) {
          msgErro.innerHTML = `<span style='color:red'>Seu email n??o tem um dominio v??lido</span>`;
          return false;
        }
        
        //Mostra na tela que o email ?? valido
        else {
          msgErro.innerHTML = `<span style='color:green'>Seu email ?? v??lido</span>`;
          return true;
      }
    }
    
    //Verificar se a senha digitada ?? forte
    function validarForcaSenha() {
      const password = document.getElementById("senha2");
      msgErro.innerHTML = ``;
    
        //Verificar se a senha possui mais de 7 caracters
      if (password.value.length <= 7) {
        msgErro.innerHTML = `<span style='color:red'>Sua senha ?? muito fraca</span>`;
      return false;
      }
    
        //Verificar se a senha possui alguma letra minuscula.
        else if ( password.value.indexOf("a") < 0  &&  password.value.indexOf("b") < 0  &&  password.value.indexOf("c") < 0  &&  password.value.indexOf("d") < 0  &&  password.value.indexOf("e") < 0  &&  password.value.indexOf("f") < 0  &&  password.value.indexOf("g") < 0  &&  password.value.indexOf("h") < 0  &&  password.value.indexOf("i") < 0  &&  password.value.indexOf("j") < 0  &&  password.value.indexOf("k") < 0  &&  password.value.indexOf("l") < 0  &&  password.value.indexOf("m") < 0  &&  password.value.indexOf("n") < 0  &&  password.value.indexOf("o") < 0  &&  password.value.indexOf("p") < 0  &&  password.value.indexOf("q") < 0  &&  password.value.indexOf("r") < 0  &&  password.value.indexOf("s") < 0  &&  password.value.indexOf("t") < 0  &&  password.value.indexOf("u") < 0  &&  password.value.indexOf("v") < 0  &&  password.value.indexOf("w") < 0  &&  password.value.indexOf("x") < 0  &&  password.value.indexOf("y") < 0  && password.value.indexOf("z") < 0 ){
          msgErro.innerHTML = `<span style='color:red'>Sua senha ?? fraca</span>`;
        return false;
        }
        
        // Verificar se tem letras maisculas 
        else if(password.value.indexOf("A") < 0 && password.value.indexOf("B") < 0 && password.value.indexOf("C") < 0 && password.value.indexOf("D") < 0 && password.value.indexOf("E") < 0 && password.value.indexOf("F") < 0 && password.value.indexOf("G") < 0 && password.value.indexOf("H") < 0 && password.value.indexOf("I") < 0 && password.value.indexOf("J") < 0 && password.value.indexOf("K") < 0 && password.value.indexOf("L") < 0 && password.value.indexOf("M") < 0 && password.value.indexOf("N") < 0 && password.value.indexOf("O") < 0 && password.value.indexOf("P") < 0 && password.value.indexOf("Q") < 0 && password.value.indexOf("R") < 0 && password.value.indexOf("S") < 0 && password.value.indexOf("T") < 0 && password.value.indexOf("U") < 0 && password.value.indexOf("V") < 0 && password.value.indexOf("W") < 0 && password.value.indexOf("X") < 0 && password.value.indexOf("Y") < 0 && password.value.indexOf("Z") < 0){
          msgErro.innerHTML = `<span style='color:yellow'>Sua senha ?? mediana</span>`;
        return false;
        }
        
        //Verificar se a senha possui algum caracter especial.
        else if (password.value.indexOf("!") < 0 && password.value.indexOf("@") < 0 && password.value.indexOf("#") < 0 && password.value.indexOf("$") < 0 && password.value.indexOf("%") < 0 && password.value.indexOf("&") < 0 && password.value.indexOf("*") < 0 && password.value.indexOf("(") < 0 && password.value.indexOf(")") < 0 && password.value.indexOf("-") < 0 && password.value.indexOf("_") < 0 && password.value.indexOf("=") < 0 && password.value.indexOf("+") < 0 && password.value.indexOf("'") < 0 && password.value.indexOf("??") < 0 && password.value.indexOf("`") < 0 && password.value.indexOf("{") < 0 && password.value.indexOf("[") < 0 && password.value.indexOf("}") < 0 && password.value.indexOf("]") < 0 && password.value.indexOf("~") < 0 && password.value.indexOf("^") < 0 && password.value.indexOf("?") < 0 && password.value.indexOf("/") < 0 && password.value.indexOf(";") < 0 && password.value.indexOf(":") < 0 && password.value.indexOf(">") < 0 && password.value.indexOf("<") < 0 && password.value.indexOf(",") < 0 && password.value.indexOf("|") < 0 && password.value.indexOf('"') < 0  && password.value.indexOf(".") < 0 && password.value.indexOf("??") < 0 ) {
          msgErro.innerHTML=`<span style="color:yellow">Sua senha est?? ficando forte</span>`
        return false;
      }
    
        //Mostra na tela que a senha ?? forte
        else {
          msgErro.innerHTML = `<span style='color:green'>Sua senha ?? forte</span>`;
        return true;
      }
    }
    
    //Verificar se a senha digitada no repetir senha ?? igual a primeira senha digitada
    function validarConfirmarSenha() {
      const senha = document.getElementById("senha2");
      const confirmaSenha = document.getElementById("confirmaSenha");
      msgErro.innerHTML = ``;
    
      //Verifica se as senhas s??o diferentes
      if (senha2.value != confirmaSenha.value) {
        msgErro.innerHTML = `<span style='color:red'>Suas senhas n??o coincidem</span>`;
        return false;
      }
      
        //Mostra na tela que as senhas s??o iguais
        else {
          msgErro.innerHTML = `<span style='color:green'>Suas senhas coincidem</span>`;
          return true;
      }
    }
    
    // Caixa checkbox - Mostrar a senha digitada
    function mostrarSenha() {
      const mostrar1 = document.getElementById("senha2");
      const mostrar2 = document.getElementById("confirmaSenha");
    
      // Se o bot??o for selecionado, ele mostrar?? a senha
      if (mostrar1.type == "password") {
        mostrar1.type = "text";
        mostrar2.type = "text";
      }
    
        // Se o bot??o for desselecionado, ele esconder?? a senha
        else {
          mostrar1.type = "password";
          mostrar2.type = "password";
      }
    }
    
    //Bot??o continuar - Verificar se todos os campos foram preenchidos corretamente
    function validarSenha() {
      const email = document.getElementById("Email2");
      const senha = document.getElementById("senha2");
      const confirmaSenha = document.getElementById("confirmaSenha");
    
      //Verifica se o usu??rio preencheu todos os campos
      if (email2.value == "" || senha2.value == "" || confirmaSenha.value == "") {
        msgErro.innerHTML = `<span style='color:red'>Voc?? deve preencher todos os campos antes de seguir para a pr??xima tela.</span>`;
      }
        //Verifica se algum campo digitado ?? inv??lido
        else if(validarEmail() == false || validarForcaSenha() == false || validarConfirmarSenha() == false){
          msgErro.innerHTML = `<span style='color:red'>Um dos seus campos ?? inv??lido.</span>`;
        }
    
        //Redireciona o cliente para a pr??xima p??gina de cadastro
        else {
          window.location.href = "./dados.html";
        }
    }
  
  
    function validarEmail2() {
      const email = document.getElementById("email2");
    
      msgErro2.innerHTML = ``;
    
      //Verificar se o email est?? dentro do intervalo de 6 e 85
      if (email2.value.length < 6 || email2.value.length > 85) {
        msgErro2.innerHTML = `<span style='color:red'>Seu email deve ter mais de 6 letras e no m??ximo 85</span>`;
        return false;
      }
        //Verificar se o email n??o contem nenhum caracter especial que n??o ?? aceito
        else if (email2.value.indexOf("!") >= 0 ||email2.value.indexOf("#") >= 0 ||email2.value.indexOf("$") >= 0 ||email2.value.indexOf("%") >= 0 ||email2.value.indexOf("&") >= 0 ||email2.value.indexOf("*") >= 0 ||email2.value.indexOf("(") >= 0 ||email2.value.indexOf(")") >= 0 ||email2.value.indexOf("-") >= 0 ||email2.value.indexOf("_") >= 0 ||email2.value.indexOf("=") >= 0 ||email2.value.indexOf("+") >= 0 ||email2.value.indexOf("'") >= 0 ||email2.value.indexOf("??") >= 0 ||email2.value.indexOf("`") >= 0 ||email2.value.indexOf("{") >= 0 ||email2.value.indexOf("[") >= 0 ||email2.value.indexOf("}") >= 0 ||email2.value.indexOf("]") >= 0 ||email2.value.indexOf("~") >= 0 ||email2.value.indexOf("^") >= 0 ||email2.value.indexOf("?") >= 0 ||email2.value.indexOf("/") >= 0 ||email2.value.indexOf(";") >= 0 ||email2.value.indexOf(":") >= 0 ||email2.value.indexOf(">") >= 0 ||email2.value.indexOf("<") >= 0 ||email2.value.indexOf(",") >= 0 ||email2.value.indexOf("|") >= 0 ||email2.value.indexOf('"') >= 0 ||email2.value.indexOf(" ") >= 0 ||email2.value.indexOf("??") >= 0 ||email2.value.indexOf("??") >= 0) {
          msgErro2.innerHTML = `<span style='color:red'>Seu email s?? pode conter letras, n??meros e (.)</span>`;
          return false;
        }
    
        //Verificar se o dominio do email ?? v??lido
        else if (email2.value.indexOf("@") == 0 || email2.value.endsWith("@gmail.com") == false &&email2.value.endsWith("@sptech.school") == false &&email2.value.endsWith("@bandtec.com.br") == false &&email2.value.endsWith("@outlook.com") == false &&email2.value.endsWith("@outlook.com.br") == false &&email2.value.endsWith("@hotmail.com") == false &&email2.value.endsWith("@yahoo.com") == false
        ) {
          msgErro2.innerHTML = `<span style='color:red'>Seu email n??o tem um dominio v??lido</span>`;
          return false;
        }
        
        //Mostra na tela que o email ?? valido
        else {
          msgErro2.innerHTML = `<span style='color:green'>Seu email ?? v??lido</span>`;
          return true;
      }
    }
    
    //Verificar se a senha digitada ?? forte
    function validarForcaSenha2() {
      const password = document.getElementById("senha2");
      msgErro2.innerHTML = ``;
    
        //Verificar se a senha possui mais de 7 caracters
      if (password.value.length <= 7) {
        msgErro2.innerHTML = `<span style='color:red'>Sua senha ?? muito fraca</span>`;
      return false;
      }
    
        //Verificar se a senha possui alguma letra minuscula.
        else if ( password.value.indexOf("a") < 0  &&  password.value.indexOf("b") < 0  &&  password.value.indexOf("c") < 0  &&  password.value.indexOf("d") < 0  &&  password.value.indexOf("e") < 0  &&  password.value.indexOf("f") < 0  &&  password.value.indexOf("g") < 0  &&  password.value.indexOf("h") < 0  &&  password.value.indexOf("i") < 0  &&  password.value.indexOf("j") < 0  &&  password.value.indexOf("k") < 0  &&  password.value.indexOf("l") < 0  &&  password.value.indexOf("m") < 0  &&  password.value.indexOf("n") < 0  &&  password.value.indexOf("o") < 0  &&  password.value.indexOf("p") < 0  &&  password.value.indexOf("q") < 0  &&  password.value.indexOf("r") < 0  &&  password.value.indexOf("s") < 0  &&  password.value.indexOf("t") < 0  &&  password.value.indexOf("u") < 0  &&  password.value.indexOf("v") < 0  &&  password.value.indexOf("w") < 0  &&  password.value.indexOf("x") < 0  &&  password.value.indexOf("y") < 0  && password.value.indexOf("z") < 0 ){
          msgErro2.innerHTML = `<span style='color:red'>Sua senha ?? fraca</span>`;
        return false;
        }
        
        // Verificar se tem letras maisculas 
        else if(password.value.indexOf("A") < 0 && password.value.indexOf("B") < 0 && password.value.indexOf("C") < 0 && password.value.indexOf("D") < 0 && password.value.indexOf("E") < 0 && password.value.indexOf("F") < 0 && password.value.indexOf("G") < 0 && password.value.indexOf("H") < 0 && password.value.indexOf("I") < 0 && password.value.indexOf("J") < 0 && password.value.indexOf("K") < 0 && password.value.indexOf("L") < 0 && password.value.indexOf("M") < 0 && password.value.indexOf("N") < 0 && password.value.indexOf("O") < 0 && password.value.indexOf("P") < 0 && password.value.indexOf("Q") < 0 && password.value.indexOf("R") < 0 && password.value.indexOf("S") < 0 && password.value.indexOf("T") < 0 && password.value.indexOf("U") < 0 && password.value.indexOf("V") < 0 && password.value.indexOf("W") < 0 && password.value.indexOf("X") < 0 && password.value.indexOf("Y") < 0 && password.value.indexOf("Z") < 0){
          msgErro2.innerHTML = `<span style='color:yellow'>Sua senha ?? mediana</span>`;
        return false;
        }
        
        //Verificar se a senha possui algum caracter especial.
        else if (password.value.indexOf("!") < 0 && password.value.indexOf("@") < 0 && password.value.indexOf("#") < 0 && password.value.indexOf("$") < 0 && password.value.indexOf("%") < 0 && password.value.indexOf("&") < 0 && password.value.indexOf("*") < 0 && password.value.indexOf("(") < 0 && password.value.indexOf(")") < 0 && password.value.indexOf("-") < 0 && password.value.indexOf("_") < 0 && password.value.indexOf("=") < 0 && password.value.indexOf("+") < 0 && password.value.indexOf("'") < 0 && password.value.indexOf("??") < 0 && password.value.indexOf("`") < 0 && password.value.indexOf("{") < 0 && password.value.indexOf("[") < 0 && password.value.indexOf("}") < 0 && password.value.indexOf("]") < 0 && password.value.indexOf("~") < 0 && password.value.indexOf("^") < 0 && password.value.indexOf("?") < 0 && password.value.indexOf("/") < 0 && password.value.indexOf(";") < 0 && password.value.indexOf(":") < 0 && password.value.indexOf(">") < 0 && password.value.indexOf("<") < 0 && password.value.indexOf(",") < 0 && password.value.indexOf("|") < 0 && password.value.indexOf('"') < 0  && password.value.indexOf(".") < 0 && password.value.indexOf("??") < 0 ) {
          msgErro2.innerHTML=`<span style="color:yellow">Sua senha est?? ficando forte</span>`
        return false;
      }
    
        //Mostra na tela que a senha ?? forte
        else {
          msgErro2.innerHTML = `<span style='color:green'>Sua senha ?? forte</span>`;
        return true;
      }
    }
    
    
    
    // Caixa checkbox - Mostrar a senha digitada
    function mostrarSenha2() {
      const mostrar1 = document.getElementById("senha2");
      const mostrar2 = document.getElementById("confirmaSenha2");
    
      // Se o bot??o for selecionado, ele mostrar?? a senha
      if (mostrar1.type == "password") {
        mostrar1.type = "text";
        // mostrar2.type = "text";
      }
    
        // Se o bot??o for desselecionado, ele esconder?? a senha
        else {
          mostrar1.type = "password";
          mostrar2.type = "password";
      }
    }
    
    //Bot??o continuar - Verificar se todos os campos foram preenchidos corretamente
    function validarSenha2() {
      const email = document.getElementById("Email2");
      const senha = document.getElementById("senha2");
      
    
      //Verifica se o usu??rio preencheu todos os campos
      if (email.value == "" || senha2.value == "") {
        msgErro.innerHTML = `<span style='color:red'>Voc?? deve preencher todos os campos antes de seguir para a pr??xima tela.</span>`;
      }
        //Verifica se algum campo digitado ?? inv??lido
        else if(validarEmail2() == false || validarForcaSenha2() == false){
          msgErro2.innerHTML = `<span style='color:red'>Um dos seus campos ?? inv??lido.</span>`;
        }
    
        //Redireciona o cliente para a pr??xima p??gina de cadastro
        else {
          window.location.href = "./dados.html";
        }
    }
  
    