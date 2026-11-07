# Guia visual e de continuidade do site

Este documento descreve o visual e os recursos presentes no protótipo. Consulte-o antes de alterar páginas ou componentes para manter uma experiência coerente. Se uma mudança intencional alterar o padrão visual, atualize este guia junto com o site.

## Identidade do projeto

- **Nome exibido:** joga&aprende, com a assinatura “ESTÚDIO DE ESTRATÉGIA”.
- **Idioma e tom:** português brasileiro; acolhedor, tranquilo e encorajador, com foco em aprendizado gradual.
- **Ideia visual:** uma plataforma editorial de estudo, que combina a atmosfera clássica de jogos de tabuleiro com uma interface leve e contemporânea.
- Evite estética de cassino, competição agressiva, excesso de cores saturadas, brilhos, sombras pesadas ou aparência infantil.

## Paleta e tipografia

As cores são definidas em `site/style.css` como variáveis CSS:

- Fundo principal creme: `#f6f4ee` (`--paper`).
- Superfície clara da navegação: `#fbfaf6`.
- Cartões claros: `#fffefa`.
- Texto principal verde carvão: `#202c25` (`--ink`).
- Verde escuro para ações: `#344c3d` (`--green`).
- Verde oliva para ênfase: aproximadamente `#78885e`.
- Verde-lima suave de detalhe: `#d8ed91` (`--lime`).
- Linhas e bordas discretas: `#e4e2d9` (`--line`).
- Textos secundários em cinzas esverdeados, por exemplo `#778078` (`--muted`).
- Ilustração de Xadrez: verdes suaves (`#dfe7d1`, `#758365`) e peças claras.
- Ilustração de Damas: fundo pêssego/bege (`#f0e4d1`) com peças terracota (`#a96544`).

Fontes carregadas pelo Google Fonts no CSS:

- **Playfair Display:** títulos grandes e títulos de cartões, geralmente em peso 600; itálico para frases de destaque.
- **DM Sans:** textos corridos, navegação, botões e interface.
- **DM Mono:** pequenos rótulos em caixa alta, breadcrumbs e metadados, com espaçamento entre letras.

Mantenha contraste suficiente para leitura. Use a fonte serifada como acento editorial, não para parágrafos longos.

## Estrutura da página inicial

O arquivo `site/index.html` apresenta uma página única com navegação por âncoras, nesta ordem:

1. **Barra lateral:** marca, navegação “Visão geral”, “Meus jogos”, “Habilidades” e “Meu progresso”; perfil/jornada no rodapé.
2. **Cabeçalho:** breadcrumb “SEU ESPAÇO / VISÃO GERAL”, sequência de dias de estudo e botão de notificações.
3. **Boas-vindas:** data, título inspirador, texto curto, botão “Continuar minha jornada” e ilustração de tabuleiro de Xadrez.
4. **Seleção de jogos:** título “Vamos jogar?” e dois cartões, Xadrez e Damas.
5. **Ponto de partida:** explicação breve de autoavaliação e uma linha por jogo.
6. **Progresso:** partidas registradas, barra e texto de estado inicial.
7. **Rodapé:** marca e frase curta de incentivo.

## Componentes e aparência

- Navegação lateral fixa em telas largas, fundo quase branco, separador fino e itens com cantos arredondados. O item ativo recebe fundo verde muito pálido e texto verde escuro.
- Conteúdo principal alinhado em uma coluna ampla, com bastante espaço em branco e separadores horizontais finos.
- Títulos principais grandes, serifados e em verde escuro; frases-chave podem usar itálico e oliva.
- Rótulos de seção pequenos, monoespaçados, em caixa alta e com tracking amplo.
- Botão primário verde escuro, texto claro, cantos discretos e seta de direção.
- Cartões de jogo em duas colunas no desktop: ilustração à esquerda e texto à direita. Fundo claro, borda fina, raio de aproximadamente 9 px.
- Cartão de Xadrez usa peça de cavalo como foco; cartão de Damas usa peças circulares terracota. Preserve fundos distintos para diferenciar visualmente os jogos.
- Painéis de habilidades e progresso têm superfícies claras, bordas delicadas e ícones circulares ou em pequenos blocos suaves.
- Ícones atuais são caracteres Unicode e peças de tabuleiro. Ao substituí-los, mantenha simplicidade, consistência de traço e significado acessível.
- Cantos arredondados são discretos (em geral 6–11 px); sombras são raras e leves, usadas principalmente no tabuleiro ilustrado.

