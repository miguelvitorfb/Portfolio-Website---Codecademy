 const aboutMe = document.getElementById('about-me')
 const projetos = document.getElementById("portfolios")
 const tecnicidade = document.getElementById("tecnic")
 const contato = document.getElementById("contact")

 const sobreMim = document.getElementById('sobre-mim')
const meusProjetos = document.getElementById('meus-projetos')
const tecnologias = document.getElementById('minhas-tecnologias')
const contatos = document.getElementById('meus-contatos')


 function returno(){
    sobreMim.hidden = false
    meusProjetos.hidden = false
    tecnologias.hidden = false
    contatos.hidden = false
 }
 
function justAboutMe(){
   
  meusProjetos.hidden = true
  tecnologias.hidden = true
  contatos.hidden = true

}
aboutMe.addEventListener('mouseover',justAboutMe)
aboutMe.addEventListener('mouseout',returno)

function justProjects(){
    sobreMim.hidden = true
    tecnologias.hidden = true
    contatos.hidden = true
}
projetos.addEventListener('mouseover',justProjects)
projetos.addEventListener('mouseout',returno)

function justTecnichian(){
    sobreMim.hidden = true
    meusProjetos.hidden = true
    contatos.hidden = true
}
tecnicidade.addEventListener('mouseover',justTecnichian)
tecnicidade.addEventListener('mouseout',returno)

function justContato(){
    sobreMim.hidden = true
    meusProjetos.hidden = true
    tecnologias.hidden = true

}
contato.addEventListener('mouseover',justContato)
contato.addEventListener('mouseout',returno)