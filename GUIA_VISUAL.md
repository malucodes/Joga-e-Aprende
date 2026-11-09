# Guia visual e de continuidade do Joga & Aprende

Este guia define a direção visual do site e orienta futuras alterações de páginas, componentes e materiais gráficos. Consulte-o antes de mudar a interface. Quando uma decisão visual ou um recurso mudar, atualize este documento junto com o projeto.

## Direção de arte

A identidade do Joga & Aprende combina a precisão do xadrez com o acabamento de um impresso clássico: vintage, gráfica, editorial e atemporal. O resultado deve transmitir elegância, distinção, inteligência e luxo discreto, com organização contemporânea e leitura fácil.

A inspiração antiga aparece na paleta de papel e tinta, nas formas geométricas, nas ilustrações monocromáticas e na textura quase imperceptível. Não deve parecer envelhecida, desgastada, teatral ou excessivamente ornamentada. Cada detalhe deve ter função editorial e deixar o conteúdo respirar.

Esta direção visual está aplicada nas folhas de estilo compartilhadas e específicas do site. A paleta monocromática substitui verde e terracota como cores dominantes. A atualização preserva a estrutura das páginas, a navegação e os comportamentos existentes.

## Princípios

- **Precisão:** alinhar elementos, margens, padrões e diagramas com cuidado.
- **Sobriedade:** trabalhar principalmente com marfim e preto, sem cores vibrantes ou gradientes decorativos.
- **Materialidade:** sugerir papel e tinta por meio de textura leve, sem sacrificar nitidez.
- **Respiro:** alternar blocos gráficos com áreas livres; não preencher todo espaço disponível.
- **Hierarquia:** destacar uma ideia principal por seção e manter detalhes secundários claramente agrupados.
- **Acessibilidade:** preservar contraste, leitura em telas pequenas, navegação por teclado e nomes acessíveis.

## Paleta

A paleta permanece curta e derivada de papel, tinta e sombras neutras. As variáveis compartilhadas em `site/style.css` definem os tons principais; folhas específicas reutilizam essa escala para diagramas e componentes.

| Uso | Referência | Orientação |
| --- | --- | --- |
| Fundo principal | Marfim quente `#F3EBDD` | Papel levemente amarelado; nunca branco puro. |
| Superfície elevada | Creme claro `#FAF6ED` | Cartões e áreas de leitura, com diferença sutil em relação ao fundo. |
| Tinta principal | Preto profundo `#191815` | Títulos, texto principal, peças e grandes áreas de contraste. |
| Tinta secundária | Carvão `#514C44` | Texto auxiliar e legendas, mantendo contraste confortável. |
| Regras e bordas | Bege de papel `#D8D0C1` | Separadores finos, contornos e tabelas. |
| Sombra impressa | `#E8E0D2` | Variação discreta para camadas e fundos alternativos. |

Evite branco puro, preto azulado, verde ou terracota como acentos dominantes, cores saturadas e gradientes chamativos. Não dependa apenas da cor para indicar jogo, estado, resultado ou seleção.

### Diferenças entre os jogos

Use a mesma paleta de marfim e preto para Xadrez e Damas. Diferencie os conteúdos pela forma e pelo vocabulário gráfico: peças figurativas, coordenadas e diagramas para Xadrez; discos, capturas e padrões quadriculados para Damas. Rótulos explícitos e ícones acessíveis complementam essas diferenças. Páginas gerais podem reunir os dois repertórios de forma equilibrada.

## Texturas e acabamento

- Use uma granulação monocromática delicada em fundos amplos, preferencialmente por SVG leve, textura raster discreta ou padrão CSS de baixa intensidade.
- Mantenha a textura quase imperceptível, em geral entre 2% e 4% de opacidade. Ela deve enriquecer a superfície, nunca competir com letras, peças ou diagramas.
- Aplique a textura em uma camada decorativa sem interação (`pointer-events: none`) e fora da árvore de leitura assistiva quando for apenas ornamental.
- Pequenas irregularidades de tinta podem aparecer em ilustrações ou molduras, sempre de forma rara e controlada.
- Não use manchas grandes, papel rasgado, ruído pesado, riscos sobre textos, filtros de envelhecimento ou efeitos brilhantes.
- Confira o resultado em telas de baixa resolução e com brilho reduzido; os textos e as linhas finas precisam continuar nítidos.

## Formas e padrões

Losangos, quadrados, diagonais e referências ao tabuleiro são a linguagem geométrica recorrente da marca. Use-os para criar ritmo, orientar o olhar ou emoldurar uma seção.

