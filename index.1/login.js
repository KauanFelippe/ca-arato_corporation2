const formulario = document.getElementById("formLogin");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Pegando os campos pelo lugar onde estão no formulário
    const nome = document.querySelectorAll(".campo")[0];
    const sobrenome = document.querySelectorAll(".campo")[1];
    const email = document.querySelectorAll(".campo")[2];
    const senha = document.querySelectorAll(".campo")[3];

    let camposVazios = [];

    // Remove as bordas vermelhas
    nome.style.border = "";
    sobrenome.style.border = "";
    email.style.border = "";
    senha.style.border = "";

    // Verifica o nome
    if (nome.value.trim() === "") {
        camposVazios.push("Nome");
        nome.style.border = "2px solid red";
    }

    // Verifica o sobrenome
    if (sobrenome.value.trim() === "") {
        camposVazios.push("Sobrenome");
        sobrenome.style.border = "2px solid red";
    }

    // Verifica o email
    if (email.value.trim() === "") {
        camposVazios.push("E-mail");
        email.style.border = "2px solid red";
    }

    // Verifica a senha vazia
    if (senha.value.trim() === "") {
        camposVazios.push("Senha");
        senha.style.border = "2px solid red";
    }

    // Se existir algum campo vazio
    if (camposVazios.length > 0) {

        mensagem.style.display = "block";
        mensagem.style.backgroundColor = "#f8d7da";
        mensagem.style.color = "#842029";

        mensagem.innerHTML =
            "⚠️ Preencha os seguintes campos: " +
            camposVazios.join(", ") + ".";

        return;
    }

    // Verifica se a senha tem menos de 6 caracteres
    if (senha.value.length < 6) {

        mensagem.style.display = "block";
        mensagem.style.backgroundColor = "#fff3cd";
        mensagem.style.color = "#856404";

        mensagem.innerHTML =
            "🔒 A senha deve ter pelo menos 6 caracteres.";

        senha.style.border = "2px solid red";

        return;
    }

    // Se tudo estiver correto
    mensagem.style.display = "block";
    mensagem.style.backgroundColor = "#d1e7dd";
    mensagem.style.color = "#0f5132";

    mensagem.innerHTML =
        "✅ Login realizado com sucesso!";

});