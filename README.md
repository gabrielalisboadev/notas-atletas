# 🏅 Projeto: Cálculo de Notas de Atletas

## 📌 Descrição do Projeto

Este projeto foi desenvolvido em **JavaScript** com o objetivo de calcular a **média válida das notas de atletas** em uma competição de ginástica artística.

Na competição, cada atleta é avaliado por **cinco jurados**, e cada jurado fornece uma nota entre **1 e 10**. Para garantir maior justiça na avaliação, a regra da competição determina que:

- A **maior nota deve ser descartada**
- A **menor nota deve ser descartada**
- A **média final deve ser calculada usando apenas as três notas restantes**

A aplicação recebe o **nome do atleta e suas notas**, calcula a média válida e exibe o resultado no console.

---

## 🎯 Objetivo

Criar uma função em JavaScript capaz de:

- Receber uma **lista de atletas**
- Ordenar as notas
- Remover a **maior e a menor**
- Calcular a **média das três notas restantes**
- Exibir o resultado no console

---

## 🗂 Estrutura de Entrada

A aplicação utiliza uma **matriz de objetos**, onde cada objeto representa um atleta:

```javascript
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
