function apresentar(p) {
    return "Ol\u00E1, meu nome \u00E9 ".concat(p.nome, " e tenho ").concat(p.idade, " anos.");
}
var pessoas = [
    { nome: "João", idade: 20 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 17 }
];
pessoas.map(apresentar).forEach(function (msg) { return console.log(msg); });
var maiores = pessoas.filter(function (p) { return p.idade >= 18; });
console.log("\nQuantidade de maiores: ".concat(maiores.length));