- Mantenha casas e losangos alinhados, com proporções consistentes e bordas nítidas.
- Varie escala e posição: um padrão pequeno pode marcar um rótulo; um bloco maior pode fechar uma borda ou compor uma ilustração.
- Prefira padrões em preto e marfim com contraste controlado. Em áreas de texto, reduza a presença do padrão ou mantenha-o nas margens.
- Reserve áreas limpas ao redor de títulos, instruções, formulários e controles.
- Não aplique o tabuleiro como fundo dominante em todas as páginas nem use ornamentos sem função.

## Ilustrações e imagens

Prefira peças e símbolos de Xadrez em linguagem monocromática, com aparência de gravura, recorte editorial ou impressão clássica. Silhuetas devem ser reconhecíveis e bem definidas. Use preto sobre marfim ou marfim sobre um campo preto.

- Posicione cada imagem como uma peça editorial: defina escala, alinhamento e espaço ao redor antes de adicionar detalhes.
- Use poucas imagens por tela. Diagramas de estudo podem ser funcionais e simples; ilustrações de abertura podem ter mais presença gráfica.
- Para Damas, use discos e padrões de casas coerentes com as regras, sem misturar estilos de ícone ou perspectiva.
- Prefira SVG ou ilustração vetorial para diagramas e símbolos, com texto alternativo quando a imagem transmitir informação.
- Elementos puramente decorativos devem ser ignorados por leitores de tela (`aria-hidden="true"`).
- Evite fotografias coloridas, peças 3D brilhantes, emojis como ilustração principal e conjuntos de ícones com estilos incompatíveis.

## Tipografia

Use dois sistemas tipográficos com funções distintas.

### Títulos e chamadas

Use **Pinyon Script** para títulos curtos e chamadas principais, com `Segoe Script` e `cursive` como alternativas. A família caligráfica precisa incluir acentos e caracteres do português brasileiro. Use tamanho, peso e espaçamento para preservar legibilidade; títulos longos devem quebrar em linhas curtas e bem equilibradas.

Não use a cursiva em parágrafos, instruções, menus, formulários, nomes de controles ou textos longos. Inclua uma alternativa serifada segura para falha no carregamento da fonte.

### Textos informativos e interface

Use uma fonte sem serifa compacta, limpa e legível para parágrafos, navegação, botões, coordenadas, legendas e metadados. DM Sans já faz parte do projeto e pode continuar como base da interface. Evite pesos muito leves em tamanhos pequenos.

A hierarquia deve vir de escala, peso, espaçamento e alinhamento — não de muitas famílias tipográficas. Como referência, mantenha texto corrido em torno de 16 px, metadados nunca abaixo de 12 px e entrelinha confortável (1,5 ou mais para leitura contínua). Verifique contraste e ampliação de texto.

A marca deve manter um tratamento consistente com o logotipo aprovado. A assinatura “ESTÚDIO DE ESTRATÉGIA” permanece em fonte sem serifa, pequena e espaçada; não recrie o desenho da marca de modo diferente em cada página.

## Composição e hierarquia

- Use uma grade clara, margens consistentes e alinhamentos repetíveis entre páginas.
- Em cada seção, dê prioridade a um título ou ação principal; agrupe informações relacionadas em blocos separados.
- Reserve espaço generoso ao redor de títulos, diagramas, ilustrações e formulários.
- Equilibre áreas impressas e áreas livres. Padrões e imagens devem emoldurar ou equilibrar o conteúdo, nunca disputar com ele.
- Em materiais gráficos, a geometria pode ter mais presença. Em regras, avaliações e instruções, priorize espaço livre e leitura.
- Use linhas finas e divisões discretas. Prefira cantos retos ou levemente suavizados; evite aparência de painel excessivamente arredondado.
- Mantenha uma sequência visual previsível para títulos, subtítulos, rótulos, texto, controles e ações.

## Componentes da interface

- **Navegação:** a mesma barra lateral em telas largas e a mesma faixa rolável em telas pequenas. O item atual deve ser identificável por texto, forma e contraste, não apenas por cor.
- **Cabeçalho:** breadcrumb simples, título claro e ação de retorno quando necessária.
- **Botão principal:** tinta preta sobre fundo marfim ou marfim sobre campo preto; formato simples, foco visível e rótulo descritivo.
- **Botão secundário:** superfície clara, contorno fino e texto carvão. Estados selecionados devem combinar contraste e um marcador visual explícito.
- **Cartões e painéis:** superfície creme, contorno discreto e conteúdo alinhado. Use sombra somente quando separar camadas tiver uma função.
- **Tabuleiros:** preserve orientação, regras, quantidade de casas e peças, coordenadas e marcações de lance. Casas e peças precisam continuar distinguíveis em escala pequena.
- **Estados:** vazio, carregamento, erro, seleção e conclusão devem ter texto claro e ser anunciados quando apropriado (`aria-live`).

