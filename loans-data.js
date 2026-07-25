const LOANS = {
  '3452003193': {
    number: '3452003193',
    branch: 'Amalapuram-1',
    type: 'Gold Loan',
    appliedMonth: 'March 2025',
    closureDate: 'April 2025',
    status: 'closed',
    sanctioned: '₹96,002'
  },
  '3452004843': {
    number: '3452004843',
    branch: 'Katrenikona',
    type: 'Gold Loan',
    appliedMonth: 'November 2025',
    closureDate: 'April 2026',
    status: 'closed',
    sanctioned: '₹119,025'
  }
};

function getDefaultActivities(loan) {
  const n = loan.number;
  const b = loan.branch;

  return [
    { type: 'closed', title: 'Loan Closed', date: loan.closureDate, text: `Gold loan account <strong>${n}</strong> closed successfully at ${b} branch.` },
    { type: 'otp', title: 'OTP Received', date: loan.closureDate, text: `OTP sent to your registered mobile number for loan closure verification of <strong>${n}</strong>.` },
    { type: 'otp', title: 'OTP Received', date: loan.closureDate, text: `OTP sent to your registered mobile number for loan closure of <strong>${n}</strong>.` },
    { type: 'payment', title: 'Payment Successful', date: loan.closureDate, text: `Paid <strong>₹50,000</strong> towards loan number <strong>${n}</strong>.` },
    { type: 'payment', title: 'Payment Successful', date: loan.closureDate, text: `Paid <strong>₹46,001</strong> towards loan number <strong>${n}</strong>.` },
    { type: 'payment', title: 'Payment Successful', date: loan.closureDate, text: `Paid <strong>₹1,200</strong> towards loan number <strong>${n}</strong>.` },
    { type: 'applied', title: 'Loan Applied', date: loan.appliedMonth, text: `Gold loan application submitted. Loan number <strong>${n}</strong> assigned at ${b} branch.` },
    { type: 'sanctioned', title: 'Loan Offer Submitted', date: loan.appliedMonth, text: `Your loan offer was submitted and you got <strong>${loan.sanctioned}</strong> sanctioned for loan number <strong>${n}</strong>.` },
    { type: 'otp', title: 'OTP Received', date: loan.appliedMonth, text: 'OTP sent to your registered mobile number for loan application verification.' },
    { type: 'otp', title: 'OTP Received', date: loan.appliedMonth, text: 'OTP sent to your registered mobile number for loan offer confirmation.' }
  ];
}

function getLoan4843Activities(loan) {
  const n = loan.number;
  const b = loan.branch;

  return [
    { type: 'applied', title: 'Statement Sent', date: 'July 2026', text: `We sent your loan cleared statement to your registered address for loan number <strong>${n}</strong>.`, statementApply: true },
    { type: 'closed', title: 'Loan Closed', date: 'April 2026', text: `Gold loan account <strong>${n}</strong> closed successfully at ${b} branch.` },
    { type: 'otp', title: 'OTP Received', date: 'April 2026', text: `OTP sent to your registered mobile number for loan closure verification of <strong>${n}</strong>.` },
    { type: 'otp', title: 'OTP Received', date: 'April 2026', text: `OTP sent to your registered mobile number for loan closure of <strong>${n}</strong>.` },
    { type: 'payment', title: 'Payment Successful', date: 'April 2026', text: `Paid <strong>₹50,000</strong> towards loan number <strong>${n}</strong>.` },
    { type: 'payment', title: 'Payment Successful', date: 'April 2026', text: `Paid <strong>₹49,000</strong> towards loan number <strong>${n}</strong>.` },
    { type: 'payment', title: 'Payment Successful', date: 'April 2026', text: `Paid <strong>₹20,025</strong> towards loan number <strong>${n}</strong>.` },
    { type: 'sanctioned', title: 'Loan Sanctioned', date: 'November 2025', text: `Loan sanctioned for <strong>₹119,025</strong> for loan number <strong>${n}</strong>.` },
    { type: 'sanctioned', title: 'Loan Sanctioned', date: 'November 2025', text: `Loan sanctioned for <strong>1X Necklace</strong> weight <strong>14 grams</strong> for loan number <strong>${n}</strong>.` },
    { type: 'otp', title: 'OTP Received', date: 'November 2025', text: 'OTP sent to your registered mobile number for loan application verification.' },
    { type: 'otp', title: 'OTP Received', date: 'November 2025', text: 'OTP sent to your registered mobile number for loan offer confirmation.' }
  ];
}

function getLoanActivities(loan) {
  if (loan.number === '3452004843') {
    return getLoan4843Activities(loan);
  }
  return getDefaultActivities(loan);
}

const ACTIVITY_ICONS = {
  closed: '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',
  otp: '<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
  payment: '<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>',
  interest: '<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.1-.89-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>',
  applied: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>',
  sanctioned: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>'
};
