(() => {
  const levelNames = score => score <= 3 ? 'Começando' : score <= 7 ? 'Em desenvolvimento' : 'Base consistente';
  const saved = game => {
    try { const value=JSON.parse(localStorage.getItem(`jogaAprende.assessment.${game}`)); return value && Number.isFinite(value.score) ? value : null; }
    catch { return null; }
  };
  ['xadrez','damas'].forEach(game => {
    const result=saved(game); if(!result) return;
    document.querySelectorAll(`[data-level="${game}"]`).forEach(node=>node.textContent=levelNames(result.score));
    document.querySelectorAll(`[data-assessment-hint="${game}"]`).forEach(node=>node.textContent=`Autoavaliação: ${result.score}/10 · refaça quando quiser`);
  });
  const records=['xadrez','damas'].map(saved).filter(Boolean);
  const summary=document.querySelector('[data-progress-summary]');
  if(summary && records.length) summary.textContent=`${records.length} autoavaliação${records.length===1?'':'ões'} salva${records.length===1?'':'s'} neste navegador.`;
  if(summary && records.length){
    const countNode=document.querySelector('.progress-stat > strong');
    const line=document.querySelector('.progress-line span');
    const foot=document.querySelector('.progress-foot span:first-child');
    if(countNode) countNode.textContent=String(records.length);
    if(line) line.style.width=`${records.length*50}%`;
    if(foot) foot.textContent='Autoavaliações';
  }
})();