## Estrutura das páginas e continuidade

Todas as áreas devem compartilhar a marca, a navegação, o sistema tipográfico, a paleta, as margens e os padrões de foco. Preserve as funções existentes ao ajustar a aparência.

- `site/index.html`: visão geral com acesso às áreas de estudo e aos dois jogos.
- `site/jogar/`: partidas de Xadrez e Damas nos modos duas pessoas, computador e revisão/importação.
- `site/xadrez/regras.html` e `site/damas/regras.html`: lições numeradas, índice de tópicos, diagramas e glossário.
- `site/habilidades/`: autoavaliações, resultados e recomendações temáticas.
- `site/treino/`: trilhas, exercícios e conclusão de sessões.
- `site/progresso/`: galeria por jogo, indicadores, formulários e histórico.
- `site/style.css`, `site/rules.css` e folhas de estilo por área: estilos compartilhados e específicos.

A navegação global contém, na mesma ordem em todas as páginas: **Visão geral**, **Meus jogos**, **Habilidades**, **Planos de treino**, **Regras de Xadrez**, **Regras de Damas** e **Meu progresso**. Em telas pequenas, mantenha os sete destinos acessíveis por rolagem horizontal; não esconda abas. Ao criar uma nova área, atualize todas as páginas, caminhos relativos e estado `.active`.

## Responsividade e acessibilidade

- Reorganize colunas em telas pequenas sem alterar a ordem lógica do conteúdo.
- Mantenha navegação utilizável por teclado, `:focus-visible` claro, áreas clicáveis confortáveis e rótulos associados a campos.
- Não dependa exclusivamente de cor, posição, forma ou animação para comunicar estados.
- Evite rolagem horizontal da página; a faixa do menu é a exceção intencional.
- Garanta que tabuleiros, formulários e botões caibam em celulares e continuem operáveis por toque.
- Use texto alternativo para diagramas informativos e esconda ícones decorativos da árvore acessível.
- Respeite preferência por movimento reduzido e não use animações decorativas como requisito de compreensão.

## Conteúdo e comportamento atuais

- O site ensina **Damas Brasileiras**, mas a interface mostra somente o nome **Damas**.
- Avaliações, treinos, progresso e partidas permanecem no armazenamento local do navegador; não há conta nem sincronização entre dispositivos.
- Xadrez usa `chess.js` 0.10.3 incluído localmente em `site/jogar/chess-engine.js`; seus créditos e licença BSD-2-Clause estão em `site/jogar/CHESS-LICENSE.txt`.
- O modo computador é um oponente iniciante. Não o descreva como motor competitivo.
- A revisão de Xadrez aceita PGN e pode consultar partidas públicas; Damas importa e exporta o formato JSON do próprio site.
- Partidas concluídas integram o progresso e os temas podem orientar planos de treino.
- Dados demonstrativos devem ser identificados como demonstração. Não apresente valores simulados como progresso real.
- Não inclua senhas, chaves, tokens ou dados pessoais nos arquivos do site.

## Regras para futuras alterações

1. Leia este guia e os arquivos existentes antes de alterar a interface.
2. Mantenha a paleta de marfim e preto como base e a hierarquia tipográfica de cursiva nos títulos curtos e sem serifa nos textos funcionais.
3. Reutilize a navegação e os componentes compartilhados; não crie uma segunda identidade visual.
4. Use textura, padrões e ilustrações com parcimônia e mantenha textos e controles nítidos.
5. Preserve os destinos, as regras de jogo e os recursos que já funcionam, salvo solicitação explícita.
6. Identifique conteúdo de demonstração e explique quando informações são salvas apenas no navegador.
7. Dê nome acessível a controles, suporte a teclado e estados claros para vazio, carregamento e erro.
8. Ao mudar uma decisão visual ou funcional, atualize este guia e o README.

## Referências de implementação

- Guia de continuidade: `GUIA_VISUAL.md`.
- Página inicial e identidade compartilhada: `site/index.html` e `site/style.css`.
- Regras e diagramas: `site/xadrez/regras.html`, `site/damas/regras.html` e `site/rules.css`.
- Jogos: `site/jogar/index.html`, `site/jogar/games.js` e `site/jogar/games.css`.
