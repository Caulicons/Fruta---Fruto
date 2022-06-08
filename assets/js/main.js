const receitas = [
    {nome: 'Tigela de abacate', descrição: 'abacate não é lá muito bom.'},
    {nome: 'Salada de kiwi', descrição: 'O nome é legal.'},
    {nome: 'Mix de vegetais', descrição: 'Ultra saudável.'},
    {nome: 'Pimentões à Juliana', descrição: 'Arde bastante.'},
    {nome: 'Prato oriental', descrição: 'é a mesma coisa do mix de vegetal.'},
    {nome: 'Beterrabas assadas', descrição: 'dios mio.'}
]

const btnReceitas = document.querySelectorAll('[data-receita]')
const popUpReceitas = document.querySelector('.descrição_receita')
const btnFechaPopUp = document.querySelectorAll('.fecha__pop--up')

btnReceitas.forEach( receita => {

            receita.addEventListener('click', () => 
                receitas.forEach( templateReceita => {
                    if(templateReceita.nome == receita.dataset.receita) 
                                mostrandoReceita(templateReceita)
        })
    )
})

btnFechaPopUp.forEach( btn => btn.addEventListener('click', () => popUpReceitas.classList.toggle('model__pop-up')))

function mostrandoReceita(receita) {
    popUpReceitas.classList.toggle('model__pop-up')
    popUpReceitas.children[0].children[1].textContent = receita.nome
    popUpReceitas.children[0].children[2].textContent = receita.descrição
}

document.querySelector('body')
.addEventListener('click', (e) => {
    fechandoPopUp(e.target.className)
})

function fechandoPopUp(nomeElemento) {
    if(nomeElemento== 'descrição_receita pop-up model__pop-up') popUpReceitas.classList.toggle('model__pop-up')
}