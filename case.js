function responder_sigla(){
    var estado = sigla_estado.value
    var resposta = `O estado da sigla é ${estado}`
    
    renderizar_sigla(resposta)
}

function renderizar_sigla(){
var estado_sigla = document.getElementById("sigla_estado")
switch (estado_sigla){
    case 0:
        document.getElementById("O estado da sigla é Acre").innerHTML = texto
        break
    case 1:
        document.getElementById("O estado da sigla é Alagoas").innerHTML = texto
        break
    case 2:
        document.getElementById("O estado da sigla é Amapa").innerHTML = texto
        break
    case 3:
        document.getElementById("O estado da sigla é Amazonas").innerHTML = texto
        break
    case 4:
        document.getElementById("O estado da sigla é Bahia").innerHTML = texto
        break
    case 5:
        document.getElementById("O estado da sigla é Ceara").innerHTML = texto
        break    
    case 6:
        document.getElementById("O estado da sigla é Distrito Federal").innerHTML = texto
        break
    case 7:
        document.getElementById("O estado da sigla é Espirito Santo").innerHTML = texto
        break
    case 8:
        document.getElementById("O estado da sigla é Goias").innerHTML = texto
        break
    case 9:     
        document.getElementById("O estado da sigla é Maranhão").innerHTML = texto   
        break
    case 10:
        document.getElementById("O estado da sigla é Mato Grosso").innerHTML = texto
        break
    case 11:
        document.getElementById("O estado da sigla é Mato Grosso do Sul").innerHTML = texto
        break
    case 12:
        document.getElementById("O estado da sigla é Minas Gerais").innerHTML = texto
        break
    case 13:
        document.getElementById("O estado da sigla é Pará").innerHTML = texto
        break
    case 14:
        document.getElementById("O estado da sigla é Paraíba").innerHTML = texto
        break
    case 15:
        document.getElementById("O estado da sigla é Pará").innerHTML = texto
        break
    case 16:
        document.getElementById("O estado da sigla é Pernambuco").innerHTML = texto
        break
    case 17:
        document.getElementById("O estado da sigla é Piauí").innerHTML = texto
        break
    case 18:
        document.getElementById("O estado da sigla é Rio de Janeiro").innerHTML = texto
        break
    case 19:
        document.getElementById("O estado da sigla é Rio Grande do Norte").innerHTML = texto
        break
    case 20:
        document.getElementById("O estado da sigla é Rio Grande do Sul").innerHTML = texto
        break
    case 21:
        document.getElementById("O estado da sigla é Rondônia").innerHTML = texto
        break
    case 22:
        document.getElementById("O estado da sigla é Roraima").innerHTML = texto
        break
    case 23:
        document.getElementById("O estado da sigla é Santa Catarina").innerHTML = texto
        break
    case 24:
        document.getElementById("O estado da sigla é São Paulo").innerHTML = texto
        break
    case 25:
        document.getElementById("O estado da sigla é Sergipe").innerHTML = texto
        break
    case 26:
        document.getElementById("O estado da sigla é Tocantins").innerHTML = texto
        break
    
    }

}