let linhas = ''
let c = 0
let notas = []
let entradas = []
const aprovado = '<span class="resultado_ap">Aprovado</span>'
const reprovado = '<span class="resultado_rep">Reprovado</span>'
const notaMinima = Number(prompt('Digite a nota mínima:'))
const form = document.getElementsByTagName('form')[0]

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaEatualiza()
    atualizaFinal()
})


let somaNotas = 0

function adicionaEatualiza() {    
    const atividade = document.querySelector('.attv')
    const nota = document.querySelector('.nota')
    const imgaprovado = '<img src="images/aprovado.png">'
    const imgreprovado = '<img src="images/reprovado.png">'

    /**Espaço da média */
    

    /**FIM */
    if (entradas.includes(atividade.value)) {
        alert(`A atividade ${atividade.value} já foi inserida`)
    } else {
        let linha = '<tr>'
        linha += `<td>${atividade.value}</td>`
        linha += `<td class="sla">${nota.value}</td>`
        linha += `<td>${nota.value >= notaMinima ? imgaprovado : imgreprovado}</td>`
        linha += '</tr>'
        linhas += linha /* Também funciona tudo dentro da variável de uma vez só*/

        entradas.push(atividade.value)
        notas.push(Number(nota.value))

    }
    atividade.value = ''
    nota.value = ''

    const tabelaCorpo = document.getElementsByTagName('tbody')[0]
    tabelaCorpo.innerHTML = linhas
}

function atualizaFinal(){
    const mediaFinal = media()
    const resultado = document.querySelector('.resultado')
    const resultadoValor = document.getElementsByClassName('valor-media')[0]

    resultadoValor.innerHTML = mediaFinal.toFixed(2)

    resultado.innerHTML = mediaFinal >= notaMinima ? aprovado : reprovado

}

function media() {
    let somaNotas = 0
    for (let i = 0;i < notas.length; i++) {
        somaNotas += notas[i] /**Não pode ser o <= pq quando chegar o i = notas.length, não tem indíce pra colocar no notas[i] */
    }
    return somaNotas / notas.length
}