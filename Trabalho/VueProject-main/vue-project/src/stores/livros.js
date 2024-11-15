import { defineStore } from 'pinia'

export const useLivrosStore = defineStore('livros', {
  state: () => ({
    livros: []  // Estado que irá armazenar os livros
  }),
  actions: {
    adicionarLivro(novoLivro) {
      this.livros.push(novoLivro)  // Adiciona um novo livro ao estado
    },
    removerLivro(index) {
      this.livros.splice(index, 1)  // Remove o livro do estado pelo índice
    }
  }
})
