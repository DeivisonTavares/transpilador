interface Pessoa {
  nome: string;
  idade: number;
}

function apresentar(p: Pessoa): string {
  return `Olá, meu nome é ${p.nome} e tenho ${p.idade} anos.`;
}

const pessoas: Pessoa[] = [
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 17 }
];

pessoas.map(apresentar).forEach((msg) => console.log(msg));

const maiores = pessoas.filter(p => p.idade >= 18);
console.log(`\nQuantidade de maiores: ${maiores.length}`);
