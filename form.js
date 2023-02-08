const form = document.getElementById("contact-form");

function register() {
    let nome = document.getElementById("name").value;
    if (nome.length === 0) {
        alert("Nome obrigatorio");
        return;
    }

}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
    alert(`Nome: ${name} Email: ${email} Mensagem: ${message}`);



    register();
});