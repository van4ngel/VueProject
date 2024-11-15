<template>
  <div class="inicio">
    <h1>Bem-vindo ao Gerenciador de Livros</h1>
    <p>Clique abaixo para cadastrar novos livros:</p>
    <button @click="irParaCadastro">Cadastre livros aqui</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router' // Usando o Vue Router para navegação

const router = useRouter()

function irParaCadastro() {
  router.push('/MeuComponent') // Redireciona para a rota de cadastro
}
</script>

<style scoped>
.inicio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #333;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}
</style>