## Comportamento responsivo

O CSS define dois pontos de adaptação principais: até 950 px e até 700 px.

- Em largura média, a barra lateral estreita e o conteúdo reduz margens; os cartões ajustam a proporção entre ilustração e texto.
- Em celular (até 700 px), a navegação vira uma faixa superior fixa/aderente, com marca e ícones; parte dos links é ocultada para caber.
- O conteúdo passa a ocupar a largura disponível com margens laterais pequenas.
- A ilustração do tabuleiro fica decorativa e translúcida atrás do texto de boas-vindas.
- Cartões de jogos e painéis empilham em uma coluna.
- Garanta que textos, controles e cartões continuem legíveis e sem rolagem horizontal em telas estreitas.

## Recursos e estado atual

- A página possui âncoras para início, jogos, habilidades e progresso.
- `site/script.js` marca como ativo o link de navegação clicado.
- Os dados atuais são demonstrativos: sequência de estudo, níveis, avaliação e partidas não estão conectados a conta ou banco de dados.
- Autoavaliações, registros de partidas, recomendações e progresso real ainda precisam de implementação antes de serem considerados funcionais.
- Os cartões e links devem levar a conteúdo real quando as páginas correspondentes forem implementadas; não deixe controles aparentes sem ação ou explicação.

## Organização dos arquivos

- `site/index.html`: estrutura e conteúdo da página inicial.
- `site/style.css`: identidade visual, componentes e regras responsivas.
- `site/script.js`: interações de interface.
- As pastas `site/xadrez/`, `site/damas/`, `site/progresso/`, `site/recursos/` e `site/sobre/` organizam as futuras áreas de conteúdo.

## Regras para futuras alterações

1. Leia este guia e os arquivos existentes antes de alterar a interface.
2. Reutilize variáveis, padrões de cartão, tipografia, botões e espaçamentos existentes; evite criar uma segunda identidade visual.
3. Preserve os destinos de navegação e a estrutura de recursos já implementados, salvo quando a solicitação pedir uma mudança.
4. Construa páginas novas com os mesmos cabeçalho, navegação, linguagem visual e adaptação mobile.
5. Diferencie Xadrez e Damas com seus acentos ilustrativos atuais, mantendo a paleta geral suave.
6. Dados fictícios devem ser identificados como demonstração; não apresente valores simulados como progresso real.
7. Ao adicionar comportamento, torne-o acessível por teclado, dê nome aos controles e forneça estados claros para vazio, carregamento e erro.
8. Atualize este guia quando cores, fontes, componentes, estrutura de navegação ou recursos mudarem de forma relevante.

## Convenção de nome e regras de Damas

O site ensina a variante **Damas Brasileiras**, mas a interface deve apresentar o jogo somente como **Damas**. Use “Damas Brasileiras” apenas em documentação interna ou referências editoriais quando necessário para identificar a variante; não altere o nome dos menus, títulos ou cartões para essa forma longa.

## Páginas de regras

As páginas `site/xadrez/regras.html` e `site/damas/regras.html` usam o estilo compartilhado em `site/rules.css`. Mantêm a identidade existente com hero editorial, índice de tópicos aderente, lições numeradas, painéis suaves, diagramas e glossário. Preservar links de retorno e de troca entre jogos, âncoras com foco visível, adaptação para celular e nomes acessíveis dos diagramas. A página de Damas ensina a variante brasileira de 64 casas; o nome visível permanece “Damas”.

Os diagramas de Damas devem usar 64 células HTML explícitas dentro de `.board-squares`; peças e casas de movimento são marcadas por classes, não por texto sobreposto ou faixas de fundo. Desativar pseudo-elementos antigos quando reconstruir esses componentes.

## Autoavaliação

A página `site/habilidades/index.html` reutiliza o hero e os componentes visuais do site, com seletor de jogo em cartões, perguntas em fieldsets acessíveis, resultados em painel e recomendações temáticas. A interface informa que o resultado é salvo localmente no navegador. Não apresentar essa avaliação como diagnóstico certificado ou sincronizado.
