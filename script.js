const form = document.getElementById("contact-form");

function register(name, email, message) {
    const nome = form.elements["name"].value;
    const mensagem = form.elements["message"].value;
    if (nome.length === 0) {
        alert("Nome obrigatorio");
        return
    } else if (mensagem.length === 0) {
        alert("Mensagem obrigatoria")
        return
    } else {
        alert(`Nome: ${name} Email: ${email} Mensagem: ${message}`);
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    register(name, email, message)

});