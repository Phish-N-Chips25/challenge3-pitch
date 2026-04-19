# Phish-N-Chips · Challenge 3 · Presentation Site

Site-pitch em React para apresentação do **Challenge 3 (ISEP 2025/26)** — disciplinas RNAAPIA e LNIAGIA.

> **Paper**: *From Classical Models to LLM-as-a-Judge: Anomaly Detection and Face Recognition for Cyber-Physical Security*

Construído com **React 18 + Vite + TailwindCSS**. Bilingue (PT/EN), tema dark "forensic editorial", pronto para projecção em sala.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (incluído com Node.js)

## Correr localmente

```bash
# 1. Instalar dependências (só na primeira vez)
npm install

# 2. Arrancar em modo de desenvolvimento
npm run dev
```

O site abre automaticamente em `http://localhost:5173`.

## Build de produção

```bash
npm run build       # gera a pasta dist/
npm run preview     # pré-visualiza a build localmente
```

---

## Deploy para GitHub Pages

O repositório no GitHub é `phish-n-chips25/Challange-3` (URL final: `https://phish-n-chips25.github.io/Challange-3/`).

### Antes do primeiro deploy

**1. Ajustar o `base` em `vite.config.js`:**

```js
export default defineConfig({
  // ...
  base: '/Challange-3/',   // <- adicionar esta linha
})
```

**2. Dar permissões de workflow no repositório:**
Settings → Pages → Source → `gh-pages` branch

**3. Deploy:**

```bash
npm run deploy
```

Este comando faz `npm run build` e publica automaticamente a pasta `dist/` na branch `gh-pages`.

### Alternativa: deploy para o user/org page (raiz)

Se preferirem publicar na raiz `https://phish-n-chips25.github.io/`, mantenham `base: '/'` e usem um repositório chamado `phish-n-chips25.github.io`.

---

## Adicionar o vídeo de computer vision

O placeholder de vídeo está na secção **Face Recognition**.

1. Gravar/exportar o vídeo de demonstração
2. Colocar o ficheiro em `public/demos/face-recognition.mp4`
3. Abrir `src/components/FaceRecognition.jsx` e substituir o placeholder por:

```jsx
<video
  src="/demos/face-recognition.mp4"
  controls
  className="w-full aspect-video bg-ink-900"
/>
```

---

## Estrutura

```
phish-n-chips-site/
├── public/
│   ├── favicon.svg
│   └── demos/                      ← colocar aqui o vídeo
├── src/
│   ├── main.jsx                    Entry React
│   ├── App.jsx                     Root com todas as secções
│   ├── index.css                   Tailwind + tokens
│   ├── i18n/
│   │   └── translations.js         ⭐ Todo o conteúdo PT/EN
│   ├── context/
│   │   └── LanguageContext.jsx     Toggle idioma
│   ├── data/
│   │   ├── team.js                 Membros da equipa
│   │   └── references.js           Referências curadas
│   └── components/
│       ├── Navigation.jsx          Nav fixa com scroll-spy
│       ├── Hero.jsx                Secção 00 - Abertura
│       ├── Scenario.jsx            Secção 01 - Cenário
│       ├── Architecture.jsx        Secção 02 - Visão geral
│       ├── AnomalyDetection.jsx    Secção 03 - Módulo 1 (LLM)
│       ├── FaceRecognition.jsx     Secção 04 - Módulo 2 (Face)
│       ├── Results.jsx             Secção 05 - Métricas
│       ├── Limitations.jsx         Secção 06 - Limites + Challenge 4
│       ├── Team.jsx                Equipa
│       ├── References.jsx          Refs bibliográficas
│       ├── Footer.jsx              Rodapé
│       ├── Logo.jsx                Logótipo SVG
│       ├── LanguageToggle.jsx      Botão PT/EN
│       ├── Section.jsx             Wrapper reutilizável
│       └── diagrams/
│           ├── SystemOverviewDiagram.jsx   Overview 2 módulos
│           ├── DualSentinelDiagram.jsx     Pipeline Fig. 1 do paper
│           └── OpenSetDiagram.jsx          Pipeline Fig. 4 do paper
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Personalização rápida

### Mudar texto
Quase todo o conteúdo está centralizado em **`src/i18n/translations.js`** (PT e EN lado a lado). Editar aí é suficiente para alterar 90% do site.

### Membros da equipa
Editar **`src/data/team.js`** (nome, número, email, papel no projecto).

### Referências mostradas
Editar **`src/data/references.js`** (escolher as mais relevantes das 36 do paper).

### Cores e tipografia
Definidas em **`tailwind.config.js`** (paleta) e **`index.html`** (fontes carregadas do Google Fonts).

Paleta actual:
- `ink` — pretos quentes do fundo
- `paper` — off-whites quentes do texto
- `phosphor` — verde ácido (`#b8ff3a`) — acento principal
- `signal.red/amber/mint` — ameaça / suspeito / normal

---

## Durante a apresentação (5 min)

Sugestão de percurso pelo site:

| Tempo | Secção | Mensagem-chave |
|-------|--------|---------------|
| 0:00 – 0:30 | Hero + Scenario | "Os ataques modernos saltam entre domínios" |
| 0:30 – 1:00 | Architecture | "Duas paredes independentes, um objectivo" |
| 1:00 – 2:30 | AnomalyDetection | Clássico vs Dual Sentinel · 5 camadas anti-alucinação |
| 2:30 – 3:30 | FaceRecognition | Closed vs Open-set · escolha do open · demo |
| 3:30 – 4:15 | Results | 100% acc, 0.00% EER, 35% windows poupadas |
| 4:15 – 4:45 | Limitations | Honestidade + teaser Challenge 4 |
| 4:45 – 5:00 | Team + Refs | Créditos |

**Dicas**:
- `→` / `↓` para navegar entre secções
- `Ctrl+Shift+F` em full-screen do browser antes de começar
- Toggle PT/EN no canto superior direito

---

## Notas de manutenção

- A paleta e tipografia são deliberadamente distintivas (Fraunces + JetBrains Mono + Manrope). Evitar trocar por Inter/Roboto — parece genérico.
- Os diagramas SVG foram recriados em JSX (em vez de imagens) para permanecerem nítidos em projecção e reagirem ao idioma.
- Todos os textos longos estão em `text-pretty` e `text-balance` para evitar *widows* tipográficos — não remover estas classes.

---

© 2025/26 Phish-N-Chips · ISEP/IPP
