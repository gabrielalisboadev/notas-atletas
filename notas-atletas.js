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

for (let i = 0; i < atletas.length; i++) {

  //Pegando as informações de cada atleta

  let atleta = atletas[i];
  
  // Notas e nome de cada atleta

  let notas = atleta.notas;
  let nome = atleta.nome;

  //Ordenando as notas de cada atleta

  notas = notas.sort((a, b) => a-b);

  //Tirando a primeira e a última notas do array de notas ordenado
 
  let notasComputadas = notas.slice(1, 4);

  //Somando as notas
  let soma = 0;

  notasValidas.forEach(function(nota){
    soma = soma + nota;
    return soma;
  })

  // Calculando a média das notas de cada atleta
  let media = soma/notasComputadas.length;
  
  // Exibindo o resultado

  let resultado = `Atleta: ${nome}
Notas Obtidas: ${notas.join(", ")}
Média Válida: ${media}\n`

  console.log(resultado);
  
  
}

