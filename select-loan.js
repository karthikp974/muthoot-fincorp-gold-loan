document.addEventListener('DOMContentLoaded', () => {

  if (sessionStorage.getItem('mfLoggedIn') !== 'true') {
    window.location.replace('index.html');
    return;
  }

  const list = document.getElementById('loanSelectList');

  Object.values(LOANS).forEach(loan => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'loan-select-item';
    btn.innerHTML = `
      <span class="loan-select-number">Loan No. ${loan.number}</span>
      <span class="loan-select-meta">${loan.type} · ${loan.branch}</span>
      <span class="loan-select-status">${loan.status === 'closed' ? 'Closed' : 'Active'}</span>
    `;
    btn.addEventListener('click', () => {
      sessionStorage.setItem('selectedLoan', loan.number);
      window.location.href = 'dashboard.html';
    });
    list.appendChild(btn);
  });

});
