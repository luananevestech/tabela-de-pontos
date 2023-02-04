var luana = {
  nome: "Luana",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};


var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = `
      <tr>
          <td>${luana.nome}</td>
          <td>${luana.vitoria}</td>
          <td>${luana.empate}</td>
          <td>${luana.derrota}</td>
          <td>${luana.pontos}</td>
          <td><button onClick="adicionarVitoria(luana)">Vitória</button></td>
          <td><button onClick="adicionarEmpate(luana)">Empate</button></td>
          <td><button onClick="adicionarDerrota(luana)">Derrota</button></td>
      </tr>
  `;
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  jogador.empate++;
  jogador.pontos++;
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  jogador.derrota++;
  exibirNaTela();
}
