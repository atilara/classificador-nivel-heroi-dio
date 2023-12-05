const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function obterEntrada(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, resolve);
  });
}

async function main() {
  do {
    // 1. Solicite ao usuário que insira o nome do herói
    var nomeHeroi = await obterEntrada("Digite o nome do herói: ");

    // 2. Solicite ao usuário que insira a quantidade de experiência (XP) do herói
    var xpHeroi = parseInt(
      await obterEntrada("Digite a quantidade de experiência (XP) do herói: "),
    );

    // Verifique se a entrada de XP é um número válido
    if (isNaN(xpHeroi)) {
      console.log(
        "Por favor, insira um valor numérico para a experiência do herói.",
      );
    } else {
      // 3. Utilize uma estrutura de decisão para determinar o nível do herói com base na XP
      var nivelHeroi;

      if (xpHeroi < 1000) {
        nivelHeroi = "Ferro";
      } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
        nivelHeroi = "Bronze";
      } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
        nivelHeroi = "Prata";
      } else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
        nivelHeroi = "Ouro";
      } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
        nivelHeroi = "Platina";
      } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
        nivelHeroi = "Ascendente";
      } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
        nivelHeroi = "Imortal";
      } else {
        nivelHeroi = "Radiante";
      }

      // 4. Exiba a mensagem com o nome e o nível do herói
      console.log(
        "O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi,
      );
    }

    // 5. Pergunte ao usuário se deseja encerrar a execução
    var encerrar = await obterEntrada(
      "Deseja encerrar a execução? Digite 'sim' para encerrar.",
    );
  } while (encerrar.toLowerCase() !== "sim");

  rl.close();
}

main();
