const url = "http://localhost:3001"

const api = {
  async buscarFilmes() {
    try {
      const response = await axios.get(`${url}/filmes`)
      return await response.data
    }
    catch {
      alert('Erro ao buscar filmes')
      throw error
    }
  },

  async salvarFilme(filme) {
    try {
      const response = await axios.post(`${url}/filmes`, filme)
      return await response.data
    }
    catch {
      alert('Erro ao salvar filme')
      throw error
    }
  },

  async buscarFilmePorId(id) {
    try {
      const response = await axios.get(`${url}/filmes/${id}`)
      return await response.data
    }
    catch {
      alert('Erro ao buscar filme')
      throw error
    }
  },

  async editarFilme(filme) {
    try {
      const response = await axios.put(`${url}/filmes/${filme.id}`, filme)
      return await response.data
    }
    catch {
      alert('Erro ao editar filme')
      throw error
    }
  },

  async excluirFilme(id) {
    try {
      await axios.delete(`${url}/filmes/${id}`)
    }
    catch {
      alert('Erro ao excluir um filme')
      throw error
    }
  },

  async buscarFilmePorTermo(termo) {
    try {
      const termoMinusculo = termo.toLowerCase()
      const response = await axios.get(`${url}/filmes`, termoMinusculo)
      const filmes = response.data

      const filmeFiltrado = filmes.filter(filme => {
        return filme.nome.toLowerCase().includes(termoMinusculo) || filme.genero.toLowerCase().includes(termoMinusculo)
      })

      return filmeFiltrado
    } catch(error) {
      alert("Erro ao filtrar filme")
      throw error
    }
  },

  async favoritarFilme(id, favorito) {
    try {
      await axios.patch(`${url}/filmes/${id}`, { favorito })
    } catch(error) {
      alert ("Erro ao favoritar filme por id")
    }
  }
}

export default api