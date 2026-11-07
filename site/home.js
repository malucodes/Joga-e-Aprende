(() => {
  const levelNames = score => score <= 3 ? 'Começando' : score <= 7 ? 'Em desenvolvimento' : 'Base consistente';
  const savedAssessment = game => { try { const value=JSON.parse(localStorage.getItem(`jogaAprende.assessment.${game}`)); return value && Number.isFinite(value.score) ? value : null; } catch { return null; } };
  ['xadrez','damas'].forEach(game => { const result=savedAssessment(game); if(!result)return; document.querySelectorAll(`[data-level="${game}"]`).forEach(node=>node.textContent=levelNames(result.score));document.querySelectorAll(`[data-assessment-hint="${game}"]`).forEach(node=>node.textContent=`Autoavaliação: ${result.score}/10 · refaça quando quiser`); });
  let records=[];try{const value=JSON.parse(localStorage.getItem('jogaAprende.progress.v1'));if(Array.isArray(value))records=value}catch{}
  let practiceCount=0;for(const game of ['xadrez','damas']){try{const saved=JSON.parse(localStorage.getItem('jogaAprende.training.v1'))||{};practiceCount+=Array.isArray(saved[game])?saved[game].length:0}catch{}}
  const assessments=['xadrez','damas'].map(savedAssessment).filter(Boolean).length;
  const count=records.length+practiceCount;
  const summary=document.querySelector('[data-progress-summary]');
  if(summary){summary.textContent=count||assessments?`${records.length} sessão(ões)/partida(s), ${practiceCount} prática(s) concluída(s) e ${assessments} autoavaliação(ões) neste navegador.`:'Registre uma sessão ou partida para acompanhar seu percurso.';}
  if(count){const node=document.querySelector('.progress-stat > strong'),line=document.querySelector('.progress-line span'),label=document.querySelector('.progress-foot span:first-child');if(node)node.textContent=String(count);if(line)line.style.width=`${Math.min(100,count*12)}%`;if(label)label.textContent='Atividades registradas';}
})();
