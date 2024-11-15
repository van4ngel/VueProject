<template>
  <div class="lista-livros">
    <h1>Lista de Livros Cadastrados</h1>
    
    <ul v-if="livros.length > 0">
      <li v-for="(livro, index) in livros" :key="index">
        {{ livro.autor }} - {{ livro.descricao }} ({{ livro.categoria }})
        <button @click="removerLivro(index)">Deletar</button>
      </li>
    </ul>
    
    <p v-else>Nenhum livro cadastrado.</p>

    <button @click="voltarParaCadastro">Voltar para o Cadastro</button>
  </div>
</template>

<script setup>
import { useLivrosStore } from '../stores/livros'  // Importando o store para acessar o estado global de livros
import { useRouter } from 'vue-router'

const livrosStore = useLivrosStore()  // Usando o Pinia para acessar os livros
const router = useRouter()

// Acessando a lista de livros no Pinia
const livros = livrosStore.livros

// Função para remover um livro
function removerLivro(index) {
  livrosStore.removerLivro(index)  // Remove o livro do store
}

// Função para voltar para o cadastro
function voltarParaCadastro() {
  router.push('/MeuComponent')  // Navega para a tela de cadastro
}
</script>

<style scoped>
.lista-livros {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border-bottom: none;
}

button {
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
}

p {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
}

button {
  margin-top: 20px;
  background-color: #007bff;
}

button:hover {
  background-color: #0056b3;
}
</style>
