# Demo de Transpiladores (Babel, TypeScript, Sass)

## Requisitos
- Node.js instalado

## Passos
```bash
npm install
npm run build:babel
node dist/frutas.js

npm run build:ts
node dist-ts/main.js
```

### Arquivos de entrada
- `src/frutas.js` — Babel (ES6+/ES202x → ES5)
- `ts/main.ts` — TypeScript → JavaScript

### Onde ver os resultados
- `dist/` — JavaScript gerado pelo Babel
- `dist-ts/` — JavaScript gerado pelo TypeScript
