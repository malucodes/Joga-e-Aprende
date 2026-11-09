# Projeto de estudo de jogos de tabuleiro

Este projeto reúne a estrutura inicial de um site para estudar e desenvolver habilidades em **Xadrez** e **Damas**. A proposta é apresentar as regras de cada jogo, ajudar a mapear o nível atual da pessoa, sugerir pontos de melhoria e organizar atividades de treino e acompanhamento do progresso.

## Estrutura do site

- `site/index.html` — visão geral e acesso às áreas de estudo.
- `site/jogar/` — partidas de Xadrez e Damas, jogo contra computador e revisão.
- `site/xadrez/regras.html` e `site/damas/regras.html` — regras e fundamentos.
- `site/habilidades/` — avaliação e registro das habilidades nos dois jogos.
- `site/treino/` — trilhas de prática para Xadrez e Damas.
- `site/progresso/` — acompanhamento das sessões, partidas e evolução.
- `site/style.css`, `site/rules.css` e folhas de estilo das áreas — identidade visual e componentes compartilhados.

## Objetivos

1. Reunir regras e conteúdos de aprendizagem para Xadrez e Damas.
2. Registrar habilidades atuais e acompanhar a evolução.
3. Identificar pontos fortes e aspectos que precisam de prática.
4. Organizar treinos e recursos em seções claras.

## Manutenção

Este README deve acompanhar a evolução do projeto. Quando novas decisões, funcionalidades, jogos ou seções forem definidos, atualize aqui a descrição e a estrutura para refletir as informações mais recentes.

## Protótipo web

Foi criado um protótipo visual responsivo em site/index.html, com estilos em site/style.css e interações simples em site/script.js. A página apresenta uma visão geral da jornada, cartões de Xadrez e Damas, ponto de partida para avaliação de habilidades e área de progresso. Para visualizar, abra site/index.html em um navegador.

Guia de identidade visual e continuidade: GUIA_VISUAL.md. A direção vintage editorial está aplicada nas folhas de estilo: marfim e preto, textura sutil de papel, geometria inspirada no xadrez, títulos caligráficos e textos funcionais sem serifa. As páginas mantêm a estrutura e os comportamentos existentes.

## Decisão sobre Damas

O conteúdo de regras, avaliação e treino seguirá a variante **Damas Brasileiras**. No texto e na navegação do site, o nome visível do jogo continuará sendo simplesmente **Damas**.

## Conteúdo de regras

A etapa de fundamentos inclui páginas de estudo para Xadrez e Damas, com navegação por tópicos, diagramas, exemplos e glossários. Damas segue a variante brasileira de 64 casas, mantendo “Damas” como nome exibido na interface. As páginas ficam em `site/xadrez/regras.html` e `site/damas/regras.html`; o estilo compartilhado está em `site/rules.css`. Os cartões da página inicial levam às respectivas páginas.

## Autoavaliação de habilidades

A etapa 3 adiciona avaliações rápidas em `site/habilidades/` para Xadrez e Damas, com pontuação por conceitos, nível orientativo, recomendações temáticas e opção de refazer/apagar. A avaliação mais recente de cada jogo é salva apenas no `localStorage` do navegador, sem conta ou transmissão ao servidor.

## Planos de treino

A etapa 4 adiciona a página `site/treino/index.html`, com trilhas progressivas para Xadrez e Damas. Cada trilha contém cinco sessões com objetivos, passos, exercícios com respostas explicadas e conclusão marcável. As atividades concluídas e sugestões baseadas nas avaliações ficam no armazenamento local do navegador, sem sincronização entre dispositivos.

## Acompanhamento de progresso

A etapa 5 adiciona `site/progresso/index.html`, que registra sessões de estudo e partidas, mostra totais, tempo, dias consecutivos e resultados, e apresenta histórico com remoção individual. O usuário pode exportar e importar uma cópia JSON local. Registros, avaliações e treinos concluídos são mantidos no navegador e não sincronizam entre dispositivos.

### Navegação do painel de progresso

A área de progresso abre primeiro uma galeria com cards de Xadrez e Damas. Cada card abre seu painel individual, com registros e histórico filtrados para aquele jogo; “Todos os jogos” retorna à galeria. O histórico já salvo permanece compatível.

## Auditoria do escopo

As etapas de escopo, conteúdo de regras, autoavaliação, planos de treino, acompanhamento local e partidas no site foram implementadas. O commit `88ad4d7` foi enviado ao branch `main`; a publicação depende da conclusão do deploy configurado na Vercel. Os dados permanecem locais ao navegador; não existe conta nem sincronização entre dispositivos.

## Partidas no site

A área `site/jogar/` oferece três modos: duas pessoas no mesmo dispositivo, partida contra computador e revisão/importação. Xadrez usa a versão 0.10.3 de `chess.js`, incluída localmente em `site/jogar/chess-engine.js`, para validar regras e PGN; isso evita que a abertura do tabuleiro dependa de um CDN. A licença BSD-2-Clause e os créditos do motor estão em `site/jogar/CHESS-LICENSE.txt`. A revisão também pode buscar partidas públicas do Chess.com PubAPI ou Lichess. Damas usa regras brasileiras de 64 casas e importa/exporta arquivos de partida JSON do próprio site. Partidas concluídas, empates combinados e desistências entram no mesmo histórico local usado por Meu Progresso; o tema de foco alimenta as sugestões dos planos. O modo computador é um oponente iniciante baseado em lances legais e capturas prioritárias, não um motor de nível competitivo.

A área Jogar oferece três modos implementados: duas pessoas no mesmo dispositivo, contra um computador iniciante e revisão/importação. O modo de revisão conecta Chess.com/Lichess e PGN para Xadrez; para Damas, usa o formato JSON exportado pelo próprio site. Partidas feitas aqui registram resultado, jogo, duração, tema e lances no progresso local. Partidas entre dispositivos em tempo real ainda exigiriam serviço de sinalização/conexão e não fazem parte destes três modos atuais.

## Galeria de jogos

A área **Meus jogos** abre inicialmente uma galeria com cartões de Xadrez e Damas. Cada cartão leva à sala do respectivo jogo, onde ficam os modos de duas pessoas, contra computador e revisão/importação. O link “Meus jogos” retorna à galeria, e links diretos com `?game=xadrez` ou `?game=damas` continuam disponíveis.

## Ajustes da sala de jogo

Os títulos principais das páginas compartilham uma única escala tipográfica. Na galeria Meus jogos, cada cartão completo é um link para abrir o respectivo jogo. Dentro da sala, o título e a introdução da galeria desaparecem para dar lugar ao tabuleiro e ao painel lateral: modos na ordem “Contra o computador”, “Duas pessoas” e “Revisar partida”; indicação da vez; lista de lances; instruções; e uma seção identificada como “Ações da partida”.

## Consistência dos cartões e da ilustração de Damas

Os cartões de navegação e conteúdo adotam o mesmo hover sutil do painel Meu Progresso (elevação de 2 px e sombra leve). Na sala de jogo, o único retorno visível é “Início”. A ilustração de Damas na galeria reutiliza os mesmos discos e a mesma composição da Visão Geral.

## Galeria dos planos de treino

A aba Planos de treino apresenta as práticas de cada jogo em uma galeria de cards. Cada card abre um modal com objetivo, passos, exercício, resposta explicada e recomendação de aprofundamento. A conclusão pode ser marcada dentro do modal e continua salva localmente; há retorno visível à Visão geral e fechamento por botão, fundo ou tecla Esc.
