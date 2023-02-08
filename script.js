const form = document.getElementById("contact-form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = form.elements["name"].value
    if (name.length === 0) {
        alert("Nome obrigatório");
        return;
    }
    const email = form.elements["email"].value
    const message = form.elements["message"].value
    if (message.length === 0) {
        alert("Mensagem obrigatório");
        return;
    }
    alert(`Nome: ${name} Email: ${email} Mensagem: ${message}`)




})