const assessments = {
  xadrez: {
    title: "Xadrez",
    questions: [
      { topic: "Movimento das peças", text: "Como o cavalo se movimenta?", options: ["Em linha reta por qualquer número de casas", "Em formato de L e pode saltar peças", "Somente na diagonal"], answer: 1, advice: "Revise o movimento do cavalo e pratique identificar casas de chegada." },
      { topic: "Segurança do rei", text: "O que significa estar em xeque?", options: ["O rei está sob ataque e precisa responder", "A dama foi capturada", "O rei pode ser capturado no próximo turno sem resposta"], answer: 0, advice: "Estude xeque, respostas legais e a diferença entre xeque e xeque-mate." },
      { topic: "Capturas", text: "Como a torre captura uma peça?", options: ["Saltando sobre ela em L", "Movendo-se em linha reta até a casa ocupada, sem peças no caminho", "Na diagonal, uma casa à frente"], answer: 1, advice: "Pratique linhas e colunas da torre e lembre-se de que ela não salta peças." },
      { topic: "Regras especiais", text: "Quando é possível fazer roque?", options: ["Sempre que o rei estiver ameaçado", "Quando rei e torre envolvidos não se moveram e o rei não atravessa casas atacadas", "Depois de capturar uma peça"], answer: 1, advice: "Revise as condições do roque e as regras de segurança do rei." },
      { topic: "Finais", text: "O que é afogamento?", options: ["O rei está em xeque-mate", "O jogador da vez não está em xeque e não tem lance legal", "Uma peça chega à última fileira"], answer: 1, advice: "Estude finais básicos, xeque-mate e empate por afogamento." }
    ]
  },
  damas: {
    title: "Damas",
    questions: [
      { topic: "Tabuleiro e peças", text: "Quantas pedras cada jogador recebe no início de uma partida de Damas?", options: ["8", "12", "16"], answer: 1, advice: "Revise a montagem: 12 pedras por lado nas casas escuras de um tabuleiro 8 × 8." },
      { topic: "Movimento da pedra", text: "Como uma pedra se movimenta sem capturar?", options: ["Uma casa na diagonal para frente", "Uma casa na diagonal em qualquer direção", "Qualquer número de casas para frente"], answer: 0, advice: "Pratique movimentos simples: a pedra anda uma casa diagonal para frente." },
      { topic: "Captura", text: "Se houver uma captura disponível, o que deve fazer?", options: ["Pode escolher entre capturar e mover", "A captura é obrigatória", "A captura só é obrigatória para a dama"], answer: 1, advice: "Revise a captura obrigatória e como identificar capturas para frente e para trás." },
      { topic: "Lei da Maioria", text: "Há duas sequências possíveis: uma captura duas peças e outra captura três. Qual é obrigatória?", options: ["A que captura duas", "Qualquer uma", "A que captura três"], answer: 2, advice: "Estude a Lei da Maioria: escolha a sequência que captura o maior número de peças." },
      { topic: "Dama e promoção", text: "Como a pedra se torna dama?", options: ["Quando captura duas peças", "Quando termina seu movimento na última fileira adversária", "Quando chega ao centro do tabuleiro"], answer: 1, advice: "Revise a casa de coroação e o movimento da dama por várias casas diagonais." }
    ]
  }
};
const area = document.querySelector('#assessment-area');
let currentGame = 'xadrez';
function getSaved(game) { try { return JSON.parse(localStorage.getItem(`jogaAprende.assessment.${game}`)); } catch { return null; } }
function renderResult(game, score, missed, savedAt) {
  const levels = score <= 3 ? ['Começando', 'Fortaleça os fundamentos e avance sem pressa.'] : score <= 7 ? ['Em desenvolvimento', 'Você já conhece algumas regras. Agora conecte os conceitos.'] : ['Base consistente', 'Você domina vários fundamentos. Continue aprofundando decisões e finais.'];
  const uniqueMissed = [...new Set(missed)];
  const review = uniqueMissed.length ? uniqueMissed.map(topic => `<li>${assessments[game].questions.find(q => q.topic === topic).advice}</li>`).join('') : '<li>Você acertou todas. Escolha um tema avançado e explique as regras com suas próprias palavras.</li>';
  area.innerHTML = `<article class="assessment-result"><p class="eyebrow">SEU RETRATO DE HOJE · ${assessments[game].title.toUpperCase()}</p><div class="result-score"><strong>${score}<small>/10</small></strong><div><h2>${levels[0]}</h2><p>${levels[1]}</p></div></div><h3>Próximos passos sugeridos</h3><ul>${review}</ul><p class="saved-copy">Salvo neste navegador em ${new Date(savedAt).toLocaleDateString('pt-BR')}.</p><div class="result-actions"><button class="button dark" id="retry-assessment" type="button">Refazer avaliação <span>↻</span></button><button class="text-button" id="delete-assessment" type="button">Apagar resultado salvo</button></div></article>`;
  document.querySelector('#retry-assessment').addEventListener('click', () => renderQuiz(game));
  document.querySelector('#delete-assessment').addEventListener('click', () => { localStorage.removeItem(`jogaAprende.assessment.${game}`); renderQuiz(game); });
}
function renderQuiz(game) {
  currentGame = game;
  const saved = getSaved(game);
  if (saved) { renderResult(game, saved.score, saved.missed, saved.savedAt); return; }
  const data = assessments[game];
  area.innerHTML = `<form class="quiz-form"><div class="quiz-heading"><div><p class="eyebrow">${data.title.toUpperCase()} · AUTOAVALIAÇÃO</p><h2>O que você já sabe?</h2></div><span class="quiz-count">5 questões</span></div><p class="quiz-intro">Escolha uma resposta por pergunta. Você verá seu resultado e sugestões ao concluir.</p>${data.questions.map((q,i)=>`<fieldset class="question"><legend><span>${String(i+1).padStart(2,'0')}</span>${q.text}</legend>${q.options.map((option,j)=>`<label class="answer-option"><input type="radio" name="q${i}" value="${j}" required><span>${option}</span></label>`).join('')}</fieldset>`).join('')}<button class="button dark submit-quiz" type="submit">Ver meu resultado <span>↗</span></button><p class="form-error" role="alert" hidden>Responda às cinco perguntas para ver o resultado.</p></form>`;
  area.querySelector('form').addEventListener('submit', event => {
    event.preventDefault(); const form = new FormData(event.currentTarget); let score=0, missed=[];
    data.questions.forEach((q,i)=>{if(Number(form.get(`q${i}`))===q.answer) score+=2; else missed.push(q.topic)});
    const record={score,missed,savedAt:new Date().toISOString()};
    try { localStorage.setItem(`jogaAprende.assessment.${game}`,JSON.stringify(record)); renderResult(game,score,missed,record.savedAt); }
    catch { const error=area.querySelector('.form-error'); error.hidden=false; error.textContent='Não foi possível salvar neste navegador. Verifique as configurações de armazenamento e tente novamente.'; }
  });
}
document.querySelectorAll('.game-choice').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.game-choice').forEach(item=>item.classList.toggle('selected',item===button));renderQuiz(button.dataset.game)}));
renderQuiz(currentGame);

document.querySelectorAll('.game-choice').forEach(button => { if (new URLSearchParams(location.search).get('game') === button.dataset.game) button.click(); });
