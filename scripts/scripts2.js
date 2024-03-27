const form = document.querySelector('.meuForm')
const lista = document.querySelector('.lista')
const liPaciente = lista.querySelectorAll('li')


function adicionarPaciente() {
    let paciente = form.pacienteC.value
    const data = new Date().toLocaleString()
    if (form.urgencia.checked === true) {
        paciente += ' - Urgência'

    }

    let novoPaciente = document.createElement('li')
    novoPaciente.textContent = `${paciente} - Horario de chegada: ${data}`
    lista.appendChild(novoPaciente)


}
function limpar() {
    form.pacienteC.value = ``
    form.urgencia.checked = false
}

function atender() {
  
}



form.atender.addEventListener("click", () => {
    atender()
    limpar()
})

form.addEventListener("submit", (e) => { //submit do formulario para envio do nome do paciente e acrescentar em lista
    e.preventDefault();
    adicionarPaciente()
    limpar()
})