document.addEventListener('DOMContentLoaded', () => {

  if (sessionStorage.getItem('mfLoggedIn') !== 'true') {
    window.location.replace('index.html');
    return;
  }

  const selectedLoanId = sessionStorage.getItem('selectedLoan');
  if (!selectedLoanId || !LOANS[selectedLoanId]) {
    window.location.replace('select-loan.html');
    return;
  }

  const loan = LOANS[selectedLoanId];
  renderLoan(loan);

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('mfLoggedIn');
      sessionStorage.removeItem('mfUser');
      sessionStorage.removeItem('selectedLoan');
      window.location.replace('index.html');
    });
  }

  const hamburger = document.getElementById('hamburger');
  const mainNav = document.querySelector('.main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  document.querySelectorAll('.loan-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;

      document.querySelectorAll('.loan-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.loans-panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mainNav) mainNav.classList.remove('open');
      }
    });
  });

});

function renderLoan(loan) {
  document.getElementById('closedLoanContent').innerHTML = `
    <div class="loan-item">
      <div class="loan-info">
        <div class="loan-item-header">
          <span class="loan-number">Loan No. ${loan.number}</span>
          <span class="status-badge closed">Closed</span>
        </div>
        <div class="loan-details">
          <div class="loan-detail">
            <label>Loan Type</label>
            <span>${loan.type}</span>
          </div>
          <div class="loan-detail">
            <label>Branch</label>
            <span>${loan.branch}</span>
          </div>
          <div class="loan-detail">
            <label>Applied Month</label>
            <span>${loan.appliedMonth}</span>
          </div>
          <div class="loan-detail">
            <label>Closure Date</label>
            <span>${loan.closureDate}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('activityList').innerHTML = getLoanActivities(loan).map((item, index) => `
    <div class="activity-item">
      <div class="activity-icon ${item.type}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">${ACTIVITY_ICONS[item.type]}</svg>
      </div>
      <div class="activity-content">
        <div class="activity-header">
          <h4>${item.title}</h4>
          <span class="activity-date">${item.date}</span>
        </div>
        <p>${item.text}</p>
        ${item.statementApply ? `
          <button type="button" class="statement-apply-link" data-statement-btn="${index}">Didn't come? Apply here</button>
          <p class="statement-notice hidden" data-statement-notice="${index}">A new statement will come in 5 to 6 days.</p>
        ` : ''}
      </div>
    </div>
  `).join('');

  document.querySelectorAll('[data-statement-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.dataset.statementBtn;
      const notice = document.querySelector(`[data-statement-notice="${index}"]`);
      if (notice) notice.classList.remove('hidden');
      btn.disabled = true;
      btn.textContent = 'Application submitted';
    });
  });
}
