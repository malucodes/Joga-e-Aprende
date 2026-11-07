# Projeto de estudo de jogos de tabuleiro

Este projeto reúne a estrutura inicial de um site para estudar e desenvolver habilidades em **Xadrez** e **Damas**. A proposta é apresentar as regras de cada jogo, ajudar a mapear o nível atual da pessoa, sugerir pontos de melhoria e organizar atividades de treino e acompanhamento do progresso.

## Estrutura do site

- `site/inicio/` — página inicial e visão geral.
- `site/xadrez/regras/` — regras e fundamentos do Xadrez.
- `site/xadrez/habilidades/` — avaliação e registro das habilidades no Xadrez.
- `site/xadrez/treino/` — exercícios e práticas de Xadrez.
- `site/damas/regras/` — regras e fundamentos de Damas.
- `site/damas/habilidades/` — avaliação e registro das habilidades em Damas.
- `site/damas/treino/` — exercícios e práticas de Damas.
- `site/progresso/` — acompanhamento da evolução nos dois jogos.
- `site/recursos/` — materiais de referência e apoio.
- `site/sobre/` — informações sobre o projeto.

## Objetivos

1. Reunir regras e conteúdos de aprendizagem para Xadrez e Damas.
2. Registrar habilidades atuais e acompanhar a evolução.
3. Identificar pontos fortes e aspectos que precisam de prática.
4. Organizar treinos e recursos em seções claras.

## Manutenção

Este README deve acompanhar a evolução do projeto. Quando novas decisões, funcionalidades, jogos ou seções forem definidos, atualize aqui a descrição e a estrutura para refletir as informações mais recentes.

## Protótipo web

Foi criado um protótipo visual responsivo em site/index.html, com estilos em site/style.css e interações simples em site/script.js. A página apresenta uma visão geral da jornada, cartões de Xadrez e Damas, ponto de partida para avaliação de habilidades e área de progresso. Para visualizar, abra site/index.html em um navegador.

Guia de identidade visual e continuidade: GUIA_VISUAL.md. Consulte-o antes de atualizar o estilo ou os componentes do site.

## Decisão sobre Damas

O conteúdo de regras, avaliação e treino seguirá a variante **Damas Brasileiras**. No texto e na navegação do site, o nome visível do jogo continuará sendo simplesmente **Damas**.

## Conteúdo de regras

A etapa de fundamentos inclui páginas de estudo para Xadrez e Damas, com navegação por tópicos, diagramas, exemplos e glossários. Damas segue a variante brasileira de 64 casas, mantendo “Damas” como nome exibido na interface. As páginas ficam em `site/xadrez/regras.html` e `site/damas/regras.html`; o estilo compartilhado está em `site/rules.css`. Os cartões da página inicial levam às respectivas páginas.
