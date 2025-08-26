const frutas = ["maçã", "banana", "laranja", "uva"];

function listar(frutas = []) {
  for (const [i, fruta] of frutas.entries()) {
    console.log(`#${i + 1}: ${fruta.toUpperCase()}`);
  }
}

listar(frutas);

const usuario = { nome: "Ana", contatos: { email: "ana@email.com" } };

const tel = usuario?.contatos?.telefone ?? "não informado";

console.log(`\nUsuária: ${usuario.nome}`);
console.log(`Email: ${usuario.contatos.email}`);
console.log(`Telefone: ${tel}`);

const busca = "banana";
console.log(`\nA lista contém "${busca}"?`, frutas.includes(busca) ? "Sim" : "Não");
