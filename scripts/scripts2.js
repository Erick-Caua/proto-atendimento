const form = document.querySelector('.meuForm')
const lista = document.querySelector('.lista')
const emAtd = document.querySelector('.emAtendimento')
const listaUrgencia = document.querySelector('.lista-urgencia')
const listaPreferencial = document.querySelector('.lista-preferencial')



function adicionarPaciente() {
    let paciente = form.pacienteC.value
    const data = new Date().toLocaleString()
    const novoPaciente = document.createElement('li')

    if (form.urgencia.checked) {
        paciente += ' - Urgência'
        novoPaciente.textContent = `${paciente} - Horario de chegada: ${data}`
        listaUrgencia.appendChild(novoPaciente)

    } else if(form.preferencial.checked) {
        paciente += ' - Preferencial'
        novoPaciente.textContent = `${paciente} - Horario de chegada: ${data}`
        listaPreferencial.appendChild(novoPaciente)
    }else{
        novoPaciente.textContent = `${paciente} - Horario de chegada: ${data}`
        lista.appendChild(novoPaciente)
    }




}
function limpar() {
    form.pacienteC.value = ``
    form.urgencia.checked = false
    form.preferencial.checked = false
}

function atender() {
    const pacientes = listaUrgencia.querySelectorAll('li')
    const pacientesN = lista.querySelectorAll('li')
    const pacientesP = listaPreferencial.querySelectorAll('li')
    const data = new Date().toLocaleString()

    let pacienteEmAtendimento = ''
    
    if (pacientes.length > 0) {
        pacienteEmAtendimento = `${pacientes[0].textContent} - Horario de atendimento: ${data}`
        pacientes[0].remove()
    } else if (pacientesP.length > 0) {
        pacienteEmAtendimento = `${pacientesP[0].textContent} - Horario de atendimento: ${data}`;
        pacientesP[0].remove();
    } else if(pacientesN.length >0){
        pacienteEmAtendimento = `${pacientesN[0].textContent} - Horario de atendimento: ${data}`;
        pacientesN[0].remove();
    }else{
        pacienteEmAtendimento = `Sem pacientes em espera`
    }
    emAtd.textContent = pacienteEmAtendimento
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