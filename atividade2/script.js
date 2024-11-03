document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Aqui você pode enviar os dados para um servidor ou exibir um alerta
    alert(`Mensagem enviada por ${nome}!`);
    this.reset();
});
