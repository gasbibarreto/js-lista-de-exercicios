import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarFilmes()

  const formularioFilme = document.getElementById("filme-form")
  const botaoCancelar = document.getElementById("botao-cancelar")
  const campoBusca = document.getElementById("campo-busca")

  formularioFilme.addEventListener("submit", manipularSubmissaoFormulario)
  botaoCancelar.addEventListener("click", manipularCancelamento)
  campoBusca.addEventListener("input", manipularBusca)
})

async function manipularSubmissaoFormulario(event) {
  event.preventDefault()
  const id = document.getElementById("filme-id").value
  const nome = document.getElementById("filme-nome").value
  const genero = document.getElementById("filme-genero").value

  try {
    if (id) {
      await api.editarFilme({ id, nome, genero })
    } else {
      await api.salvarFilme({ nome, genero })
    }
    ui.renderizarFilmes()
  } catch {
    alert("Erro ao salvar filme")
  }
}

function manipularCancelamento() {
  ui.limparFormulario()
}

async function manipularBusca() {
  const termoBusca = document.getElementById("campo-busca").value
  try {
    const filmeFiltrados = await api.buscarFilmePorTermo(termoBusca)
    ui.renderizarFilmes(filmeFiltrados)
  } catch (error) {
    alert("Erro ao realizar busca")
    throw error
  }
}