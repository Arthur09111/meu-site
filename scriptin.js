document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("meuBotao");  // Captura o botão
    const input = document.getElementById("meuInput");  // Captura o campo de input

    botao.addEventListener("click", function() {
        let query = input.value;  // Pega o texto digitado
        if (query) {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" + encodeURIComponent(query);  // Redireciona para o Google com o texto digitado
        } else {
            alert("Digita algo fi da pexte burro!");  // Exibe um alerta caso o campo esteja vazio
        }
    });
});
