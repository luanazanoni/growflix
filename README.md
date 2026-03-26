# Growflix 🎬

Site de streaming inspirado na Netflix, com conteúdos em vídeo da Growdev.

## Estrutura de Pastas

```
growflix/
├── assets/
│   ├── images/          ← Imagens do projeto
│   └── libs/
│       └── bootstrap-5.3.0/
│           ├── css/     ← bootstrap.min.css
│           └── js/      ← bootstrap.bundle.min.js
├── css/
│   └── style.css
├── js/
│   ├── movies.js        ← Array de vídeos
│   └── home.js          ← Lógica de renderização do DOM
├── index.html           ← Página de entrada (landing)
└── home.html            ← Página principal com os vídeos
```

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3

## Funcionalidades

- **index.html**: Landing page estilo Netflix com hero, seções de features, FAQ e footer
- **home.html**: Página principal com navbar fixa, banner hero, seções de vídeos por categoria
- Vídeos carregados **dinamicamente** via JavaScript + manipulação do DOM
- Array `movies` com todos os vídeos organizados por categoria
- Modal de reprodução de vídeos do YouTube
- Design responsivo com Bootstrap